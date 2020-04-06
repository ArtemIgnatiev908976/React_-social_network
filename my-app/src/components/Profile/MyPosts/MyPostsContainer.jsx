import React from 'react';
import {appPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



// const MyPostsContainer = (props) => {
//
//
//
// // отправить сообщение(пост)
//
//
//     return (
//
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(appPostActionCreator());
//
//                 };
//
//                 let onPostChange = (text) => {
//
//                     let action = updateNewPostActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return <MyPosts updateNewPostText={onPostChange}
//                                 addPost={addPost}
//                                 posts={store.getState().profilePage.posts}
//                                 newPostText={store.getState().profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }


const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        updateNewPostText: (text) =>{
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },

        addPost: ()=>{
            dispatch(appPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
