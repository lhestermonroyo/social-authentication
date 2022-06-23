import React from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { Button, Card, Typography, notification } from 'antd';
import { FacebookFilled } from '@ant-design/icons';



const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { setIsLoggedIn } = props;

  const handleLoginSuccess = (res: any) => {
    console.log('login success', res);
    localStorage.setItem('accessToken', res.accessToken);
  };

  const handleProfileSuccess = (res: any) => {
    console.log('profile success', res);
    localStorage.setItem('profile', JSON.stringify(res));
    setIsLoggedIn(true);
  };

  const handleLoginFail = (error: any) => {
    console.log('failed', error);
    notification.error({
      message: 'Login failed!',
      description:
        'An error occured while logging in via Facebook. Please try again.',
    });
  };

  return (
    <Card>
      <Typography.Title level={1}>Social Authentication</Typography.Title>
      <FacebookLogin
        appId="435674224794657"
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,email,user_friends"
        onSuccess={(res) => handleLoginSuccess(res)}
        onProfileSuccess={(res) => handleProfileSuccess(res)}
        onFail={(error) => handleLoginFail(error)}
        render={({ onClick }) => {
          return (
            <Button
              type="primary"
              onClick={onClick}
              icon={<FacebookFilled />}
              size="large"
            >
              Login with Facebook
            </Button>
          );
        }}
      />
    </Card>
  );
};

export default Login;
