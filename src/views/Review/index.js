import React, { useEffect, useState } from 'react';
import { Col, Divider, Row } from 'antd';
import ShopInformation from './components/ShopInformation';
import Reviews from './components/Reviews';
import AverageReview from './components/AverageReview';
import SearchInput from '../../components/SearchInput';
import { useParams } from 'react-router';
import api from '../../utils/api';
import ReviewEditor from './components/ReviewEditor';

const Review = () => {
    const {domain} = useParams();
    const [shop, setShop] = useState({});
    const [refreshReviews, setRefreshReviews] = useState(false);

    useEffect(() => {
        if(domain) {
            api.shop({domain: domain}).then(response => {
                setShop(response.data)
            })
        }
    },[domain])

    return (
        <>
            <Row gutter={16} style={{marginBottom: '30px'}}>
                <Col span={24}>
                    <SearchInput/>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <ShopInformation shop={shop}/>
                </Col>
            </Row>
            <Divider orientation="left">Reviews</Divider>
            <Row gutter={16}>
                <Col xs={24} md={18}>
                    <Row>
                        <Col span={24} style={{marginBottom: "20px"}}>
                            <ReviewEditor shop={shop} refreshReviews={refreshReviews} setRefreshReviews={setRefreshReviews}/>
                        </Col>
                        <Col span={24}>
                            <Reviews shop={shop} refreshReviews={refreshReviews}/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} md={6}>
                    <AverageReview shop={shop} refreshReviews={refreshReviews}/>
                </Col>
            </Row>
        </>
    );
};

export default Review;
