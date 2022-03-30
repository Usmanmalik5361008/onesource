import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout } from "antd";
import { MessageIcon, NotificationIcon } from "assets";

import React from "react";
import "./index.scss";

const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
    <AntdHeader className="header-wrapper" style={{ padding: 0 }}>
      <h5>Heading</h5>
      <div className="actions-wrapper">
        {NotificationIcon}
        {MessageIcon}
        <span className="avatar-with-name">
          <Avatar icon={<UserOutlined />} />{" "}
          <p className="inter-medium">Usman</p>
        </span>
      </div>
    </AntdHeader>
  );
};

export default Header;
