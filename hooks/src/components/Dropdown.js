import { Box, Button, Divider, Menu, MenuItem, Paper, Stack, styled } from '@mui/material';
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FEB404',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Dropdown = ({ options, onSelectedChange, selected }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{
      padding: 1,
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    }}>
    

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '5vh'
            }}
          >
            <h2 style={{ color: '#FAFFE3' }} >Selection menu using hooks </h2>
          </Box>
        </Item>

        <Item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '5vh',
              padding: 1,
              flex: 1,

              // backgroundColor: '#08E9DE'
              backgroundColor: `${selected.value}`
              // USE STRING TEMPLATE TO ACCES THE OBJECT IN CSS STYLING 

            }}

          >
            <h2 style={{ color: '#FAFFE3' }} > {selected.label} </h2>
          </Box>
        </Item>



        <Item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '5vh',
              padding: 1,

              // backgroundColor: 'black'
            }}
          >
            <Button
              id="basic-button"
              endIcon={<ExpandMoreIcon />}
              sx={{
                height: '5vh',
                backgroundColor: '#D22D2D'

              }}

              onClick={handleClick}
            >
              <h3 style={{ color: '#FAFFE3' }}> Selected {selected.label}</h3>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {options.map((option) => {
                if (option.value === selected.value) {
                  return null;
                }
                else {
                  return (
                    <MenuItem key={option.value} onClick={() => onSelectedChange(option)}>{option.label}</MenuItem>
                  );
                }
              })}
            </Menu>
          </Box>
        </Item>
      </Stack>
    </Box>


  )
}

export default Dropdown;



