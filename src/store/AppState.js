import {observable} from 'mobx';

class AppState {
    @observable userList=[];
    @observable selectedUser = {};

    setUsers(data){
        this.userList.push(data);
    }
    setCurrentUser(user, index) {
        this.selectedUser = {
            index,
            ...user
        }
    }
    updateUser(user, index) {
        this.userList[index] = {
            ...user
        }
    }
    removeUser(user, index) {
        this.userList.splice(index, 1);
    }
}
export default AppState;