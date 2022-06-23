import React, { useEffect, useState } from 'react';
import { Button, Card, Typography, Avatar, Image, Space, Divider } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const Home: React.FC<HomeProps> = (props) => {
  const { setIsLoggedIn } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    if (
      localStorage.getItem('profile') &&
      localStorage.getItem('profile') !== null
    ) {
      const parsedProfile = JSON.parse(localStorage.getItem('profile') || '{}');
      setUserData(parsedProfile);
    }
    setLoading(false);
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <Card>
      <Typography.Title level={1}>Home</Typography.Title>

      {userData && !loading && (
        <Space direction="vertical">
          <Avatar
            style={{
              height: 50,
              width: 50,
              marginBottom: 18,
            }}
            src={
              <Image
                src={userData.picture.data.url}
                height={userData.picture.data.height}
                width={userData.picture.data.width}
              />
            }
          />
          <Typography.Title level={3}>{userData.name}</Typography.Title>
          <Typography.Text type="secondary">{userData.email}</Typography.Text>
          <Divider />
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </Space>
      )}
    </Card>
  );
};

export default Home;
