import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{

  return  <div>Main content
  <img src="https://miro.medium.com/max/2400/1*d6l-K0K-4U8ROEXG9_Ox7Q.png" />

  <div><a>desc+ava</a></div>
  <MyPosts />

  </div>
}

export default Profile;
