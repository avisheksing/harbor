import React, {Suspense} from "react"
import {Layout} from "antd"
import { useEffect } from 'react';
import { customSessionStorage } from './utils/customSessionStorage';
import { Mock_User_Data, Session_Storage_Key } from './Constant';
import './App.css';
import FallBackComponent from "./components/FallBack";

const HeaderComponent = React.lazy(() => import('./components/Header'));
const SidebarComponanet = React.lazy(() => import('./components/Sidebar'));
const ContentComponent = React.lazy(() => import('./components/Content'));


function App() {

  useEffect(() => {
    customSessionStorage(Mock_User_Data, Session_Storage_Key.UserData, true)
  }, [])

  return (
    <Layout>
      <Suspense fallback={<FallBackComponent />}>
        <HeaderComponent></HeaderComponent>
        <Layout className='harbor-body-content'>
          <SidebarComponanet></SidebarComponanet>
          <ContentComponent></ContentComponent>
        </Layout>
      </Suspense>
    </Layout>
  );
}

export default App;
