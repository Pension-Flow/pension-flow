import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Typography } from "antd";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;

const optionNames = [
  "Dashboard",
  "Register Company",
  "Register Employee",
  "Pension",
];

// TODO ->  Edit the icons according to the above options
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
  };
});

interface IProp {
  children: React.ReactNode;
}
const CustomLayout = ({ children }: IProp) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", overflowY: "clip" }}>
      <Header className="header">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px",
            height: "100%",
          }}
        >
          {/* TODO -> MAKE IT MOBILE RESPONSIVE */}
          <Title style={{ color: "white", marginTop: 3 }} level={2}>
            Pension Flow
          </Title>
          <ConnectButton showBalance accountStatus={"address"} />
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
            // defaultSelectedKeys={["1"]}
            defaultOpenKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
            theme="dark"
          />
        </Sider>
        <Layout style={{ padding: "20px", overflowY: "auto" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
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
