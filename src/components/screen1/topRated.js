import React from 'react';
import {Typography,Box,Button,Grid,Card,CardContent} from '@material-ui/core';
import randomColor from 'randomcolor';

class TopRated extends React.Component{
   constructor(props){
      super(props);
    }

   render(){
      return(
         <Box component="h1" mt={5}>
                      <Typography variant="h5">Top Rated</Typography>
                     <Button color="primary" style={{float:"right"}}>View All</Button>

                       <Grid direction="row" container spacing={2}>
                          <Grid item xs={6} style={{background:randomColor()}}>
                             <Card>
                                 <CardContent>
                                   <Typography
                                    className={"MuiTypography--heading"}
                                    variant={"h6"}
                                    gutterBottom
                                   >
                                         Nature Around Us
                                   </Typography>

                                   <Typography className={"MuiTypography --subheading"} variant={"h6"} >
                                     ye content ha aur
                                   </Typography>
                                 </CardContent>
                             </Card>
                          </Grid>
                            <Grid item xs={6} style={{background:randomColor()}}>
                              <Card>
                                 <CardContent>
                                   <Typography
                                    className={"MuiTypography--heading"}
                                    variant={"h6"}
                                    gutterBottom
                                   >
                                         Nature is bloom
                                   </Typography>

                                   <Typography className={"MuiTypography --subheading"} variant={"h6"}>
                                     ye content ha aur
                                   </Typography>
                                 </CardContent>
                             </Card>
                            </Grid>
                       </Grid>


                  </Box>

      )
   }
}
export default TopRated;