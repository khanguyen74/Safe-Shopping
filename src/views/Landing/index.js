import React from 'react';
import { Col, Row } from 'antd';
import SearchInput from '../../components/SearchInput';

const Landing = () => {

  return (
    <>
      <div className="landing-background"/>
      <Row gutter={16} style={{marginBottom: '30px'}}>
          <Col span={24} style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <h1 style={{fontSize: '3rem', color: 'white', margin: 0}}>Welcome,</h1>
            <h1 style={{fontSize: '1.5rem', color: 'white'}}>Please enter a website's URL below</h1>
              <div style={{width: '50%'}}>
                <SearchInput/>
              </div>
          </Col>
      </Row>
    </>
  );
};

export default Landing;
