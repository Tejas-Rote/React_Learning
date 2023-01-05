import React from 'react'




import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail
  from './SongDetail';
import { Box, Paper, Stack } from '@mui/material';
const App = () => {
  return (
    <Box sx ={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor:'black',
      padding:1
    }}>
      <Stack direction='row' spacing={10}>
        {/* <Paper> */}
        <SongList />

        {/* </Paper> */}
        
        {/* <Paper> */}
        <SongDetail />

        {/* </Paper> */}

      </Stack>
    </Box>

  )
}
// 6 video
export default App;