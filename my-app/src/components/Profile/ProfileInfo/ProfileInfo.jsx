import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';





const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div><img src="https://miro.medium.com/max/2400/1*d6l-K0K-4U8ROEXG9_Ox7Q.png"/></div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <a>desc+ava</a>

            </div>
        </div>
    )
}

export default ProfileInfo;
