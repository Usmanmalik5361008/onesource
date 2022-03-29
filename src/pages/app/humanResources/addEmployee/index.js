import { Col, Row } from "antd";
import { IMAGE_PLACEHOLDER } from "assets";
import { Button, FormField } from "globalComponents";
import React from "react";
import "./index.scss";

const AddEmployee = () => {
  return (
    <div className="employee-page-wrapper">
      <div className="card-view">
        <form>
          <UploadImageSection />
          <h5>Personal Information</h5>
          <Row gutter={[20, 15]}>
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
              <FormField label="Phone" />
            </Col>
            <Col xs={24} sm={12}>
              <FormField label="Gender" />
            </Col>
            <Col xs={24} sm={12}>
              <FormField label="Date of Birth" />
            </Col>
            <Col xs={24}>
              <FormField label="Address" />
            </Col>
          </Row>
          <h5>Position Information</h5>
          <Row gutter={[20, 15]}>
            <Col xs={24} sm={12}>
              <FormField as="select" label="Select Department" />
            </Col>
            <Col xs={24} sm={12}>
              <FormField label="Position" />
            </Col>
            <Col xs={24} sm={12}>
              <FormField as="select" label="Shift" />
            </Col>
          </Row>
          <div className="card-footer">
            <Button type="primary" style={{ width: 135 }} title="Save" />
            <Button type="secondary" title="Cancel" />
          </div>
        </form>
      </div>
    </div>
  );
};

const UploadImageSection = () => (
  <div className="upload-image-wrapper">
    <div className="placeholder-wrapper">
      <img src={IMAGE_PLACEHOLDER} alt="" />
    </div>
    <div>
      <h5>Upload Employee Image</h5>
      <p className="primary-text">Browse Image </p>
    </div>
  </div>
);

export default AddEmployee;
