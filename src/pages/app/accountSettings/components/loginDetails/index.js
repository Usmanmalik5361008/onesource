import { Col, Row } from "antd";
import { Button, FormField } from "globalComponents";

import React from "react";
import "./index.scss";

const LoginDetails = () => {
  return (
    <div className="login-details-section">
      <div className="card-view">
        <h5>Change Password</h5>
        <Row gutter={[20, 10]}>
          <Col xs={24} sm={12}>
            <FormField label="Current Passowrd" type="password" />
          </Col>
          <Col xs={24} sm={12}>
            <FormField label="Confim Password" type="password" />
          </Col>
          <Col xs={24}>
            <FormField label="New Password" type="password" />
          </Col>
        </Row>
      </div>
      <div className="settings-action-footer">
        <Button type="secondary" title="Cancel" />
        <Button type="primary" title="Update Settings" />
      </div>
    </div>
  );
};

export default LoginDetails;
