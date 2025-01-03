import { Input, Menu, Space } from 'antd';
import './App.css';
import React from 'react';
import { UserOutlined ,HomeOutlined,DashboardOutlined,DollarOutlined,UserSwitchOutlined,UserDeleteOutlined  } from '@ant-design/icons';

function App() {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Space>
      <Menu
      mode='inline'
      onClick={(info)=>{
        console.log(info.key);
        
      }}
      defaultOpenKeys={["dashboard"]}
      items={[
        {label : <Input.Search placeholder='Search .....' ></Input.Search>,key:"search" },
        {label :"Home ", key :"home",icon :<HomeOutlined />},
        {label:"DashBoard", key:"dashboard" , icon:<DashboardOutlined /> ,children:[
        {label:"Revenu" ,key :"rev",icon:<DollarOutlined />},
        {label :"Expence" , key :"exp"}]},
        {label :"User Managemnt", key :"us", icon:<UserOutlined />, children:[
          {label:"Sign out" ,key :"so",icon:<UserDeleteOutlined />},
          {label :"Switch account" , key :"sa",icon:<UserSwitchOutlined />}]},
        {label:"Sign-out",key :"signout" , danger:true,icon:<UserOutlined />}
      
      ]}
      >
      </Menu>
      </Space>
    </div>
  );
}

export default App;
