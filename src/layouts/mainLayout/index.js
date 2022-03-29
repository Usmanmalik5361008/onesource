import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { UserIcon } from "assets";
import { Header } from "globalComponents";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const { Content, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout className="app-container">
      <Sider
        width={250}
        collapsible={false}
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="1" title="Human Resources" icon={UserIcon}>
            <Menu.Item>User</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content className="content-wrapper">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
