import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button } from "antd";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Typography } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;

const optionNames = [
  "Register Company",
  "Dashboard",
  "Propose an Investment",
  "View Investment Proposals",
];

const optionRoutes = [
  "/register-company",
  "/dashboard",
  "/propose-investment",
  "/view-investment-proposals",
];
// TODO ->  Edit the icons according to the above options

interface IProp {
  children: React.ReactNode;
}
const CustomLayout = ({ children }: IProp) => {
  const router = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2: MenuProps["items"] = [
    UserOutlined,
    DashboardOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key: String = String(index + 1);

    return {
      key: `${key}`,
      icon: React.createElement(icon),
      label: optionNames[index],
      onClick: () => {
        // navigate to the route
        router.push(optionRoutes[index]);
      },
    };
  });

  return (
    <Layout style={{ height: "100vh", overflowY: "clip" }}>
      <Header className="header" style={{ padding: "35px 20px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Link href="/">
            <Title style={{ color: "white", marginTop: 8 }} level={2}>
              Pension Flow
            </Title>
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "16vw",
                padding: "19px 0",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Login as Employee
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                margin: 10,
                width: "16vw",
                padding: "19px 0",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Login as Company
            </Button>
            <ConnectButton showBalance accountStatus={"address"} />
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          width={250}
          style={{ background: colorBgContainer }}
          theme="dark"
          collapsible
        >
          <Menu
            mode="inline"
            defaultOpenKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
            theme="dark"
          ></Menu>
        </Sider>
        <Layout style={{ padding: "20px", overflowY: "auto" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              overflow: "scroll",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
