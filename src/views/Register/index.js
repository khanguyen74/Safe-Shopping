import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Alert, notification } from 'antd';
import api from '../../utils/api';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
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

const Register = () => {
    const user = useSelector(state => state.user)

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onFinish = (values) => {
        api.register(values).then(response => {
            notification['success']({
                message: "Register success!",
                description: "Please login to continue!"
            });

            setTimeout(() => {
                navigate("/login",{replace: true});
            },3000)
        }).catch(error => {
            const errorMessage = JSON.parse(error.request.response)
            console.log(errorMessage);
            setErrors(errorMessage);
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
        <Card title="Register" style={{width: "50%", margin: "auto"}}>
            {Object.keys(errors).length?
                <Alert
                    style={{marginBottom: "30px"}}
                    message="Error!"
                    description={
                        Object.keys(errors).map(err => <p key={err}>{errors[err]}</p>)
                    }
                    type="error"
                />
            :null}
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
                    label="Firstname"
                    name="firstname"
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
                    label="Lastname"
                    name="lastname"
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

                <Form.Item
                    label="Confirm Password"
                    name="password_confirm"
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
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

export default Register;
