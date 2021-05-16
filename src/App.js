import './App.css';
import React from 'react';
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './screens/home';
import Menu from './screens/menu';
import Searchby from './screens/itemSearch';
import Restaurant from './screens/restSearch';
import CropFreeIcon from '@material-ui/icons/CropFree';
import SearchIcon from '@material-ui/icons/Search';
import AdbIcon from '@material-ui/icons/Adb';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



function App(){

   const [value,setValue]=React.useState(0);
   return (
    <div className="App">
       <Router>
          <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/menu/:id"><Menu /></Route>
               <Route exact path="/searchItem" component={Searchby}/>
               <Route exact path="/restSearch" component={Restaurant}/>
           </Switch>

       <BottomNavigation showLabel="true" value={value} onChange={(event,newValue)=>{setValue(newValue)}}  color="primary" style={{width:"100%", bottom: 0,position:"fixed",opacity:"0.8"}}>
           <Link to="#">
                <BottomNavigationAction   label="Scan QR" icon={<CropFreeIcon />} />
           </Link>

           <Link to="/restSearch">
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
           </Link>

           <Link to="#">
                 <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
           </Link>

           <Link to="#">
                 <BottomNavigationAction label="Profile" icon={<AdbIcon/>} />
           </Link>
       </BottomNavigation>

       </Router>
    </div>
    )
}

export default App;