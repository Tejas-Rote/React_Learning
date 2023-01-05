import { AppBar, Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import Link from './Link';

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <AppBar sx={{
      height: '8vh',
      backgroundColor: '#FEB404'
    }}>
      {/* <Box> 
        <a href="/">Accordian</a>
        <a href="/">Search</a>
        <a href="/">Dropdown</a>
        <a href="/">Translate </a>
    </Box> */}
    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Link label="Accordian" href="/" />
        <Link label="Search" href="/Search" />
        <Link label="dropdown" href="/dropdown" />
        <Link label="translate" href="/translate" />
      </Tabs>



    </AppBar>

  )
}

export default Header