import React from 'react';
import {Link} from 'react-router-dom';
import {Typography,AppBar,Container} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
class Locate extends React.Component{


   render(){
      return(
        <Container maxWidth="xs">
         <AppBar color="secondary">
             <Typography variant="h4">
                <Link to='/'>
                    <HomeIcon/>
                </Link>
               Avatar Food Service
             </Typography>

         </AppBar>
        </Container>
      )
   }
}
export default Locate;