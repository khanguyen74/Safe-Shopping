import React from 'react';
import { Col, Row } from 'antd';
import SearchInput from '../../components/SearchInput';

const Landing = () => {

  return (
    <Row gutter={16} style={{marginBottom: '30px'}}>
        <Col span={24}>
            <SearchInput/>
        </Col>
    </Row>
  );
};

export default Landing;
