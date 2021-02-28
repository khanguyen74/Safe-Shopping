import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import api from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateProfile } from '../redux/actions/User';

const { Header, Content } = Layout;

const MainLayout = () => {
    const auth_token = localStorage.getItem("auth_token");
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(auth_token) {
            api.me().then(response => {
                dispatch(updateProfile(response.data));
                // console.log(response.data)
            })
        }
    },[auth_token])

    const handleMenuClick = e => {
        // if(e.key==="4") {
        //     console.log('logout')
        //     dispatch(logout());
        // }
        switch(e.key) {
            case "4": 
                dispatch(logout());
                return;
            case "3": 
                navigate("/login");
                return;
            case "2": 
                navigate("/register");
                return;
            case "1": 
                navigate("/");
                return;
            default:    
                return;
        }
    }

  return (
    <Layout className="layout">
        <Header>
            {/* <div className="logo" /> */}
            {/* <a href="#">
                <h1 style={{color: "white"}}>Safe Shopping</h1>
            </a> */}
            <Menu theme="dark" mode="horizontal" onClick={handleMenuClick}>
                <Menu.Item key="1" style={{fontSize: "1.2rem", color: "white"}}>Safe Shopping</Menu.Item>
                {user._id?
                <>
                    <Menu.Item key="4" style={{float: "right"}}>Logout</Menu.Item>
                    <Menu.Item key="5" style={{float: "right"}}>{user.firstname+" "+user.lastname}</Menu.Item>
                </>
                :
                <>
                    <Menu.Item key="2" style={{float: "right"}}>Sign Up</Menu.Item>
                    <Menu.Item key="3" style={{float: "right"}}>Sign In</Menu.Item>
                </>}
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
