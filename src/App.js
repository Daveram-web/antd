import { useState } from 'react';
import './App.css';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons'

function App() {
const [loading, setLoading] = useState(false)
const handelClick = () => {
 setLoading(true)
 setTimeout(() => {
 setLoading(false)
  }, 2000)}

  return (
    <div className="App">
      <header className='App-header'>
      <Button
        type='primary'
        block
        icon = {<RightOutlined />}
        className='my-button'
        onClick={handelClick}
        loading={loading}
      >
        loagind
      </Button>
      </header>
    </div>
  );
}

export default App;
