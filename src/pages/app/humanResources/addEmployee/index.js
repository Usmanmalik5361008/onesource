import { Col, Row } from "antd";
import { Button, FormField, UploadImageSection } from "globalComponents";
import React from "react";
import "./index.scss";

const AddEmployee = () => {
  const handleImage = (image) => {
    console.log("image ", image);
  };

  return (
    <div className="employee-page-wrapper">
      <div className="card-view">
        <form>
          <UploadImageSection
            onImageSelect={handleImage}
            placeholder="Upload Employee Image"
          />
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

export default AddEmployee;
