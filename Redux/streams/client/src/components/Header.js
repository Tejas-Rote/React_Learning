import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
const Header = () => {
  //     const handleClick = () =>{
  //         <Link to="/streams/new" >All</Link>
  //     }
  return (
    <Box
      sx={{
        flexGrow: 1,



      }}>
      <AppBar position="static" sx={{
        backgroundColor: '#345B63',
      }}>
        <Toolbar sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>

          <div >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{
                textTransform: "none",
                color: "#D4ECDD",
                // backgroundColor: 'red',

                ':hover': {
                  backgroundColor: '#D4ECDD', // theme.palette.primary.main
                  color: '#152D35',
                },


              }}>
                <Typography variant="h6" component="div" sx={{ flex: 3 }} >
                  Streamyyyyy
                </Typography>
              </Button>
            </Link>
          </div>

          <div >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{
                textTransform: "none",
                color: "#D4ECDD",
                // backgroundColor: 'red',

                ':hover': {
                  backgroundColor: '#D4ECDD', // theme.palette.primary.main
                  color: '#152D35',
                },


              }}>
                <Typography variant="h6" component="div" sx={{ flex: 1 }}>
                  Alll Streams
                </Typography>
              </Button>
            </Link>
          </div>

          <div >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{
                textTransform: "none",
                color: "#D4ECDD",
                // backgroundColor: 'red',

                ':hover': {
                  backgroundColor: '#D4ECDD', // theme.palette.primary.main
                  color: '#152D35',
                },
              }}

              >
                <Typography variant="h6" component="div" sx={{ flex: 1 }} >
                  Login
                </Typography>
              </Button>
            </Link>
          </div>

          <GoogleAuth />







        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header