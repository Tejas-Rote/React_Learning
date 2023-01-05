
import { Box, createTheme,TextField , ThemeProvider, styled} from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    }
  },
  typography: {
    fontFamily: 'poppins',
    fontSize: 16    
  }
  
  
})

const Custom_TextField = styled(TextField)({
  input: {
        color: "#444444"
      },
  '& label.Mui-focused': {
          color: '#DA0037',
    
        },
        '& label': {
          color: "#DA0037"
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#444444',
            // borderColor: '#EDEDED',

            borderWidth: 2
          },
          '&:hover fieldset': {
            borderColor: '#DA0037',
            borderWidth: 2
    
          },
          '&.Mui-focused fieldset': {
            borderColor: '#DA0037',
            borderWidth: 2
    
          },
  },
});


const CustomTextField = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box id="About" sx={{

        display: "flex",
        width: {
          lg: 500,
          sm: 350,
          xs: 250,
        },

        // backgroundColor: "#171717",
        // backgroundColor: "#444444",

        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        // padding:10,
        margin: 3

      }}>

        <Custom_TextField 
        label={label} variant="outlined" 
          fullWidth={true}
          style={{
            height: {
              lg: 100,
              sm: 70,
            },
          }}

        />
      </Box>
    </ThemeProvider>




  );
}
export default CustomTextField;