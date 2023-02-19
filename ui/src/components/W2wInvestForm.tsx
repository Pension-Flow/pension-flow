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
const { TextArea } = Input;

function W2WInvestmentForm() {
  const [recieverAddress, setRecieverAddress] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>(0);
  // const [votingPeriod, setVotingPeriod] = React.useState<string[]>([]);
  const [proposal, setProposal] = React.useState<string>("");

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <Form>
        <Form.Item label="Reciever Address ">
          <Input
            onChange={(val: any) => {
              setRecieverAddress(val);
            }}
          />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item label="Amount to be invested ">
            <InputNumber
              onChange={(val: any) => {
                setAmount(val);
              }}
            />
          </Form.Item>
          {/* <Form.Item label="Voting Period ">
            <RangePicker />
          </Form.Item> */}
        </div>
        <Form.Item label="Proposal">
          <TextArea
            rows={5}
            onChange={(event: any) => {
              setProposal(event.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button>Submit Proposal</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default W2WInvestmentForm;
