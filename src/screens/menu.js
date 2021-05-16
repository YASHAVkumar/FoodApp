import React from 'react';
import {Container,Typography} from '@material-ui/core';
import  '@material-ui/icons';
import axios from 'axios';

import  ItemSearch from '../components/screen2/search';
import  Items from '../components/screen2/mainContent';
import  Locate from '../components/screen1/locate';

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state={id:"",items:[]};
  }


componentDidMount=()=>{
  var url=window.location.pathname.slice(6);
   console.log(url);
   axios.get("https://foodapp69.herokuapp.com/menu/"+url)
  .then((response)=>{
           //console.log(response.data);
           var obj=response.data;
         this.setState({id:url,items:obj});

    });
}

render(){

  let allItems=this.state.items.map((x,y)=>{
      return (
         <div key={y}>
          <Items key={x._id} name={x.itemName} image={x.itemImage} price={x.itemPrice}  discount={x.isOnDiscount}/>
         </div>
      )
   })

     return(
          <Container  maxWidth="lg">
                <Locate/>
                <ItemSearch />
             <div>
                <Typography variant="h4" color="primary" className={"MuiTypography--heading"}>Our Menu Card</Typography>
                 {allItems}
             </div>
          </Container>
     )
  }
}

export default Menu;
