import { Col, Form, Input, Row } from 'antd';
import Header from '../component/Header/Header';
import { Checkbox } from 'antd';
import CoreButton from '../component/CoreButton';
import Link from 'next/link';
export interface IRegisterProps {
  onRegister: (e: any) => void;
  loginRouter: string;
}
const Register = ({ onRegister, loginRouter }: IRegisterProps) => {
  return (
    <div>
      <Header title="Welcome to Foxy!" subtitle="Sign-up an account" />
      <div style={{ marginTop: '60px' }}>
        <Col>
          <Form layout="vertical" onFinish={onRegister} size="large">
            <Row gutter={14}>
              <Col span={12}>
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your first name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your last name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input placeholder="E.g: David@foxy.com" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    { min: 8, message: 'Password must be minimum 8 characters.' },
                  ]}
                  hasFeedback
                >
                  <Input.Password placeholder="Enter your password here" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password*"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('The two passwords that you entered do not match!')
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input.Password placeholder="Re-Enter your password here" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Keep me updated about new features & upcoming improvements</Checkbox>
              </Form.Item>
            </Row>
            <Row style={{ backgroundColor: '#4096ff', borderRadius: '7px' }}>
              <CoreButton text={'Let’s Start'} size={'large'} htmlType="submit" />
            </Row>
            <Row style={{ marginTop: '10px' }}>
              <Link href={loginRouter}>Already have an account?</Link>
            </Row>
          </Form>
        </Col>
      </div>
    </div>
  );
};
export default Register;
