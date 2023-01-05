
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React, {useState} from 'react'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';






const CustomAccordian = ({ items }) => {
    const[activeIndex,setActiveIndex] = useState(null);

  // to handle the expansion of acoordian only for the clicked one else all will be closed 
  // use onchange instead of onclick to handle the expansion of acoordian only for the clicked one else all will be closed


  const handleChange = (index) =>(event,active) =>{
    setActiveIndex(active ? index : 0);
  };

  
  const renderedItem = items.map((items,index) => {
    // const active == index === activeIndex ?


    return( 
    <Box key={items.title}sx={{
      margin:1,
      width:'90vw'


    }}>

        <Accordion sx={{
          backgroundColor:"#FEB404"
        }}
        expanded = {activeIndex === index}
          // onClick={() =>onTitleClick(index)}
          onChange={handleChange(index)}
         >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h5" sx = {{fontWeight:700, fontStyle:'bold', color:'#D22D2D'}}>{items.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant = 'h6' style={{color:'#FAFFE3'}}>
              {items.content}
            </Typography>
          </AccordionDetails>
        </Accordion>

    </Box>)
  })
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      alignItems: "center",
        justifyContent: "center",
        width: '100vw',
        height: '100vh',
        backgroundColor:'black'
    }}>

        {renderedItem}
        {/* <h1>Active index is {activeIndex}</h1> */}

    </Box>
  )
}
export default CustomAccordian;


