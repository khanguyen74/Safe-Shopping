import React, { useEffect, useState } from 'react';
import { Comment, Avatar, Card, Rate, Row, Col, Divider } from 'antd';
import api from '../../../utils/api';

const Reviews = (props) => {
  const {shop,refreshReviews} = props;
  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    api.getReviews({shopId: shop._id}).then(response => {
      console.log(response.data)
      setReviews(response.data);
    })
  }

  useEffect(() => {
    if(shop._id) getReviews();
  },[shop,refreshReviews])

  return (
    <>
      {reviews.length===0 && 
        <Card style={{marginBottom: "20px"}}>
          <p>No Reviews</p>
        </Card>
      }
      
        {reviews.map(review => (
          <Card style={{marginBottom: "20px"}}>
            <Comment
              key={review._id}
              author={<a>{review.userId.firstname+" "+review.userId.lastname}</a>}
              avatar={
                <Avatar
                  src={review.userId.avatar}
                  alt={review.userId.firstname+" "+review.userId.lastname}
                />
              }
              content={
                <>
                  <p>
                    {review.content}
                  </p>
                  <Divider orientation="left"></Divider>
                  <Row>
                      <Col span={12} style={{paddingTop: '5px'}}>
                          General
                      </Col>
                      <Col span={12}>
                      <span>
                          <Rate disabled defaultValue={review.rating.general}/>
                      </span>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={12} style={{paddingTop: '5px'}}>
                          Packing
                      </Col>
                      <Col span={12}>
                      <span>
                          <Rate disabled defaultValue={review.rating.packing}/>
                      </span>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={12} style={{paddingTop: '5px'}}>
                          Shipping
                      </Col>
                      <Col span={12}>
                      <span>
                          <Rate disabled defaultValue={review.rating.shipping}/>
                      </span>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={12} style={{paddingTop: '5px'}}>
                          Customer Service
                      </Col>
                      <Col span={12}>
                      <span>
                          <Rate  disabled defaultValue={review.rating.customerService}/>
                      </span>
                      </Col>
                  </Row>
                  
                </>
              }
            >
            </Comment>
          </Card>
        ))}
    </>
  );
};

export default Reviews;
