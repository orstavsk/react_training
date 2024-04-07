import React from 'react';
import { useState } from 'react';
import { AppBar, Badge, Toolbar, Typography, Tab } from '@mui/material';
import { ShoppingCart,Home } from '@mui/icons-material';
import {TabPanel,TabContext,TabList} from '@mui/lab';

import './App.css';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import { useSelector } from 'react-redux';
import { selectCarttotalCount } from './state/reducers/cartReducer';
import { selectCash } from './state/reducers/userReducer';

function App() {
  const [page, setPage] =useState<string>('home');
  const cartItemsCount = useSelector(selectCarttotalCount);
  const userCash=useSelector(selectCash);

  const handleChange = (event:React.SyntheticEvent, newPage:string) => {
    setPage(newPage);
  };
  return (
    <>
      <AppBar position="sticky" sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Toolbar sx={{justifyContent:'space-between', width:'100%' }}>
        <Typography  variant="h6" >
        סכום כולל:{userCash.toFixed(2)}₪
        </Typography>
          <Badge badgeContent={cartItemsCount} sx={{ margin: '20px' }} color="warning">
            <ShoppingCart color="action" />
          </Badge>
        </Toolbar>
      </AppBar>
      <TabContext value={page}>
        <TabList onChange={handleChange}>
          <Tab label={<Home />} value={'home'} />
          <Tab label={<ShoppingCart />} value={'cart'} />
        </TabList>
        <TabPanel key={'home'} value="home">
        <HomePage/>
        </TabPanel>
        <TabPanel key={'cart'} value="cart">
          <CartPage/>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default App;
