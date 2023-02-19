import Head from "next/head";
import SignupForm from "@/components/SignupForm";
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
