const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {

    posts: [
        {id: 1, message: 'hi my first post', likesCount: 12},
        {id: 2, message: 'hi my second post', likesCount: 222},
        {id: 3, message: 'hi my second post222', likesCount: 22222},

    ],
    newPostText: 'Privet',
    profile: null

}


 const profileReducer =(state = initialState, action) => {
 switch(action.type){
     case ADD_POST: {
         let newPost = {
             id: 5,
             message: state.newPostText,
             likesCount: 0

         };
         return {
             ...state,
             posts: [...state.posts, newPost],
             newPostText: ''
         };


     }
     case UPDATE_NEW_POST_TEXT: {
         return {
             ...state,
             newPostText :action.newText
         };
     }

     case SET_USER_PROFILE:{
         return {...state,profile: action.profile}
     }


     default:
         return state;
 }


}

export default profileReducer;


export const appPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});