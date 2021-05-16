import React from 'react';
import {Button,Container,Typography} from '@material-ui/core';
import  '@material-ui/icons';


class UserInfo extends React.Component{
  render(){
     return(
          <Container maxWidth="xs">
              <Typography variant="h4">This is one</Typography>
          </Container>
     )
  }
}

export default UserInfo;