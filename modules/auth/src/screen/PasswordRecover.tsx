import Header from '../component/Header/Header';
import { Col, Form, Input, Row } from 'antd';
import CoreButton from '../component/CoreButton';
import Link from 'next/link';
export interface IPasswordRecoverProps {
  loginRouter: string;
}
const PasswordRecover = ({ loginRouter }: IPasswordRecoverProps) => {
  return (
    <div>
      <Header title="Password Recovery" />
      <div style={{ marginTop: '60px' }}>
        <Col>
          <Form layout="vertical">
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
              <CoreButton text={'Send t mail'} size={'large'} htmlType="submit" />
            </Row>
            <Row style={{ marginTop: '15px' }}>
              <Col span={24}>
                <Link className="login-form-forgot" href={loginRouter}>
                  Ready to login?
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </div>
    </div>
  );
};
export default PasswordRecover;
