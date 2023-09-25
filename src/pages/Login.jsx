import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/reduxSlice";

const Login = () => {
     const [form] = Form.useForm();
     const [remember, setRemember] = useState(false);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          const storedData = localStorage.getItem("rememberedData");
          if (storedData && remember) {
               const { email, password } = JSON.parse(storedData);
               form.setFieldsValue({ email, password });
          }
     }, [remember]);

     const onFinish = async (values) => {
          try {
               const { email, password } = values;
               const raw = JSON.stringify({
                    identifier: email,
                    password,
               });

               if (remember) {
                    const dataToStore = JSON.stringify({ email, password });
                    localStorage.setItem("rememberedData", dataToStore);
               } else {
                    localStorage.removeItem("rememberedData");
               }

               await loginForm(raw);
               notify("Login Success");
               navigate("/");
          } catch (error) {
               console.error("error", error);
               notify("Login Failed", true);
          }
     };

     const onFinishFailed = (errorInfo) => {
          console.log("Failed:");
     };

     const loginForm = async (raw) => {
          try {
               const apiUrl = "https://backoffice.nodemy.vn/api/auth/local";
               const response = await axios.post(apiUrl, raw, {
                    headers: {
                         "Content-Type": "application/json",
                    },
               });
               // console.log(response);
               dispatch(getUsers(response.data));
               if (response.status !== 200) {
                    throw new Error("Network response was not ok");
               }
          } catch (error) {
               console.error("error", error);
               throw error;
          }
     };

     const notify = (message, isError = false) => {
          toast[isError ? "error" : "success"](message, {
               position: "top-right",
               autoClose: 2000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
               theme: "light",
          });
     };

     return (
          <Form
               form={form}
               name="basic"
               labelCol={{
                    span: 8,
               }}
               wrapperCol={{
                    span: 16,
               }}
               style={{
                    width: "400px",
               }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               autoComplete="off"
               initialValues={{ remember: false }}
          >
               <h1>Login</h1>
               <Form.Item
                    label="Username"
                    name="email"
                    rules={[
                         {
                              required: true,
                              type: "email",
                              message: "Please input your email!",
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
                              message: "Please input your password!",
                         },
                    ]}
               >
                    <Input.Password />
               </Form.Item>

               <Form.Item
                    name="remember"
                    wrapperCol={{
                         offset: 8,
                         span: 16,
                    }}
               >
                    <Checkbox
                         checked={remember}
                         onChange={(e) => setRemember(e.target.checked)}
                    >
                         Remember me
                    </Checkbox>
               </Form.Item>

               <Form.Item
                    wrapperCol={{
                         offset: 8,
                         span: 16,
                    }}
               >
                    <Button type="primary" htmlType="submit">
                         Submit
                    </Button>
               </Form.Item>
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
          </Form>
     );
};

export default Login;
