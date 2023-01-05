import React, { Component } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Header from './Header';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';

import './App.css';
import { Box } from '@mui/material';



const App = () => {
  return (
    <Box
      sx={{
        display: 'box',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#112031'

      }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<StreamList />} />
          <Route exact path='/streams/new' element={<StreamCreate />} />
          <Route exact path='/streams/edit' element={<StreamEdit />} />
          <Route exact path='/streams/delete' element={<StreamDelete />} />
          <Route exact path='/streams/show' element={<StreamShow />} />

        </Routes>
      </BrowserRouter>
    </Box>

  );
}

export default App;
