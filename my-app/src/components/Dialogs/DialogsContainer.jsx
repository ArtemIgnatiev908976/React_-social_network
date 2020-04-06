import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

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


const DialogsContainer = (props) => {


    return <StoreContext.Consumer>
        {

        (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }


            let onNewMessageChange = (body) => {

                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer;