import React, {Component} from 'react';

import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes'
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import {Switch, Route, Redirect} from 'react-router-dom'
import Contact from './ContactComponent'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class  Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
     
    };
  }


  render() { 
      const Homepage = () => {
          return ( <Home 
            dish={this.state.dishes.filter((dish)=> dish.featured===true)[0]}
            leader={this.state.leaders.filter((leader)=>leader.featured===true)[0]}
            promotion={this.state.promotions.filter((promo)=>promo.featured===true)[0]}
          ></Home> );
      }
       
    
    return (
      <div >
      <Header></Header>
       <Switch>
         <Route path='/home' component={Homepage}  />
         <Route exact path ='/menu' component={()=> <Menu dishes={this.state.dishes}></Menu>}></Route>
         <Route exact path='/contactus' component={Contact}/>
         <Redirect to='/home'></Redirect>
       </Switch>
  
      <Footer></Footer>
    </div>
      );
  }
}
 

export default Main;
