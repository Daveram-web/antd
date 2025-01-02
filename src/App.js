import { Select } from 'antd'
import React from 'react'

function App() {
  const bike = ['Mountain Bike', 'Road Bike', 'Hybrid Bike', 'Electric Bike'];

  return (
    <div className="App">
      <header className="App-header">
        <p>Select based on the option:</p>
        <Select
          mode="multiple"
          maxCount={3}
          allowClear
          placeholder="Select bike types"
          style={{ width: '400px', marginBottom: '20px' }}
        >
          {bike.map((bike, index) => (
            <Select.Option key={index} value={bike}>
              {bike}
            </Select.Option>
          ))}
        </Select>
      </header>
    </div>
  );
}

export default App