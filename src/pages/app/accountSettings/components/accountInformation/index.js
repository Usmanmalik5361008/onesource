import React from "react";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import { FormField, Button } from "globalComponents";
import "./index.scss";

const AccountInformation = () => {
  return (
    <div className="account-info-section">
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={10}>
          <div className="card-view profile-upload-wrapper">
            <Avatar
              icon={<UserOutlined />}
              size={100}
              style={{ flexShrink: 0 }}
            />
            <div>
              <h4>Profile Picture</h4>
              <p>We recommend an image of at least 400x400.</p>
              <Button type="colored" bgColor="aquablue" title="Upload" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={14}>
          <div className="card-view account-info-form">
            <h5>Account Info</h5>

            <Row gutter={[10, 10]}>
              <Col xs={24} sm={12}>
                <FormField label="First Name" />
              </Col>
              <Col xs={24} sm={12}>
                <FormField label="Last Name" />
              </Col>
              <Col xs={24} sm={12}>
                <FormField label="Email" />
              </Col>
              <Col xs={24} sm={12}>
                <FormField label="Phone number" />
              </Col>
              <Col xs={24} sm={12}>
                <FormField label="Gender" />
              </Col>
              <Col xs={24} sm={12}>
                <FormField label="Date of Birth" />
              </Col>
              <Col xs={24} sm={24}>
                <FormField label="Address" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="settings-action-footer">
        <Button type="secondary" title="Cancel" />
        <Button type="primary" title="Update Settings" />
      </div>
    </div>
  );
};

export default AccountInformation;
