import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUser } from 'redux/authentificated/operations';
import { selectAuthentificated } from 'redux/authentificated/authSelectors';
import { Button, Form, Input } from 'antd';

const RegisterPage = () => {
  const authentificated = useSelector(selectAuthentificated);

  const dispatch = useDispatch();

  // const handleSubmitRegister = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const name = form.userName.value;
  //   const email = form.userEmail.value;
  //   const password = form.userPassword.value;

  //   dispatch(
  //     registerUser({
  //       name,
  //       email,
  //       password,
  //     })
  //   );
  //   form.reset();
  // };
  const onFinish = values => {
    dispatch(registerUser(values));
  };
  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Register Your Account</h1>
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
          label="Name"
          name="name"
          // minLength={5}
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <input name="userName" type="text" required minLength={5} /> */}
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
      </Form>
    </div>
  );
};

export default RegisterPage;
