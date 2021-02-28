import React from 'react';
import { Comment, Avatar, Card, Rate } from 'antd';

const ReviewItem = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <>
        <Rate defaultValue={2}/>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </>
    }
  >
    {children}
  </Comment>
);

const Reviews = () => {

  return (
    <>
      <Card style={{marginBottom: "20px"}}>
        <ReviewItem>
          <ReviewItem/>
          <ReviewItem/>
          <ReviewItem/>
        </ReviewItem>
      </Card>
      <Card style={{marginBottom: "20px"}}>
        <ReviewItem>
          <ReviewItem/>
          <ReviewItem/>
          <ReviewItem/>
        </ReviewItem>
      </Card>
      <Card style={{marginBottom: "20px"}}>
        <ReviewItem>
          <ReviewItem/>
          <ReviewItem/>
          <ReviewItem/>
        </ReviewItem>
      </Card>
    </>
  );
};

export default Reviews;
