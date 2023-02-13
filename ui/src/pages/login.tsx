import Head from "next/head";
import LoginForm from "@/components/LoginForm";
import { Tabs } from "antd";
import SignupForm from "@/components/SignupForm";

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
          <Tabs.TabPane tab="Login" key="1">
            <LoginForm />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Sign Up" key="2">
            <SignupForm />
          </Tabs.TabPane>
        </Tabs>
      </main>
    </>
  );
}
