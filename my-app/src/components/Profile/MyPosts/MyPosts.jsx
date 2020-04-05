import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {appPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

// отправить сообщение(пост)
    let addPost = () => {

        props.dispatch(appPostActionCreator());

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
      //let action =  {type: 'UPDATE-NEW-POST-TEXT', newText: text};
      let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    };

    return <div className={s.postsBlock}>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
            <button onClick={addPost}>Add post
            </button>
        </div>

        <div className={s.posts}>

            {postsElements}

        </div>
    </div>
}

export default MyPosts;
