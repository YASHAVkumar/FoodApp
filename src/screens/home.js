import React from 'react';
import {Container} from '@material-ui/core';
import Locate from '../components/screen1/locate';
import Animate from '../components/screen1/animate';
import NearbyStores from '../components/screen1/nearBy';
import TopRated from '../components/screen1/topRated';

class Home extends React.Component{
  render(){
     return(
     <>
       <Container maxWidth='xs' maxWidth="lg">
         <Locate/>
         <Animate/>
          <hr/>
         <NearbyStores/>
         <TopRated/>
       </Container>
     </>
     )
  }
}

export default Home;