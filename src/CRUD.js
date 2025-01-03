import "./App.css";
import { Button, Table, Modal, Input, Form } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    { id: 1, name: "John", email: "john@gmail.com", address: "John Address" },
    { id: 2, name: "David", email: "david@gmail.com", address: "David Address" },
    { id: 3, name: "James", email: "james@gmail.com", address: "James Address" },
    { id: 4, name: "Sam", email: "sam@gmail.com", address: "Sam Address" },
  ]);

  const [form] = Form.useForm();

  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Name", dataIndex: "name" },
    { key: "3", title: "Email", dataIndex: "email" },
    { key: "4", title: "Address", dataIndex: "address" },
    {
      key: "5",
      title: "Actions",
      render: (record) => (
        <>
          <EditOutlined
            onClick={() => {
              onEditStudent(record);
            }}
            style={{ marginRight: 12, cursor: "pointer" }}
          />
          <DeleteOutlined
            onClick={() => {
              onDeleteStudent(record);
            }}
            style={{ color: "red", cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  const onAddStudent = () => {
    setEditingStudent(null); // Indicates adding a new user
    setIsVisible(true);
    form.resetFields(); // Clear the form
  };

  const onEditStudent = (record) => {
    setEditingStudent(record); // Indicates editing a user
    setIsVisible(true);
    form.setFieldsValue(record); // Populate the form with selected record data
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) => prev.filter((student) => student.id !== record.id));
      },
    });
  };

  const handleFormSubmit = (values) => {
    if (editingStudent) {
      setDataSource((prev) =>
        prev.map((student) =>
          student.id === editingStudent.id ? { ...editingStudent, ...values } : student
        )
      );
    } else {
      const newStudent = {
        ...values,
        id: dataSource.length ? dataSource[dataSource.length - 1].id + 1 : 1,
      };
      setDataSource((prev) => [...prev, newStudent]);
    }
    setIsVisible(false);
    setEditingStudent(null);
    form.resetFields();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddStudent} style={{ marginBottom: 20 }}>
          Add New Student
        </Button>
        <Table columns={columns} dataSource={dataSource} rowKey="id" />
        <Modal
          title={editingStudent ? "Edit Student" : "Add Student"}
          open={isVisible}
          okText={editingStudent ? "Save Changes" : "Add Student"}
          onCancel={() => {
            setIsVisible(false);
            setEditingStudent(null);
          }}
          onOk={() => form.submit()}
        >
          <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter the name" }]}
            >
              <Input placeholder="Enter name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter the email" }]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter the address" }]}
            >
              <Input placeholder="Enter address" />
            </Form.Item>
          </Form>
        </Modal>
      </header>
    </div>
  );
}

export default App;
