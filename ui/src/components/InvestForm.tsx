import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
} from "antd";

function InvestForm() {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  return (
    <div>
      <Form
      // labelCol={{ span: 4 }}
      // wrapperCol={{ span: 14 }}
      // layout="horizontal"
      // style={{ maxWidth: 600 }}
      >
        <Form.Item label="Company Name ">
          <Input />
        </Form.Item>
        <Form.Item label="Amount to be invested ">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Voting Period ">
          <RangePicker />
        </Form.Item>
        <Form.Item label="Proposal">
          <TextArea rows={10} />
        </Form.Item>
        <Form.Item>
          <Button>Submit Proposal</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default InvestForm;
