import React, { Component } from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import UserService from '../services/UserService';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount(){
        UserService.getEmployees().then((res)=>{
            this.setState({users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>User Details</Typography>
                <Button FloatingActionButton variant="contained" color="primary" onClick={() => this.addUser()} style={addbutton}>
                    Add User
                </Button>
                <Table>
                    <TableHead> 
                        <TableRow> 
                            <TableCell align="right">FirstName</TableCell>
                            <TableCell align="right" >LastName</TableCell>
                            <TableCell align="right" >UserName</TableCell>
                            <TableCell align="right" >Age</TableCell>
                            <TableCell align="right" >Salary</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  >
                        {this.state.users.map(row => (
                            <TableRow key={row.id}>
                                {/* <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell> */}
                                <TableCell align="right">{row.firstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.userName}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                                <TableCell align="right" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25px'
}

const addbutton ={
    // position: 'left',
    marginLeft: '25px'
}

// const table = {
//     marginLeft: '25px'
// }

// const tablestyle = {
//     display: 'flex', 
//     alignItems: 'center', 
//     justifyContent: 'center',
//     width: '200%'
// }

// const tablecenter = {
//     width: 1000,
//     height: 80,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }
export default ListUserComponent;