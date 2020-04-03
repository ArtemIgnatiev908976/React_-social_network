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
        let text = newPostElement.current.value;
        props.addPost(text)
    }


    return <div className={s.postsBlock}>
        <div>
            <textarea ref={newPostElement}></textarea>
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
