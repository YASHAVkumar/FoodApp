import React from 'react';
import {Card,CardContent,Typography,Divider,CardMedia} from '@material-ui/core';


class MainContent extends React.Component{

   render(){
         const styles={
           link:{
              textDecoration:"none"
            },
           card:{
            height:"100%",
            marginTop:"15px"
           },
           media:{ height:0,paddingTop:'50.25%',marginTop:'10'},
           content:{
             height:"40px",
             overflow:"hidden",
             textOverflow:"ellipsis"
           }
           }

      //console.log(this.props.discount);

      return(
       <>
        <Card style={styles.card}>
               <CardContent style={styles.content} >
                  <Typography variant="h5" className={"MuiTypography--heading"}>{this.props.name} </Typography>
                  <Divider  light/>
               </CardContent>
               <CardMedia image={this.props.image} style={styles.media}/>
               <CardContent >
                 <Typography variant="h6">Rs {this.props.price}   <span style={{float:"right"}}>{this.props.discount?<span>On Discount</span>:""}</span></Typography>

               </CardContent>
        </Card>
       </>
      )
   }
}
export default MainContent;