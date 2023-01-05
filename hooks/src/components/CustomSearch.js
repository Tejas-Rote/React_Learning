import React, { useState, useEffect } from 'react'
import { Box, Button, FormControl, InputLabel, Stack, styled, TextField } from '@mui/material'

import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import axios from 'axios';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'lightGrey',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// url is https://en.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=Apple&aplimit=5

const CustomSearch = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  console.log("tenr2");

  console.log(results);
  useEffect(() => {
    console.log("term")
    // if async used directly error comes 
    // method one make 1 temperary func 

    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: "json",
          srsearch: term,


        }
      });

      setResults(data.query.search);

      // sdkfjajosdjfjasjdfohsohfa
    };
    if (term && !results.length) {
      search();
    }
    else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500)

      return () => {
        clearTimeout(timeoutId);
      }

    }
    // //method 2 
    // // instead making a variable it directly makes a function and calls it automatically 

    // (async () => {
    //   await axios.get('url ');
    // })();

    // // method 3 use normal promises
    // axios.get('url')
    // .then((response) => {
    //   console.log(response.data);
    // });
    // clean up function to clear previous timeout 

  }, [term]);


  const renderedResults = results.map(result => {
    return (
      <Box key={result.pageid}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FEB404',
          padding: 0.5
        }}>
        <h1 style={{ color: "#FAFFE3" }} >{result.title}</h1>

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>

          <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          <Button variant="contained"
            sx={{
              marginRight: 1,
              backgroundColor: '#D22D2D',
            }}
            onClick={() => {
              window.location.href = `https://en.wikipedia.org?curid=${result.pageid}`;
            }}
          >
            GO
            {/* // way to add link to wikipidea for search  */}
            {/* <a href={`https://en.wikipedia.org?curid=${result.pageid}`} >GO</a> */}
          </Button>
          {/* <p>{result.snippet}</p> */}
        </Box>

      </Box>
    )
  })

  return (
    <Box sx={{
      padding: 1,
      backgroundColor: "black",
      width: "100vw",
    }}>

      <Stack
        spacing={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

        }}>

        <Item>
          <TextField
            sx={{
              width: '60vw',
            }}
            label="Enter text to search"
            variant='standard'
            value={term}
            onChange={handleChange}
            id="fullWidth"
          />
        </Item>




        <Item >
          <Box
            sx={{
              display: 'inline-block',
              alignItems: 'center',
              justifyContent: 'center',
              width: '90vw',
              padding: '0.1em',
            }}
          >
            {renderedResults}
          </Box>
        </Item>
      </Stack>
    </Box>
  )
}

export default CustomSearch