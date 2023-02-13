import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} name="control-hooks" onFinish={onFinish}>
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
          Login
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

export default LoginForm;
