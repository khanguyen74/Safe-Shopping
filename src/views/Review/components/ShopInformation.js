import React from 'react';
import { Card, Descriptions } from 'antd';

const ShopInformation = () => {

  return (
    <Card title="Default size card"extra={<a href="#">More</a>} style={{ width: '100%' }}>
        <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
        </Descriptions>
    </Card>
  );
};

export default ShopInformation;
