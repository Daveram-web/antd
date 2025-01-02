import Input from 'antd/es/input/Input';
import './App.css';
import {UserAddOutlined} from '@ant-design/icons';

function App() {


  return (
    <div className="App">
     <header className='App-header'>
      <Input
      placeholder=' Name'
      prefix = {<UserAddOutlined />}
      allowClear
      
      >
      </Input>
     </header>
    </div>
  );
}

export default App;
