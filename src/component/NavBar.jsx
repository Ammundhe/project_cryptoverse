import React from 'react';
import { Button, Typography, Menu, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, FundFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Image from '../images/cryptocurrency.png';


const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={Image} size="large"/>
            <Typography.Title level={2} className="logo">cryptoverse</Typography.Title>
            <Button className="menu-control-container"><MenuOutlined /></Button>

        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined
            />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to="/exchange">Exchange</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default NavBar;
