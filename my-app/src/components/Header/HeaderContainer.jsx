import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,

            headers: {
                "API-KEY": "8e41a935-eb17-4c31-acf4-ac8609de66e1"
            }
        })
            .then(response => {
                if (response.data.result === 0){
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header{...this.props}/>
    }
}

const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,


});

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);
