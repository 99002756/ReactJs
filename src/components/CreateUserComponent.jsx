import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            userName: '',
            password:'',
            firstName: '',
            lastName: '',
            age: '',
            salary: ''

        }

        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeSalary = this.changeSalary.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

   
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }
        else{
        UserService.getUserById(this.state.id).then((res) => {
            let user = res.data;
            this.setState({
                userName: user.userName,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                salary: user.salary
            });
        });
    }
    }

    changeUserName = (event) => {
        this.setState({userName: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }

    changeFirstName = (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastName = (event) => {
        this.setState({lastName: event.target.value})
    }

    changeAge = (event) => {
        this.setState({age: event.target.value})
    }

    changeSalary = (event) => {
        this.setState({salary: event.target.value})
    }

    
    saveUser = (e) => {
            e.preventDefault();
            let user = {userName:this.state.userName, password:this.state.password, firstName: this.state.firstName,lastName: this.state.lastName,age: this.state.age,salary: this.state.salary};
            console.log('user =>' + JSON.stringify(user));
            if(this.state.id === '_add'){
                UserService.createUser(user).then(res =>{
                this.props.history.push('/employees');
                });
            }
            else{
                UserService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/employees');
                });
            }
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <Typography variant="h4" style={style}>Add User</Typography>
        }
        else{
            return <Typography variant="h4" style={style}>Update User</Typography>
        }
    }

    render() {
        return (
            <div>
                {/* <Typography variant="h4" style={style}>Add User</Typography> */}
                {
                    this.getTitle()
                }
                <form style={formContainer}>

                    <TextField placeholder="username" fullWidth margin="normal" name="username" value={this.state.userName} onChange={this.changeUserName}/>

                    <TextField type="password" placeholder="password" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.changePassword}/>

                    <TextField placeholder="First Name" fullWidth margin="normal" name="firstName" value={this.state.firstName} onChange={this.changeFirstName}/>

                    <TextField placeholder="Last name" fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.changeLastName}/>

                    <TextField type="number" placeholder="age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.changeAge}/>

                    <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.changeSalary}/>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'


}
export default CreateUserComponent;