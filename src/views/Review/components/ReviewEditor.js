import React, { useState } from 'react';
import { Button, Card, Form, Comment, Input, Rate, Row, Col, notification } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Avatar from 'antd/lib/avatar/avatar';  
import api from '../../../utils/api';
const { TextArea } = Input;

const ReviewEditor = (props) => {
    const user = useSelector(state => state.user);
    const {shop,refreshReviews,setRefreshReviews} = props;
    const navigate = useNavigate();

    const [review, setReview] = useState({
        shopId: "",
        userId: "",
        rating: {
            general: 0,
            packing: 0,
            shipping: 0,
            customerService: 0
        },
        content: ""
    })

    const handleContentChanged = e => {
        setReview({
            ...review,
            content: e.target.value
        })
    }

    const submitReview = () => {
        api.createReview({
            ...review,
            shopId: shop._id,
            userId: user._id
        }).then(response => {
            setRefreshReviews(!refreshReviews);
            setReview({
                shopId: "",
                userId: "",
                rating: {
                    general: 0,
                    packing: 0,
                    shipping: 0,
                    customerService: 0
                },
                content: ""
            });
            notification['success']({
                message: "Your review has been submitted!"
            })
            console.log(response.data)
        })
    }

    const handleRate = (rateType, value) => {
        var newValue = review;
        newValue.rating[rateType] = value;
        setReview(newValue)
    }

    return (
        <Card title="Write Review" style={{ width: '100%' }}>
            {
                user._id?
                <>
                    <Comment
                        avatar={
                            <Avatar
                                src={user.avatar?user.avatar:""}
                                alt={user.lastname?user.lastname:""}
                            />
                        }
                        content={
                            <>
                                <Form.Item>
                                    <TextArea rows={4} value={review.content} onChange={handleContentChanged} />
                                </Form.Item>
                                <Row>
                                    <Col span={12} style={{paddingTop: '5px'}}>
                                        General
                                    </Col>
                                    <Col span={12}>
                                    <span>
                                        <Rate onChange={(value) => handleRate("general",value)}/>
                                    </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} style={{paddingTop: '5px'}}>
                                        Packing
                                    </Col>
                                    <Col span={12}>
                                    <span>
                                        <Rate onChange={(value) => handleRate("packing",value)}/>
                                    </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} style={{paddingTop: '5px'}}>
                                        Shipping
                                    </Col>
                                    <Col span={12}>
                                    <span>
                                        <Rate  onChange={(value) => handleRate("shipping",value)}/>
                                    </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} style={{paddingTop: '5px'}}>
                                        Customer Service
                                    </Col>
                                    <Col span={12}>
                                    <span>
                                        <Rate  onChange={(value) => handleRate("customerService",value)}/>
                                    </span>
                                    </Col>
                                </Row>
                                <Form.Item style={{marginTop: "10px"}}>
                                    <Button onClick={submitReview} htmlType="submit" type="primary">
                                    Add Reviews
                                    </Button>
                                </Form.Item>
                            </>
                        }
                    ></Comment>
                </>
                :
                <Button type="primary" onClick={() => navigate("/login")} block>Sign In to write reviews!</Button>
            }
        </Card>
    );
};

export default ReviewEditor;
