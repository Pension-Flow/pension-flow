import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Dropdown,
  Space,
  MenuProps,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const currencySymbols = [
  "BTC",
  "ETH",
  "USDC",
  "BICO",
  "PUSH",
  "BNB",
  "USDT",
  "UNI",
  "LINK",
  "FIL",
];

const items: MenuProps["items"] = currencySymbols.map((symbol, index) => {
  return {
    key: index.toString(),
    label: symbol,
  };
});

function CryptoInvestForm() {
  const [currencySymbol, setCurrencySymbol] = React.useState<string>(
    currencySymbols[0]
  );
  const [amount, setAmount] = React.useState<number>(0);
  // const [votingPeriod, setVotingPeriod] = React.useState<string[]>([]);
  const [proposal, setProposal] = React.useState<string>("");

  const onClick = ({ key }: any) => {
    setCurrencySymbol(currencySymbols[key]);
  };

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <Form>
        <Form.Item label="Currency/Token to invest into ">
          <Dropdown menu={{ items, onClick }} trigger={["click"]}>
            <Space>
              {currencySymbol}
              <DownOutlined />
            </Space>
          </Dropdown>
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

export default CryptoInvestForm;
