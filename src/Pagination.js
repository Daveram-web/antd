import { Table } from 'antd'
import React, { useEffect, useState } from 'react'

const Pagination = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching starts
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        setDataSource(data); // Set the data once the fetch is successful
      })
      .catch(err => {
        console.log(err.message);    
      })
      .finally(() => {
        setLoading(false); // Set loading to false when fetch is done
      });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id", // Updated the key to be a string for consistency
    },
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
      sorter :(a,b) => a.userId - b.userId // Added a sorter for UserId
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",   
      sorter : (a,b)=> a.title.localeCompare(b.title)     
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "completed",
      render: (completed) => {
        return <p>{completed ? "Completed" : "InProgress"}</p>;
      },
      filters:[
        {text :"Completed",value:true},
        {text :"InProgress",value:false}
      ],
      onFilter :(value,record) =>{
        return record.completed === value
      }
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading} // This will show the loading indicator
        pagination={{ pageSize: 10 }} // Optional: Set pagination to show 10 items per page
      />
    </div>
  );
}

export default Pagination;
