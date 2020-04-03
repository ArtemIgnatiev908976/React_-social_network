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


    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Vova'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Who are you?'},
        {id: 3, message: 'My name is ivan'},
        {id: 4, message: 'Do you love vodka?'},
        {id: 5, message: 'Yes'}
    ]


    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = messages
        .map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;