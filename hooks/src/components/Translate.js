// 
import { Box, Stack, TextField } from '@mui/material';


import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Convert from './Convert';
import Dropdown from './Dropdown'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'lightGrey',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];


const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("Enter text here");
    
    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <Box
            sx={{
                padding: 1,
                display: 'flex',
                backgroundColor: 'black',
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Stack 
            spacing={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Item>
                    <TextField
                        sx={{
                            width: '60vw',  
                        }}
                        label="Enter text here"
                        variant='standard'
                        value={text}
                        onChange={handleChange}
                        size='normal'
                    />
                </Item>

                <Item sx ={{
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60vw',
                    height: '8vh',
                }}>
                    <Dropdown options={options} selected={language} onSelectedChange={setLanguage} />
                </Item>
                <Item>
                    <Box
                        sx={{
                            padding: 1,
                            display: 'flex',
                            flexDirection:'column ',
                            width: '60vw',
                            height: '10vh',
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                        <h2> Output Text</h2>
                        <Convert text={text} language={language} />
                    </Box>

                </Item>
            </Stack>


        </Box>

    )
}

export default Translate