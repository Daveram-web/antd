import React from 'react';
import { Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import './App.css';

const { Search } = Input;

function App() {
  const onSearch = (value) => {
    console.log('Search text:', value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Name"
          prefix={<UserAddOutlined />}
          maxLength={10}
          allowClear
          style={{ marginBottom: 20 }} // Adds spacing between components
        />

        <Search
          placeholder="Input search text"
          enterButton="Search"
          size="large"
          onSearch={onSearch} 
          />
      </header>
    </div>
  );
}

export default App;
