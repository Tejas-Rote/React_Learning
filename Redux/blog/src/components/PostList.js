import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';


class PostList extends Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();

  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <List
          key={post.id}
          sx={{
            display: 'flex',
            width: '100%',
            bgcolor: '#FEB404',
            padding: 1,
            marginBottom: 5
          }}>
          <ListItem
            alignItems="flex-start"
          >

            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>

            <ListItemText
              primary={post.title}
              secondary={
                <div>

                  {post.body}


                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant="body2"
                    color="text.primary"
                  >

                    <UserHeader userId={post.userId} />




                  </Typography>

                </div>
              }
            />
          </ListItem>
        </List>


      )
    })
  }


  render() {
    return (
      // console.log(this.props.posts)
      // <div>PostList</div>
      <Box sx={{
        backgroundColor: "black",
        padding: 5,
      }}>
        {this.renderList()}
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, {
  // fetchPosts 
  fetchPostsAndUsers
})(PostList);
