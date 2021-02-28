import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Card, notification } from 'antd';
import api from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { authSuccess } from '../../redux/actions/User';
import { useNavigate } from 'react-router';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        api.login(values).then(response => {
            notification['success']({
                message: "Login success!"
            })
            dispatch(authSuccess(response.data));

            setTimeout(() => {
                navigate(-1);
            },1000)

            console.log(response.data);
        }).catch(error => {
            const errorMessage = JSON.parse(error.request.response)
            notification['error']({
                message: "Error occurred!",
                description: errorMessage.email?errorMessage.email:errorMessage.password
            })
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    useEffect(() => {
        if(user._id) {
            notification['success']({
                message: "You have already logged in!"
            })
            setTimeout(() => {
                navigate('/');
            },1000)
        }
    },[user])

    return (
        <Card className="login-card" title="Login" style={{width: "50%", margin: "auto"}}>
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </Card>
    );
};

export default Login;
