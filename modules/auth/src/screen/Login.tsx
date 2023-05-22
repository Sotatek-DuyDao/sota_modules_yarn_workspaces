import Header from '../component/Header/Header';
import { Checkbox, Col, Divider, Form, Input, Row } from 'antd';
import CoreButton from '../component/CoreButton';
import Link from 'next/link';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
export interface ILoginProps {
  forgotPasswordRouter: string;
  signUpRouter: string;
  onGoogleAuth: () => void;
  onNormalLogin: (e: any) => void;
  onLoginFacebook: (e: any) => void;
}
const Login = ({
  forgotPasswordRouter,
  signUpRouter,
  onGoogleAuth,
  onNormalLogin,
  onLoginFacebook,
}: ILoginProps) => {
  return (
    <div>
      <Header title="Welcome to Foxy!" subtitle="Log in to your Foxy account" />
      <div style={{ marginTop: '60px' }}>
        <Col>
          <Form layout="vertical" onFinish={onNormalLogin} size="large">
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
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Row>
            <Row style={{ backgroundColor: '#4096ff', borderRadius: '7px' }}>
              <CoreButton text={'Login'} size={'large'} htmlType="submit" />
            </Row>
            <Row style={{ marginTop: '15px' }}>
              <Col span={12}>
                <Link className="login-form-forgot" href={forgotPasswordRouter}>
                  Forgot your password?
                </Link>
              </Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Link className="login-form-forgot" href={signUpRouter}>
                  Sign up an account
                </Link>
              </Col>
            </Row>
            <Row>
              <Divider>Or continue with</Divider>
            </Row>
            <Row gutter={6}>
              <Col span={12} style={{ backgroundColor: '#4096ff', borderRadius: '7px' }}>
                <FacebookLogin
                  appId="742371830763797"
                  autoLoad
                  fields="name,email,picture"
                  render={(renderProps) => (
                    <CoreButton text={'Facebook'} type={'primary'} onClick={renderProps.onClick} />
                  )}
                  callback={onLoginFacebook}
                />
              </Col>
              <Col span={12}>
                <CoreButton text={'Google'} danger={true} onClick={onGoogleAuth} />
              </Col>
            </Row>
          </Form>
        </Col>
      </div>
    </div>
  );
};
export default Login;
