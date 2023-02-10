import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login - Pension Flow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ConnectButton showBalance accountStatus={"address"} />
      </main>
    </>
  );
}
