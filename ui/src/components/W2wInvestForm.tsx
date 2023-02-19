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
  DatePickerProps,
} from "antd";
import { useCompany } from "@/hooks/useCompany";
import { getSolidityDate } from "@/lib/helper";
const { TextArea } = Input;

function W2WInvestmentForm() {
  const { companyContract } = useCompany();

  const [title, setTitle] = React.useState<string>("");
  const [recieverAddress, setRecieverAddress] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>(0);
  const [deadlineVote, setDeadlineVote] = React.useState<any>("");
  const [proposal, setProposal] = React.useState<string>("");

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setDeadlineVote(date);
  };

  const submitW2WProposalHandler = () => {
    if (companyContract) {
      companyContract
        .createW2wProposal(
          title,
          proposal,
          getSolidityDate(deadlineVote),
          amount,
          recieverAddress
        )
        .then((res) => {
          console.log("W2W PROPOSAL SUBMITTED", res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <Form>
        <Form.Item label="Title">
          <Input
            onChange={(val: any) => {
              setTitle(val);
            }}
          />
        </Form.Item>
        <Form.Item label="Proposal">
          <TextArea
            rows={5}
            onChange={(event: any) => {
              setProposal(event.target.value);
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
          <Form.Item label="Deadline to Vote ">
            <DatePicker onChange={onDateChange} />
          </Form.Item>
        </div>
        <Form.Item label="Reciever Address ">
          <Input
            onChange={(val: any) => {
              setRecieverAddress(val);
            }}
          />
        </Form.Item>
        <Form.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={submitW2WProposalHandler}>Submit Proposal</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default W2WInvestmentForm;
