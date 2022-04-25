import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { NavBar, HomePage, CryptoDetails, Cryptocurrencies, News, Exchange } from './component';
import "./App.css";

const App = () => {
  return (
    <div className='myapp'>
      <div className='navbar'>
        <NavBar/>
      </div>
      <div className='main'>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/exchange' element={<Exchange/>}/>
            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
            <Route path='/crypto/:coinid' element={<CryptoDetails/>}/>
            <Route path='/news' element={<News/>}/>
          </Routes>
        </Layout>
        <div className='footer'>
          <Typography.Title>
            Copyright @2022
            <Link to="/">
              Cryptoverse inc
            </Link>
          </Typography.Title>
        </div>
      </div>
    </div>
  )
}

export default App;
