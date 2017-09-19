import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { inject, observer} from 'mobx-react';
import { computed } from 'mobx';
import './style.css';

@inject("appState") @observer
class UserDetail extends Component{

    saveUser() {
        this.props.appState.updateUser(this.user, this.props.user.index);
    }
    removeUser() {
        this.props.appState.removeUser(this.user, this.props.user.index);
    }
    @computed get user() {
        if (!this.props.user){
            return {};
        }else {
            return this.props.user;
        }
    }
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        onChange={(event) => this.user.name = event.target.value}
                        value={ this.user.name || '' }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                        type="text"
                        name="age"
                        id="age"
                        placeholder="Enter your age"
                        onChange={(event) => this.user.age = event.target.value}
                        value={this.user.age || ''}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="gender-selector">Gender</Label>
                    <Input
                        type="select"
                        name="gender-selector"
                        id="gender-selector"
                        placeholder="Select Gender"
                        onChange={(event) => this.user.gender = event.target.value}
                        value={this.user.gender || ''}
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </Input>
                </FormGroup>
                <Button onClick={() => this.saveUser()}>Save</Button>
                <Button color="danger" onClick={() => this.removeUser()}>Remove this User</Button>
            </Form>
        )
    }
}
export default UserDetail;