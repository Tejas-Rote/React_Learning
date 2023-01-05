import { Box, Button, Card, CardContent, Divider, Paper, Stack, styled } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),

}));



class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <Box key={song.title} 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '500px',
                    backgroundColor: 'black'
                }}>
                    <Card sx={{
                        margin: 3,
                        width: '50vw',
                        backgroundColor: '#FEB404'
                    }}>
                        <CardContent sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="horizontal" flexItem />}
                                spacing={2}
                            >
                                <Item>
                                    <h3 >
                                        {song.title}
                                    </h3>
                                </Item>

                                <Button size="small" sx={{
                                    backgroundColor: ' #08E9DE'
                                }}
                                onClick = { () => this.props.selectSong(song) }
                                >
                                    <h4 style={{ color: '#FAFFE3' }}>Select</h4>

                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            );
        })
    }


    render() {
        // console.log(this.props);
        return (
            <div>{this.renderList()}</div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs
    }
    // return state;
}


export default connect(mapStateToProps, {
    selectSong:selectSong
    // selectSong // es15 method as both key and name is same 
})(SongList);