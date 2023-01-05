import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';


// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceholder.get('./posts');

//         dispatch({ type: 'FETCH_POSTS', payload: response })
//     }

//     // bad approach 
//     // const response = await jsonPlaceholder.get('./posts');

//     // return { 
//     //     type:'FETCH_POSTS'  ,
//     //     payload:response
//     // }
// }


// both same refactored above function 

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
    // console.log('about to fetched Posts')

    await dispatch(fetchPosts());
    // console.log(getState().posts)
    // console.log('fetched Posts')

    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

     
    // refactored above statement using lodash 

    _.chain(getState().posts)
        .map('userId')
            .uniq()
                .forEach(id => dispatch(fetchUser(id)))
                    .value()
    

    // console.log(userIds);

    // if had to use async and await for each user we do this  

    // await Promise.all(userIds.map( id  => dispatch((fetchUser(id)))));
} 




export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('./posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}


export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({type: 'FETCH_USER' , payload:response.data});
   


}

// export const fetchUser = (id) =>  (dispatch) => {

//     _fetchUser(id,dispatch);


// }


// const _fetchUser =  _.memoize(async (id,dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
    
//     dispatch({type: 'FETCH_USER' , payload:response.data});
// });

// 19 - 14 section 

