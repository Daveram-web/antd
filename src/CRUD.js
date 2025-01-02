import React, { useState } from 'react';
import { Table, Button,  Input, Form } from 'antd';
import {EditTwoTone,DeleteTwoTone} from '@ant-design/icons';

import './App.css';

const CRUD = () => {
  const [values, setValues] = useState([
    { id: 1, name: 'Name 1', email: 'Email 1', add: 'Add 1' },
    { id: 2, name: 'Name 2', email: 'Email 2', add: 'Add 2' },
    { id: 3, name: 'Name 3', email: 'Email 3', add: 'Add 3' },
    { id: 4, name: 'Name 4', email: 'Email 4', add: 'Add 4' },
    { id: 5, name: 'Name 5', email: 'Email 5', add: 'Add 5' },
    { id: 6, name: 'Name 6', email: 'Email 6', add: 'Add 6' },
  ]);

  const [form] = Form.useForm();  

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'add',
      key: 'add',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => {
        return (
          <>
            <EditTwoTone />
            <DeleteTwoTone
              onClick={() => handleDelete(record)} 
              style={{ margin: 12, cursor: 'pointer' }}
            />
          </>
      )}

    },
  ];

  const handleAddUser = (newUser) => {
    setValues((prevValues) => [
      ...prevValues,
      { ...newUser, id: prevValues.length + 1 }, 
    ]);
    form.resetFields();  
  };

  const handleDelete = (record) => {
    setValues((prev) => {
      return prev.filter(student => student.id !== record.id);
    });
  };
  


  return (
    <div className="App">
      <header className="App-header">
        <Form form={form} onFinish={handleAddUser} layout="inline" style={{ marginBottom: '20px' }}>
          <Form.Item label="Name" name="name" >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item label="Email" name="email" >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item label="Address" name="add" >
            <Input placeholder="Enter address" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Add User
            </Button>
          </Form.Item>
        </Form> 
        <Table dataSource={values} columns={columns} rowKey="id" />
      </header>
    </div>
  );
};

export default CRUD;
