import React from 'react';
import {Typography} from '@material-ui/core';
import Locate from '../components/screen1/locate';
import axios from 'axios';
import  Items from '../components/screen2/mainContent';

class Searchby extends React.Component{

   constructor(props){
      super(props);
      this.state={items:[]}
    }

   componentDidMount=()=>{
      var url=window.location.search.slice(1);
       url=url.replace(/=/g,'":"');
       url=url.replace(/&/g,'","');
       url='{"'+url+'"}';

        var obj=JSON.parse(url);

         axios.post("https://foodapp69.herokuapp.com/searchItem",obj)
             .then((response)=>{
              this.setState({items:response.data})
             })
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
      <>
          <Locate/>
             <div style={{marginTop:"40px"}}>
               {this.state.items.length===0?<Typography variant="h2" style={{marginTop:"50%"}}>No item found!!</Typography>:allItems}
              </div>
      </>
      )
   }
}
export default Searchby;
