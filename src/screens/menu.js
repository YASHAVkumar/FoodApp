import React from 'react';
import {Button,Container,Typography} from '@material-ui/core';
import  '@material-ui/icons';
import axios from 'axios';
import RestroDetails from '../components/screen2/userInfo';
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
   axios.get("http://127.0.0.1:5000/menu/"+url)
  .then((response)=>{
           //console.log(response.data);
           var obj=response.data;
         this.setState({id:url,items:obj});

    });
}

render(){

  let allItems=this.state.items.map((x,y)=>{
      return (
         <>
          <Items key={x._id} name={x.itemName} image={x.itemImage} price={x.itemPrice}  discount={x.isOnDiscount}/>
         </>
      )
   })

     return(
          <Container maxWidth="xs" maxWidth="lg">
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