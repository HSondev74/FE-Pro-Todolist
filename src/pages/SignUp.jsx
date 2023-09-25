import { Button, Form, Input, Typography } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
     emailRule,
     passwordRule,
     rePasswordRule,
     usernameRule,
} from "@/common/Rules";
import { useNavigate } from "react-router-dom";
import { login } from "../services/register";

const formItemLayout = {
     labelCol: {
          xs: {
               span: 24,
          },
          sm: {
               span: 8,
          },
     },
     wrapperCol: {
          xs: {
               span: 24,
          },
          sm: {
               span: 16,
          },
     },
};
const tailFormItemLayout = {
     wrapperCol: {
          xs: {
               span: 24,
               offset: 0,
          },
          sm: {
               span: 16,
               offset: 8,
          },
     },
};

const SignUp = () => {
     const [form] = Form.useForm();
     const navigate = useNavigate();

     const onFinishFailed = (errorInfo) => {
          setTimeout(() => {
               form.resetFields();
          }, 500);
          const firstErrorField = errorInfo.errorFields[0].name;
          const inputElement = form.getFieldInstance(firstErrorField);
          if (inputElement) {
               inputElement.focus();
          }
          notifyError();
     };

     const onFinish = (values) => {
          const { username, email, password } = values;
          setTimeout(() => {
               form.resetFields();
          }, 500);

          const requestBody = JSON.stringify({
               username: username,
               email: email,
               password: password,
          });

          sendRequest(requestBody);
     };

     const sendRequest = (requestBody) => {
          login(requestBody)
               .then((response) => {
                    if (response) {
                         notify();
                         setTimeout(() => {
                              navigate("/login");
                         }, 2000);
                    } else {
                         throw new Error("Network response was not ok");
                    }
               })
               .catch((error) => {
                    console.error("error", error);
                    notifyWarning();
               });
     };

     const notify = () =>
          toast.success("Register Success", {
               position: "top-right",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: "light",
          });

     const notifyError = () =>
          toast.error("You have not entered enough information !", {
               position: "top-right",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: "light",
          });

     const notifyWarning = () =>
          toast.warn("there is already a matching account !", {
               position: "top-right",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: "dark",
          });

     return (
          <section
               style={{
                    border: "2px solid #fff",
                    maxWidth: "600px",
                    display: "flex",
                    justifyContent: "center",
                    margin: "30px auto",
                    borderRadius: "5px",
                    padding: "5px 60px 5px 0",
               }}
          >
               <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    style={{
                         width: "100%",
                    }}
                    scrollToFirstError
               >
                    <Typography
                         style={{
                              textAlign: "center",
                              fontSize: "40px",
                              marginBottom: "20px",
                         }}
                    >
                         SignUp
                    </Typography>
                    <Form.Item
                         name="username"
                         label="Nickname"
                         tooltip="What do you want others to call you?"
                         rules={usernameRule}
                    >
                         <Input autoFocus />
                    </Form.Item>

                    <Form.Item name="email" label="E-mail" rules={emailRule}>
                         <Input autoFocus />
                    </Form.Item>

                    <Form.Item
                         name="password"
                         label="Password"
                         rules={passwordRule}
                         hasFeedback
                    >
                         <Input.Password autoFocus />
                    </Form.Item>

                    <Form.Item
                         name="confirm"
                         label="Confirm Password"
                         dependencies={["password"]}
                         hasFeedback
                         rules={rePasswordRule}
                    >
                         <Input.Password autoFocus />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                         <Button type="primary" htmlType="submit">
                              Register
                         </Button>
                         <ToastContainer
                              position="top-right"
                              autoClose={2000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss={false}
                              draggable
                              pauseOnHover={false}
                              theme="dark"
                         />
                    </Form.Item>
               </Form>
          </section>
     );
};

export default SignUp;
