import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

const MainLayout = () => {

  return (
    <Layout className="layout">
        <Header>
            {/* <div className="logo" /> */}
            {/* <a href="#">
                <h1 style={{color: "white"}}>Safe Shopping</h1>
            </a> */}
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1" style={{fontSize: "1.2rem", color: "white"}}>Safe Shopping</Menu.Item>
                <Menu.Item key="2" style={{float: "right"}}>Sign Up</Menu.Item>
                <Menu.Item key="3" style={{float: "right"}}>Sign In</Menu.Item>
                <Menu.Item key="4" style={{float: "right"}}>Nyan Nguyen</Menu.Item>
            </Menu>
        </Header>
        <Content id="layout" style={{padding: '20px 50px'}}>
            <div className="site-layout-content">
                <Outlet/>
            </div>
        </Content>
    </Layout>
  );
};

export default MainLayout;
