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
import About from './AboutComponent';

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

      const DishWithId = ({match}) => {
        return(
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
       
    
    return (
      <div >
      <Header></Header>
       <Switch>
         <Route path='/home' component={Homepage}  />
         <Route exact path ='/menu' component={()=> <Menu dishes={this.state.dishes}></Menu>}></Route>
         <Route exact path='/contactus' component={Contact}/>
         <Route path='/menu/:dishId' component={DishWithId} />
         <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
         <Redirect to='/home'></Redirect>
       </Switch>
  
      <Footer></Footer>
    </div>
      );
  }
}
 

export default Main;
