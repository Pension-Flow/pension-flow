import React from "react";
import { Card } from "antd";
import { Button, Space } from "antd";
function ShowInvestCard(props: any) {
  return (
    <Card
      type="inner"
      title={props.title}
      extra={
        <>
          <Button type="primary">View More</Button>
        </>
      }
    >
      <p>Vote By : {props.deadline}</p>
    </Card>
  );
}

export default ShowInvestCard;
