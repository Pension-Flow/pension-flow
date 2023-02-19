import Head from "next/head";
import LoginForm from "@/components/LoginForm";
import { Tabs } from "antd";
import SignupForm from "@/components/SignupForm";
import ShowInvestCard from "@/components/ShowInvestCard";
import ShowInvestmentDetails from "@/components/ShowInvestmentDetails";
import InvestForm from "./InvestForm";
import { Content } from "antd/es/layout/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content style={{ width: "40vw", margin: "2% auto 10%" }}>
          <SignupForm />
        </Content>
      </main>
    </>
  );
}
