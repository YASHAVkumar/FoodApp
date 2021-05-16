import React from 'react';
import {Container,Typography} from '@material-ui/core';


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