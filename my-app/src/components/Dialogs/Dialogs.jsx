import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog+' '+s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Dima1
                </div>
                <div className={s.dialog}>
                    Dima2
                </div>
                <div className={s.dialog}>
                    Dima3
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>who is you</div>
                <div className={s.message}>yo</div>

            </div>
        </div>

    )
}

export default Dialogs;