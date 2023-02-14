import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  message,
  UploadProps,
  UploadFile,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const SignupForm = () => {
  const [form] = Form.useForm();
  const [banner, setBanner] = useState<UploadFile<any> | File>();

  const onFinish = (values: any) => {
    console.log(values);
    console.log(banner);
  };

  const onReset = () => {
    form.resetFields();
  };

  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    maxCount: 1,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setBanner(info.file);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
      setBanner(e.dataTransfer.files[0]);
    },
  };

  return (
    <Form form={form} name="control-hooks" onFinish={onFinish}>
      <Upload.Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Company Banner</p>
        <p className="ant-upload-hint">
          Click or drag file to this area to upload
        </p>
      </Upload.Dragger>
      <Form.Item
        name="name"
        rules={[
          { required: true, message: "Name is required" },
          {
            min: 3,
            message: "Name must be at least 3 characters long",
          },
          {
            max: 20,
            message: "Name must be at most 20 characters long",
          },
        ]}
      >
        <Input
          size="large"
          placeholder="Name"
          style={{ marginTop: "4%" }}
          prefix={
            <UserOutlined
              style={{
                marginRight: "5px",
                color: "#2697ff",
              }}
            />
          }
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Email is required" },
          {
            type: "email",
            message: "Email is not valid",
          },
        ]}
      >
        <Input
          size="large"
          placeholder="Email"
          prefix={
            <MailOutlined
              style={{
                marginRight: "5px",
                color: "#2697ff",
              }}
            />
          }
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Password is required",
          },
          {
            min: 6,
            message: "Password must be at least 6 characters long",
          },
          {
            max: 20,
            message: "Password must be at most 20 characters long",
          },
          {
            pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])"),
            message:
              "Password must contain at least one uppercase letter, one lowercase letter and one number",
          },
        ]}
      >
        <Input.Password
          size="large"
          placeholder="Password"
          prefix={
            <LockOutlined
              style={{
                marginRight: "5px",
                color: "#2697ff",
              }}
            />
          }
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "6vw", marginRight: "3%", marginTop: "0.8rem" }}
        >
          Sign Up
        </Button>
        <Button
          htmlType="button"
          onClick={onReset}
          style={{ width: "6vw", marginTop: "0.8rem" }}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;