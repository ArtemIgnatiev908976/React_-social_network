import React from 'react';
import {appPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();


// отправить сообщение(пост)
    let addPost = () => {
        props.store.dispatch(appPostActionCreator());

    };

    let onPostChange = (text) => {

        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };

    return <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}

         posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />
}

export default MyPostsContainer;
