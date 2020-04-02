import React from 'react';
import s from './ProfileInfo.module.css';




const ProfileInfo = () => {

    return (
        <div>
            <div><img src="https://miro.medium.com/max/2400/1*d6l-K0K-4U8ROEXG9_Ox7Q.png"/></div>
            <div className={s.descriptionBlock}><a>desc+ava</a></div>
        </div>
    )
}

export default ProfileInfo;
