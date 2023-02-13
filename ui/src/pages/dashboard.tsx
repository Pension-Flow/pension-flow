import React from "react";
import { Typography } from "antd";
import styles from "@/styles/page-styles/dashboard.module.css";
import DashboardData from "@/components/DashboardData";

const { Title } = Typography;

const data = [
  {
    name: "Total Pension",
    value: "$10",
  },
  {
    name: "Total Employees",
    value: "1000",
  },
  {
    name: "Total Profit",
    value: "10.45%",
  },
];
const Dashboard = () => {
  return (
    <>
      <div className={styles.timer__wrapper}>
        <Title level={2}>Add Timer Here</Title>
      </div>
      <div className={styles.main__wrapper}>
        <div className={styles.main__left__wrapper}>
          <div className={styles.mid__wrapper}>
            {data.map((data, index) => (
              <DashboardData key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="main__right__wrapper">
          {/* TODO DISPLAY THE EMPOYEE LIST */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
