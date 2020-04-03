import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {

    return (

        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {


    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Vova'}
    ]

    let MessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Who are you?'},
        {id: 3, message: 'My name is ivan'},
        {id: 4, message: 'Do you love vodka?'},
        {id: 5, message: 'Yes'}
    ]

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={MessagesData[0].message}/>
                <Message message={MessagesData[1].message}/>
                <Message message={MessagesData[2].message}/>
                <Message message={MessagesData[3].message}/>
                <Message message={MessagesData[4].message}/>

            </div>
        </div>

    )
}

export default Dialogs;