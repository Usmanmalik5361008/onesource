import { Form, Input, Radio } from "antd";
import React from "react";
import "./index.scss";

const SigninPage = () => {
  const [form] = Form.useForm();

  return (
    <div className="page-container sigin-page-container">
      <div className="sigin-form-container">
        <div className="greetings">
          <h1>Welcome Back</h1>
          <p>Sign In to getting started</p>
        </div>
        <div>
          <Form layout="vertical" form={form}>
            <Form.Item
              label="Email"
              required
              tooltip="This is a required field"
              name={"email"}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              required
              tooltip="This is a required field"
              name={"password"}
            >
              <Input placeholder="Enter your password" />
            </Form.Item>
            <div className="form-row">
              <Form.Item name="remember" style={{ margin: 0 }}>
                <Radio type="" value="a">
                  Remember Me
                </Radio>
              </Form.Item>
              <p>Recover Password</p>
            </div>
            <button className="btn-primary-full-width">Sign in</button>
          </Form>
          <p className="no-account-text">
            No account yet! <mark>Signup Today</mark>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
