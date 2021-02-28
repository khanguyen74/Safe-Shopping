import React, { useEffect, useState } from 'react';
import { Card, Col, Descriptions, Rate, Row } from 'antd';
import api from '../../../utils/api';

const AverageReview = (props) => {
  const {shop,refreshReviews} = props;
  console.log(shop);

  const [average, setAverage] = useState({
    general : {
      count: 0,
      average: 0
    },
    packing : {
      count: 0,
      average: 0
    },
    shipping : {
      count: 0,
      average: 0
    },
    customerService: {
      count: 0,
      average: 0
    },
  });

  const getAverage = () => {
    api.getReviewsAverage({shopId: shop._id}).then(response => {
      setAverage(response.data)
    })
  }

  useEffect(() => {
    if(shop._id) {
      getAverage();
    }
  },[shop,refreshReviews])

  return (
    <Card title="Average" style={{ width: '100%' }}>
      <Row>
        <Col span={23} style={{paddingTop: '5px'}}>
            Visits on {shop.domain} review page
        </Col>
        <Col span={1} style={{paddingTop: '5px'}}>
            {shop.visited}
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{paddingTop: '5px'}}>
            General
        </Col>
        <Col span={12}>
          <span>
            <Rate disabled value={average.general.average}/>
            <span className="ant-rate-text">({average.general.count} reviews)</span>
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{paddingTop: '5px'}}>
            Packing
        </Col>
        <Col span={12}>
          <span>
            <Rate disabled value={average.packing.average}/>
            <span className="ant-rate-text">({average.packing.count} reviews)</span>
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{paddingTop: '5px'}}>
            Shipping
        </Col>
        <Col span={12}>
          <span>
            <Rate disabled value={average.shipping.average}/>
            <span className="ant-rate-text">({average.shipping.count} reviews)</span>
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{paddingTop: '5px'}}>
            Customer Service
        </Col>
        <Col span={12}>
          <span>
            <Rate disabled value={average.customerService.average}/>
            <span className="ant-rate-text">({average.customerService.count} reviews)</span>
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default AverageReview;
