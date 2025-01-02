import { Alert, Button, Form, Input,message } from 'antd';
import './App.css';
import { useState } from 'react';

function App() {
  const[showAlert,setShowAlert] = useState(false)

  const onFinish = (values) => {
    console.log('Form Submitted:', values);
    setTimeout(()=>{
      setShowAlert(true)

      // message.success("login sucess")
      // message.warning("Login Pending")
      // message.error("Login Filed")
    },2000)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form Submission Failed:', errorInfo);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showAlert && 
        <Alert message="Login Success"
         type="success"
         description="The login was sucesfull" 
         closable/>}
        
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
         
         <Form.Item
            label="Name"
            name="name"
            // rules={[
            //   { required: true, message: 'Please enter your name!' },
            //   { min: 3, message: 'Name must be at least 3 characters long!' },
            // ]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            // rules={[
            //   { required: true, message: 'Please enter your password!' },
            //   { min: 6, message: 'Password must be at least 6 characters long!' },
            // ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
