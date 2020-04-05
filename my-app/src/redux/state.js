import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi my first post', likesCount: 12},
                {id: 2, message: 'hi my second post', likesCount: 222},
                {id: 3, message: 'hi my second post222', likesCount: 22222},

            ],
            newPostText: 'Privet',

        },
        dialogsPage: {
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


        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State is change');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

     this._state.profilePage =  profileReducer(this._state.profilePage, action);
     this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
     this._state.sidebar =  sidebarReducer(this._state.sidebar, action);

     this._callSubscriber(this._state);


        // if (action.type === 'ADD-POST') {
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        //
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = (action.newText);
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber(this._state);
        // } else if (action.type === SEND_MESSAGE) {
        //
        //    let body = this._state.dialogsPage.newMessageBody ;
        //     this._state.dialogsPage.newMessageBody ='';
        //     this._state.dialogsPage.messages.push({id: 6, message: body});
        //     this._callSubscriber(this._state);
        // }

    },

}









export default store;
window.store = store;