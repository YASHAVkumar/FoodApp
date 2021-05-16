import React from 'react';
import {Link} from 'react-router-dom';
import {Typography,AppBar,Container} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
class Locate extends React.Component{
   constructor(props){
      super(props);
    }

   render(){
      return(
        <Container maxWidth="xs" maxWidth="lg">
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