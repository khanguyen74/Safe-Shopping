import React from 'react';
import { Col, Divider, Row } from 'antd';
import ShopInformation from './components/ShopInformation';
import Reviews from './components/Reviews';
import AverageReview from './components/AverageReview';
import SearchInput from '../../components/SearchInput';

const Review = () => {

  return (
    <>
        <Row gutter={16} style={{marginBottom: '30px'}}>
            <Col span={24}>
                <SearchInput/>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={24}>
                <ShopInformation/>
            </Col>
        </Row>
        <Divider orientation="left">Reviews</Divider>
        <Row gutter={16}>
            <Col xs={24} md={18}>
                <Reviews/>
            </Col>
            <Col xs={24} md={6}>
                <AverageReview/>
            </Col>
        </Row>
    </>
  );
};

export default Review;
