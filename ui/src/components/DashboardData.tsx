import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

interface IDataProps {
  data: {
    name: string;
    value: string;
  };
}

const DashboardData = ({ data }: IDataProps) => {
  return (
    <>
      <div style={{display:'flex', flexDirection:"column", justifyContent:'space-evenly', alignItems:'center', backgroundColor: '#8dc5f8', padding: '10px 20px', borderRadius:10, width: '25%'}}>
        <div className="data__upper">
            <Title level={4}>{data.name}</Title>
        </div>
        <div className="data__lower">
            <Title level={4}>{data.value}</Title>
        </div>
      </div>
    </>
  );
};

export default DashboardData;
