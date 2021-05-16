import React from 'react';
import {Container} from '@material-ui/core';


class Search extends React.Component{

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