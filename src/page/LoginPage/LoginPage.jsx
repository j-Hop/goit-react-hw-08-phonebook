import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from 'redux/authentificated/operations';
import { selectAuthentificated } from 'redux/authentificated/authSelectors';
import { Button, Form, Input } from 'antd';
// import css from './Login.module.css';
const LoginPage = () => {
  const authentificated = useSelector(selectAuthentificated);

  const dispatch = useDispatch();
  // const handleSabmitLogin = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const email = form.userEmail.value;
  //   const password = form.userPassword.value;
  //   dispatch(loginUser({ email, password }));
  //   form.reset();
  // };
  const onFinish = values => {
    dispatch(loginUser(values));
  };

  if (authentificated) return <Navigate to="/contacts" />;

  // const {  Button, Checkbox, Form, Input  } = antd;
  return (
    <div>
      <h1>Login Into Your Account</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Input name="userEmail" type="email" required /> */}

        {/* <label> */}
        <Form.Item
          label="Password"
          name="password"
          minLength={7}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        {/* </label> */}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sing in
          </Button>
        </Form.Item>
        {/* <Button type="submit">Sing in</Button> */}
      </Form>
    </div>

    // const onFinish = (values) => {
    //   console.log('Success:', values);
    // };
    // const onFinishFailed = (errorInfo) => {
    //   console.log('Failed:', errorInfo);
    // };
    // const App = () => (
    //   <Form
    //     name="basic"
    //     labelCol={{
    //       span: 8,
    //     }}
    //     wrapperCol={{
    //       span: 16,
    //     }}
    //     style={{
    //       maxWidth: 600,
    //     }}
    //     initialValues={{
    //       remember: true,
    //     }}
    //     onFinish={onFinish}
    //     onFinishFailed={onFinishFailed}
    //     autoComplete="off"
    //   >
    // <Form.Item
    //   label="Username"
    //   name="username"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input your username!',
    //     },
    //   ]}
    // >
    //   <Input />
    // </Form.Item>

    // <Form.Item
    //   label="Password"
    //   name="password"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input your password!',
    //     },
    //   ]}
    // >
    //   <Input.Password />
    // </Form.Item>

    // <Form.Item
    //   name="remember"
    //   valuePropName="checked"
    //   wrapperCol={{
    //     offset: 8,
    //     span: 16,
    //   }}
    // >
    //   <Checkbox>Remember me</Checkbox>
    // </Form.Item>

    //     <Form.Item
    //       wrapperCol={{
    //         offset: 8,
    //         span: 16,
    //       }}
    //     >
    //       <Button type="primary" htmlType="submit">
    //         Submit
    //       </Button>
    //     </Form.Item>
    //   </Form>
    // );
  );
};

export default LoginPage;
