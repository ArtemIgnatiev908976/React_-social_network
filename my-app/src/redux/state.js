let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi my first post', likesCount: 12},
            {id: 2, message: 'hi my second post', likesCount: 222},
            {id: 3, message: 'hi my second post222', likesCount: 22222},

        ]


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
}


export default state;