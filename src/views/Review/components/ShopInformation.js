import React, { useEffect, useState } from 'react';
import { Button, Card, Descriptions } from 'antd';
import api from '../../../utils/api';

const ShopInformation = (props) => {
    const {shop} = props;

    const [showHidden, setShowHidden] = useState(false);
    const [hiddenElements, setHiddenElements] = useState("");

    const getHiddentElements = () => {
        api.getHiddenElement({domain: shop.domain}).then(response => {
            setHiddenElements(response.data);
        })
    }

    useEffect(() => {
        if(showHidden && hiddenElements==="") {
            getHiddentElements();
        }
    },[showHidden]) 

    return (
        <>
        <Card title={shop.domain} extra={<Button onClick={() => setShowHidden(!showHidden)}>{showHidden?"Less":"More"}</Button>} style={{ width: '100%', marginBottom: "20px" }}>
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
        <Card title={`Hidden elements on ${shop.domain}`} style={{ width: '100%', display: `${showHidden?'block':'none'}` }}>
            <div dangerouslySetInnerHTML={{__html: hiddenElements}}/>
        </Card>
        </>
    );
};

export default ShopInformation;
