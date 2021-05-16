import React from 'react';
import {Typography,Button,Grid,Container} from '@material-ui/core';
import axios from 'axios';
import Restaurants from '../rest';


class NearByStores extends React.Component{
   constructor(props){
      super(props);
    this.state={rests:[]}
    }

getRequest=async ()=>{
  const response=await axios.get("https://foodapp69.herokuapp.com/allData")
     this.setState({rests:response.data});
}


componentDidMount=()=>{
   this.getRequest();
  }

   render(){

     let allrest=this.state.rests.map((b,index) =>{
      if(index<2)
       return (
        <Grid item xs={6} key={index}>
         <Restaurants   name={b.restName} desc={b.Desc} image={b.Image} id={b._id}/>
        </Grid>
       )
     });

     return (
     <Container mt={4}>
     <Typography variant="h5">Near By</Typography>
     <Button color="primary" style={{float:"right"}}>View All</Button>
     <Grid container spacing={4}>
       {allrest}
     </Grid>
     </Container>
     )

   }
}
export default NearByStores;
