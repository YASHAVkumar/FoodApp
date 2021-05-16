import React from 'react';
import {Container,Typography} from '@material-ui/core';

import Locate from '../components/screen1/locate';
import Restaurants from '../components/rest'
import axios from 'axios';

class Restaurant extends React.Component{
   constructor(props){
      super(props);
      this.state={name:"",rests:[]}
    }

setName =(event)=>{
 let value=event.target.value;
 this.setState({name:value});
}

func=()=>{
  console.log("mein bhi aae");
  axios.post('https://foodapp69.herokuapp.com/restSearch',{name:this.state.name})
   .then((response)=>{
           console.log(response.data);
           this.setState({rests:response.data});
    })

   }

   render(){

    let allrest=this.state.rests.map((b,index) =>{
       return (
          <Restaurants  key={b._id} name={b.restName} desc={b.Desc} image={b.Image} id={b._id}/>
        )
    });

    return(

      <>
      <Locate/>
      <Container  maxWidth="lg" style={{background:"lightgray",marginTop:"50px",height:"180px"}}>
      {
       allrest.length===0?
          <div>
            <Typography variant="h4">Enter Restaurant Name</Typography>
           <input type="text" placeholder="Enter Restaurant Name" name="item" onChange={this.setName.bind(this)}/>
           <button onClick={this.func}>Search</button>
         </div>
         :<div><h1>Your Search</h1><br/>{allrest}</div>
      }
      </Container>
      <br/>
      </>
      )
   }
}
export default Restaurant;
