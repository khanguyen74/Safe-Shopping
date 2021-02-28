import React from 'react';
import { Card, Col, Descriptions, Rate, Row } from 'antd';

const AverageReview = () => {

  return (
    <Card title="Average" style={{ width: '100%' }}>
      <Row>
        <Col span={12} style={{paddingTop: '5px'}}>
            Customer Service
        </Col>
        <Col span={12}>
          <span>
            <Rate defaultValue={4}/>
            <span className="ant-rate-text">(5)</span>
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{paddingTop: '5px'}}>
            Customer Service
        </Col>
        <Col span={12}>
          <span>
            <Rate defaultValue={4}/>
            <span className="ant-rate-text">(5)</span>
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{paddingTop: '5px'}}>
            Customer Service
        </Col>
        <Col span={12}>
          <span>
            <Rate defaultValue={4}/>
            <span className="ant-rate-text">(5)</span>
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{paddingTop: '5px'}}>
            Customer Service
        </Col>
        <Col span={12}>
          <span>
            <Rate defaultValue={4}/>
            <span className="ant-rate-text">(5)</span>
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default AverageReview;
