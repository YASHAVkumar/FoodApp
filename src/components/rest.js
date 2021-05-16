import React from 'react';
import {Link} from 'react-router-dom';
import {Card,CardContent,Typography,Divider,CardMedia} from '@material-ui/core';

class Restaurants extends React.Component
{
  render(){
     const styles={
     link:{
        textDecoration:"none"
      },
     card:{
      height:"100%"
     },
     media:{ height:0,paddingTop:'56.25%',marginTop:'10'},
     content:{
       height:"40px",
       overflow:"hidden",
       textOverflow:"ellipsis"
     }
     }
     var url="menu/"+this.props.id;
    return(
     <Link to={url} style={styles.link}>
      <Card style={styles.card}>
       <CardContent style={styles.content} >
          <Typography variant="h5">{this.props.name}</Typography>
          <Divider  light/>
       </CardContent>
       <CardMedia image={this.props.image} style={styles.media}/>
       <CardContent >
         <Typography variant="caption">{this.props.desc}</Typography>
       </CardContent>
      </Card>
     </Link>

    )

  }
}
export default Restaurants;