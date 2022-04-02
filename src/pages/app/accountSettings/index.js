import { Tabs } from "antd";

import { loginDetailsIcon, personalInfoIcon } from "assets";
import React from "react";
import { AccountInformation, LoginDetails } from "./components";
import "./index.scss";

const { TabPane } = Tabs;

const AccountSettings = () => {
  const handleTabChange = (key) => {};

  return (
    <div className="accountsetting-page-wrapper">
      <h5>Account</h5>
      <Tabs defaultActiveKey="1" onChange={handleTabChange}>
        {tabs.map(({ tab, id, content }) => (
          <TabPane tab={tab} key={id}>
            {content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

const tabs = [
  {
    id: 1,
    content: <AccountInformation />,
    tab: (
      <span className="tab-title">{personalInfoIcon} Account Information </span>
    ),
  },
  {
    id: 2,
    content: <LoginDetails />,
    tab: (
      <span className="tab-title">{loginDetailsIcon} Account Information </span>
    ),
  },
];

export default AccountSettings;
