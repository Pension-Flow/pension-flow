import Head from "next/head";
import LoginForm from "@/components/LoginForm";
import { Tabs } from "antd";
import SignupForm from "@/components/SignupForm";
import ShowInvestCard from "@/components/ShowInvestCard";
import ShowInvestmentDetails from "@/components/ShowInvestmentDetails";
import InvestForm from "./InvestForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login - Pension Flow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Tabs
          size="large"
          defaultActiveKey="1"
          style={{ width: "30vw", margin: "2% auto 10%" }}
        >
          {/* <Tabs.TabPane tab="Login" key="1">
            <LoginForm />
          </Tabs.TabPane> */}
          <Tabs.TabPane tab="Register Your Company" key="2">
            <SignupForm />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Card Test" key="3">
            <ShowInvestCard
              title="Test 1"
              content="Content 1"
              deadline="deadline 1"
            ></ShowInvestCard>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Details Component Test" key="4">
            <ShowInvestmentDetails
              title="Test 1"
              content="Content 1"
              deadline="deadline 1"
              amount="100000"
            ></ShowInvestmentDetails>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Invest" key="3">
            <InvestForm />
          </Tabs.TabPane>
        </Tabs>
      </main>
    </>
  );
}
