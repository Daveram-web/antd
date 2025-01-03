import { Space, Tabs, } from 'antd';
import './App.css';
import React, { useRef, useState } from 'react';
import { AppleOutlined, WindowsOutlined, AndroidOutlined } from '@ant-design/icons';
function App() {

  const nextTab = useRef(3)
  const [tabList, setTabList] = useState([
    { tab: 'tab 1', key: '1' },
    { tab: 'tab 2', key: '2' },
  ])

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      setTabList([
        ...tabList,
        { tab: `Tab ${nextTab.current}`, key: nextTab.current.toString() },
      ]);
      nextTab.current += 1;
    } else if (action === 'remove') {
      setTabList(tabList.filter((item) => item.key !== targetKey));
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Space size={20}
        direction='vertical'>
        {/* Tabs on top */}
        <Tabs
          defaultActiveKey='3'
        >
          <Tabs.TabPane tab="Tab 1" key="tab 1">
            <div>This is Tab 1</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="tab2">
            <div>This is Tab 2</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab='Tab 3' key='3'>
            <div>This is Tab 3</div>
          </Tabs.TabPane>

        </Tabs>




        {/* Tabs on left */}
        <Tabs
          defaultActiveKey='tab 1'
          tabPosition='left'
        >
          <Tabs.TabPane tab="Tab 1" key="tab 1">
            <div>This is Tab 1</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="tab2">
            <div>This is Tab 2</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab='Tab 3' key='3'>
            <div>This is Tab 3</div>
          </Tabs.TabPane>

        </Tabs>



        {/* Tabs Icon */}
        <Tabs
          defaultActiveKey='tab 1'

        >
          <Tabs.TabPane tab={
            <span> <AppleOutlined /> </span>
          } key="tab 1">
            <div>This is Tab 1</div>
          </Tabs.TabPane>

          <Tabs.TabPane tab={
            <span><WindowsOutlined /></span>
          } key="tab2">
            <div>This is Tab 2</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab=
            {<span><AndroidOutlined /></span>} key='3'>
            <div>This is Tab 3</div>
          </Tabs.TabPane>

        </Tabs>

        <Tabs
          defaultActiveKey='1'
          type='editable-card'
          onEdit={onEdit}
          
        >
          {tabList.map((tabInfo) => (

            <Tabs.TabPane tab={tabInfo.tab} key={tabInfo.key}
            >


              <div>This is {tabInfo.tab}</div>
            </Tabs.TabPane>
          ))}
        </Tabs>

      </Space>
    </div>
  );
}

export default App;
