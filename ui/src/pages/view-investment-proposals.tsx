import InvestmentList from "@/components/InvestmentList";
import { Tabs, Typography } from "antd";
import { useEffect, useState } from "react";
const { Title } = Typography;

const ViewInvestmentProposals = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    // fetch investments here
  }, [activeKey]);

  const tabItems = [
    {
      label: `Crypto Investment Proposals`,
      key: "1",
      children: <InvestmentList investments={investments} />,
    },
    {
      label: `W2W Investment Proposals`,
      key: "2",
      children: <InvestmentList investments={investments} />,
    },
  ];
  return (
    <div
      style={{
        margin: "0 auto",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title style={{ textAlign: "center" }}>View Investment Proposals</Title>
      <Tabs
        style={{ width: "100%" }}
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
        }}
        centered
        items={tabItems}
      />
    </div>
  );
};

export default ViewInvestmentProposals;
