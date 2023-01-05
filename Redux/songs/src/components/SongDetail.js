import { Card, CardContent, CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {

    // console.log(props)
    if (!song) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '500px',
                    height: '500px',
                    backgroundColor: 'black'
                }}
            >

                <Card
                    sx={{
                        margin: 3,
                        width: '40vw',
                        height: '40vh',
                        backgroundColor: '#FEB404',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    {/* <CardHeader>
                        <h2 style={{ color: 'white' }}> Song Details</h2>
                    </CardHeader> */}
                    <CardContent sx={{

                    }}>
                        <h1 style={{ color: 'black' }}>Select A Song</h1>
                        {/* <h4 style={{ color: 'black' }}>{song.duration}</h4> */}

                    </CardContent>
                </Card>
            </Box>
        )
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '500px',
                height: '500px',
                backgroundColor: 'black'
            }}
        >
            <Card
                sx={{
                    margin: 3,
                    width: '40vw',
                    height: '40vh',
                    backgroundColor: '#FEB404',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {/* <CardHeader>
                    <h2 style={{ color: 'white' }}> Song Details</h2>
                </CardHeader> */}
                <CardContent>
                    <h1 style={{ color: 'black' }}>{song.title}</h1>
                    <h2 style={{ color: 'black' }}>{song.duration}</h2>

                </CardContent>
            </Card>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);