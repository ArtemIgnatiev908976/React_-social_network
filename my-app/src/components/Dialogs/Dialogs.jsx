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

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>

                <DialogItem name={'Dima1'} id={'1'}/>
                <DialogItem name={'Artem'} id={'2'}/>
                <DialogItem name={'Ivan'} id={'3'}/>
                <DialogItem name={'Lena'} id={'4'}/>
                <DialogItem name={'Vova'} id={'5'}/>


            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Poka'}/>
                <Message message={'Who are you&'}/>

            </div>
        </div>

    )
}

export default Dialogs;