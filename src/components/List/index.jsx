import React, {Component} from 'react';
import { inject, observer} from 'mobx-react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './style.css';

@inject("appState") @observer
class UserList extends Component{
    selectedUser ( user, index ) {
        this.props.appState.setCurrentUser(user, index);
    }
    addUser () {
        let user = {
            name: 'New User',
            age: '',
            gender: ''
        }
        this.props.appState.setUsers(user);
        this.props.appState.setCurrentUser(user);
    }
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem tag="button" onClick={() => this.addUser()} active action>Add New User</ListGroupItem>

                    {
                        this.props.users.map((user, index) => {
                            return(
                                <ListGroupItem onClick={() => this.selectedUser(user, index)} key={`${index}user`}>{user.name}</ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
            </div>
            
        )
    }
}
export default UserList;