import React from "react";

import { Layout, theme } from "antd";
import Sidebar from "../component/dashboard/sidebar";

const { Header, Content, Footer } = Layout;

const DashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Contect
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Outspaces ©{new Date().getFullYear()} Created by Sujon
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
