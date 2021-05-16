import React from 'react';
import {FormControl,Button,Input,Container} from '@material-ui/core';
import {Link} from 'react-router-dom';

class Search extends React.Component{
   constructor(props){
      super(props);
    }

   render(){
      return(
      <>
      <Container style={{background:"lightgray",marginTop:"45px"}}>
         <form action="/searchItem">
           <input type="text" placeholder="Enter item" name="item" /><button>Search</button>
         </form>
      </Container>
      <br/>
      </>
      )
   }
}
export default Search;