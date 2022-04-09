import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { UserIcon } from "assets";
import { Header } from "globalComponents";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  dashboardIcon,
  frontDeskIcon,
  reservationIcon,
  guestIcon,
  roomIcon,
  reportIcon,
  paymentIcon,
  settingIcon,
} from "assets";

const { Content, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleNavigation = (href) => {
    navigate(href);
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
          {menus.map((menu) =>
            menu.subMenu ? (
              <SubMenu key={menu.key} title={menu.title} icon={menu.icon}>
                {menu.subMenu.map((subMenu) => (
                  <Menu.Item
                    key={subMenu.key}
                    icon={subMenu.icon}
                    onClick={() => handleNavigation(subMenu.href)}
                  >
                    {subMenu.title}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={menu.key}
                icon={menu.icon}
                onClick={() => handleNavigation(menu.href)}
              >
                {menu.title}
              </Menu.Item>
            )
          )}
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

const menus = [
  {
    title: "Dashboard",
    icon: dashboardIcon,
    href: "#",
    key: "1",
  },
  {
    title: "Front Desk",
    icon: frontDeskIcon,
    href: "#",
    key: "2",
  },
  {
    title: "Reservations",
    icon: reservationIcon,
    href: "#",
    key: "3",
  },
  {
    title: "Guests",
    icon: guestIcon,
    href: "#",
    key: "4",
  },
  {
    title: "Human Resources",
    icon: UserIcon,
    href: "#",
    key: "5",
    subMenu: [
      {
        title: "Staff",
        href: "reosurce/staff/add",
        icon: "",
        key: "5-1",
      },
      {
        title: "Food Menu",
        href: "#",
        icon: "",
        key: "5-2",
      },
      {
        title: "Services",
        href: "#",
        icon: "",
        key: "5-3",
      },
      {
        title: "Attendance",
        href: "#",
        icon: "",
        key: "5-4",
      },
      {
        title: "Leave",
        href: "#",
        icon: "",
        key: "5-5",
      },
      {
        title: "Payroll",
        href: "#",
        icon: "",
        key: "5-6",
      },
    ],
  },
  {
    title: "Rooms",
    icon: roomIcon,
    href: "#",
    key: "6",
  },
  {
    title: "Report",
    icon: reportIcon,
    href: "#",
    key: "7",
  },
  {
    title: "Payment",
    icon: paymentIcon,
    href: "#",
    key: "8",
  },
  {
    title: "Settings",
    icon: settingIcon,
    href: "settings",
    key: "9",
  },
];

export default MainLayout;
