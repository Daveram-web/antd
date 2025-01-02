import './App.css';
import {  Table } from 'antd';

function App() {
const data =[{
  name:'Name 1',
  age:21,
  address :'Adress 1',
  key : '1'
},
{name:'Name 2',
  age:22,
  address :'Adress 2',
  key : '2'
},
{
  name:'Name 3',
  age:16,
  address :'Adress 3',
  key : '3'

},
{
  name:'Name 3',
  age:25,
  address :'Adress 3',
  key : '4'

}]

const columns = [{
  title : () =>    <p style ={{color : 'red'}}>Name</p>,
  dataIndex : 'name',
  key : 'name',
  sorter : (a,b) => a.name.localeCompare(b.name), 
  render : name =>{
    return <a href="#">{name}</a>
  },
},
{
  title : 'Age',
  dataIndex : 'age',
  key : 'age',
  sorter :(a,b) =>a.age - b.age
},
{
  title : 'address',
  dataIndex : 'address',
  key : 'address',
},
{
 title : 'Adult',
 key : 'key',
 render : adult =>{
 return <p>{adult.age > 18 ? "Adult" : "Not-Adult"} </p>
}
}

]


  return (
    <div className="App">
     <header className='App-header'>
      <Table
      columns={columns}
      dataSource={data}
        >

      </Table>
     </header>
    </div>
  );
}

export default App;
