import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://windowstips.ru/wp-content/uploads/2016/06/Icon-User.png',
                followed: false,
                fullName: 'Dmitry',
                status: "I am a boss",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://windowstips.ru/wp-content/uploads/2016/06/Icon-User.png',
                followed: true,
                fullName: 'Artem',
                status: "I am a boss1",
                location: {city: 'Samara', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://windowstips.ru/wp-content/uploads/2016/06/Icon-User.png',
                followed: false,
                fullName: 'Ivan',
                status: "I am a boss2",
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://windowstips.ru/wp-content/uploads/2016/06/Icon-User.png',
                followed: false,
                fullName: 'Maha',
                status: "I am a boss3",
                location: {city: 'Minsk3', country: 'Belarus'}
            },
            {
                id: 5,
                photoUrl: 'https://windowstips.ru/wp-content/uploads/2016/06/Icon-User.png',
                followed: false,
                fullName: 'Lena',
                status: "I am a boss4",
                location: {city: 'Minsk4', country: 'Belarus'}
            }

        ])
    }


    return <div>

        {
            props.users.map(u => <div key={u.id}>

          <span>

              <div>

                  <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
              </div>
              <div>
                  {u.followed
                      ? <button onClick={() => {
                          props.unfollow(u.id)
                      }}>unFollow</button>
                      : <button onClick={() => {
                          props.follow(u.id)
                      }}>Follow</button>}

                  < /div>

                      </span>
                <span>
                      <span>
                      <div>{u.fullName}</div><div>{u.status}</div>
                      </span>
                      <span>

                      <div>{u.location.country}</div>
                      <div>{u.location.city}</div>
                      </span>


                      </span>

            </div>)
            }
            </div>
            }


            export default Users;