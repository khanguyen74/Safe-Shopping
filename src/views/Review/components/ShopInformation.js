import React from 'react';
import { Card, Descriptions } from 'antd';

const ShopInformation = (props) => {
    const {shop} = props;

    return (
        <Card title={shop.domain} style={{ width: '100%' }}>
            <Descriptions title="WhoIs Record">
                <Descriptions.Item label="Name Server">{shop.WhoisRecord?.nameServers?.rawText}</Descriptions.Item>
                <Descriptions.Item label="Created Date">{shop.WhoisRecord?.createdDate}</Descriptions.Item>
                <Descriptions.Item label="Expires Date">{shop.WhoisRecord?.expiresDate}</Descriptions.Item>
                <Descriptions.Item label="Admin Contact">{shop.WhoisRecord?.administrativeContact?.rawText}</Descriptions.Item>
                <Descriptions.Item label="Technical Contact">{shop.WhoisRecord?.technicalContact?.rawText}</Descriptions.Item>
            </Descriptions>
            <Descriptions title="SSL Certificate">
                <Descriptions.Item label="Has certificate">{shop.ssl?.valid?"Yes":"No"}</Descriptions.Item>
                <Descriptions.Item label="Valid For">{shop.ssl?.validFor?.length?shop.ssl?.validFor.join(' '):""}</Descriptions.Item>
                <Descriptions.Item label="Days Remaining">{shop.ssl?.daysRemaining}</Descriptions.Item>
            </Descriptions>
        </Card>
    );
};

export default ShopInformation;
