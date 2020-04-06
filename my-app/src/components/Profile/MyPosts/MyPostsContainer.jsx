import React from 'react';
import {appPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {



// отправить сообщение(пост)


    return (

        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(appPostActionCreator());

                };

                let onPostChange = (text) => {

                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
