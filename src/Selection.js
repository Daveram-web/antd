import { Table, Tag } from 'antd'
import React, { useState } from 'react'

const Selection = () => {

const[select,setSelect]  = useState([1,2])    
const columns = [
    {
        title : "Student Id",
        dataIndex : "id",
        key : "id",
    },
    {
        title : "Student Name",
        dataIndex : "name",
        key : "name",
    },
    {
        title :"Student Grade",
        dataIndex : "grade",
        key : "grade",
        render : (tag)=>{
            const color = tag.includes('A') ? "Green" : tag.includes('B') ? "Blue" : tag.includes('C') ? "pink" : tag.includes('D')? "brown" : "Red";
            return <Tag color={color} key={tag}>{tag}</Tag>
        }

}]

const dataSource = [{
    id : 1,
    name :"Student 1",
    grade : "A+",
    key : 1
},
{
    id : 2,
    name :"Student 2",
    grade : "A",
    key : 2
},
{
    id : 3,
    name :"Student 3",
    grade : "B+",
    key : 3
},
{
    id : 4,
    name :"Student 4",
    grade : "B",
    key : 4
},
{
    id : 5,
    name :"Student 5",
    grade : "A-",
    key : 5
},
{
    id : 6,
    name :"Student 6",
    grade : "C+",
    key : 6
},
{
    id : 7,
    name :"Student 7",
    grade : "C",
    key : 7
},
{
    id : 8,
    name :"Student 8",
    grade : "D+",
    key : 8
},
{
    id : 9,
    name :"Student 9",
    grade : "D",
    key : 9
},
{
    id : 10,
    name :"Student 10",
    grade : "F",
    key : 10
}]




return (
    <div>
        <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
            type : 'checkbox',
            selectedRowKeys : select, 
            onChange:(keys) =>{
                setSelect(keys)
            }, 
            onSelect :(record)=>{
                console.log(record)
            }, 
            getCheckboxProps:(record)=>({
                disabled : record.grade === "F"
            }),
            selections:[
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                Table.SELECTION_NONE,
            ]  
        }
        
    }
        >

        </Table>
    </div>
  )
}

export default Selection