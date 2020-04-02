import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = () => {

    return (
        <div>Main content

          <ProfileInfo />

          <MyPosts/>
        </div>
    )
}

export default Profile;
