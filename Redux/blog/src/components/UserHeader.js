import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchUser} from '../actions'


class UserHeader extends Component {
    // componentDidMount () {
    //     this.props.fetchUser(this.props.userId);
    // }

  render() {

    const { user } = this.props;

    if (!user) {
      return null;
    }



    // const user = this.props.user.find((user) =>  user.id === this.props.userId);
    // if(!user) {
    //   return null;
    // }
    
    
    
    return (
      <div>{user.name}</div>
    )
  }
}


const mapStateToProps =(state,ownProps) =>{
  // return {user:state.user};
  return {user:state.user.find(user => user.id === ownProps.userId)};

}
export default connect(mapStateToProps,
  // {fetchUser}
  )(UserHeader);
