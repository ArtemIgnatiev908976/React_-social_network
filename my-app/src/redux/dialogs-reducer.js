const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Vova'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Who are you?'},
        {id: 3, message: 'My name is ivan'},
        {id: 4, message: 'Do you love vodka?'},
        {id: 5, message: 'Yes'}
    ],

    newMessageBody: ""


}


const dialogsReducer = (state = initialState, action) => {




    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
          return {

                ...state,
                newMessageBody: action.body
            }



        case   SEND_MESSAGE:
            let body = state.newMessageBody;
           return {

                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };



        default:
            return state;
    }

}


export const sendMessageCreator = () => ({

    type: SEND_MESSAGE

})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})


export default dialogsReducer;