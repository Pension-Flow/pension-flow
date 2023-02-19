import React, { useState } from "react";
import { Button, Space } from "antd";
import { Checkbox } from "antd";

function ShowInvestmentDetails(props: any) {
  const [componentEnabled, setComponentEnabled] = useState<boolean>(false);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>Deadline : {props.deadline}</p>
      <p>{props.content}</p>
      <p>Amount payable : {props.amount}</p>
      <p>Expected Amount : 10000</p>
      <Checkbox
        checked={componentEnabled}
        onChange={(e) => setComponentEnabled(e.target.checked)}
      >
        I have read the terms and details of the investment
      </Checkbox>
      
      <div className="Buttons-container" style={{ paddingTop: 20 }}>
        <Space wrap>
          <Button
            type="primary"
            style={{ backgroundColor: "green" }}
            disabled={!componentEnabled}
          >
            Yes
          </Button>
          <Button type="primary" danger disabled={!componentEnabled}>
            No
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "gray" }}
            disabled={!componentEnabled}
          >
            Abstain
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default ShowInvestmentDetails;
