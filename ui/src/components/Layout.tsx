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

const { Title } = Typography;
const { Header, Content, Sider } = Layout;

const optionNames = [
  "Dashboard",
  "Register Company",
  // "Register Employee",
  "Pension",
  "Add Investment"
];

const optionRoutes = [
  "/dashboard",
  "/register-company",
  // "/register-employee",
  "/pension",
  "/add-investment"

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
    DashboardOutlined,
    UserOutlined,
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
      <Header className="header">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* TODO -> MAKE IT MOBILE RESPONSIVE */}
          <Title style={{ color: "white", marginTop: 3 }} level={2}>
            Pension Flow
          </Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button type="primary" htmlType="submit" style={{}}>
              Login as employee
            </Button>
            <Button type="primary" htmlType="submit" style={{ margin: 10 }}>
              Login as Company admin
            </Button>
            <ConnectButton showBalance accountStatus={"address"} />
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          width={200}
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
