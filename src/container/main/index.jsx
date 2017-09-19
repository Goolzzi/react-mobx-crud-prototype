import React, {Component} from 'react';
import { Col } from 'reactstrap';
import { inject, observer } from 'mobx-react';
import { getUsers } from '../../service/service.js';
import UserList from '../../components/List';
import UserDetail from '../../components/Detail';
import logo from '../../logo.svg';
import './style.css';

@inject("appState") @observer
class MainPage extends Component {
    componentWillMount () {
        getUsers().then(res => {
            res.forEach((user) => {
                this.props.appState.setUsers(user);
            });
            
        })
    }
    addUser(){
        let data={};
        this.props.appState.setUsers(data);
    }
    render() {
        return (
            <div className="Main-container">
                <div className="App-header">
                    <img src={logo} alt="logo" className="App-logo"></img>
                    <h2>Data CRUD Prototype</h2>
                </div>
                <div className="App-intro">
                    <Col sm="4">
                        <UserList users={this.props.appState.userList} />
                    </Col>
                    <Col sm="8">
                        <UserDetail user={this.props.appState.selectedUser} />
                    </Col>
                </div>
            </div>
        )
    }
}
export default MainPage;