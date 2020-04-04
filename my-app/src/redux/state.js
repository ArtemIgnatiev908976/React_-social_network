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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State is change');
    },

    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0

        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {


        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}


export default store;
window.store = store;