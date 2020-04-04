import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    // let posts = [
    //     {id: 1, message: 'hi my first post', likesCount: 12},
    //     {id: 2, message: 'hi my second post', likesCount: 222},
    //     {id: 3, message: 'hi my second post222', likesCount: 22222},
    //
    // ]

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

// отправить сообщение(пост)
    let addPost = () => {

        props.dispatch({ type: 'ADD-POST'});


    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
      let action =  {type: 'UPDATE-NEW-POST-TEXT', newText: text};
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
