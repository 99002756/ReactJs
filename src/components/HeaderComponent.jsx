import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const style = {
    flexGrow: 1
}

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        
    }
    
    render() {
        return (
            <div>
                <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={style}>
                       User Management
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default HeaderComponent;