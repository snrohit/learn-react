import React, {Component} from 'react';

import Menu from './MenuComponent';

import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Contact from './ContactComponent'

import About from './AboutComponent';
import { connect} from 'react-redux';

import { addComment } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class  Main extends Component {
  constructor(props) {
    super(props);
   
  }
 

  render() { 
      const Homepage = () => {
          return ( <Home 
            dish={this.props.dishes.filter((dish)=> dish.featured===true)[0]}
            leader={this.props.leaders.filter((leader)=>leader.featured===true)[0]}
            promotion={this.props.promotions.filter((promo)=>promo.featured===true)[0]}
          ></Home> );
      }

      const DishWithId = ({match}) => {
        return(
            <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
              addComment={this.props.addComment} />
        );
      };
       
    
    return (
      <div >
      <Header></Header>
       <Switch>
         <Route path='/home' component={Homepage}  />
         <Route exact path ='/menu' component={()=> <Menu dishes={this.props.dishes}></Menu>}></Route>
         <Route exact path='/contactus' component={Contact}/>
         <Route path='/menu/:dishId' component={DishWithId} />
         <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
         <Redirect to='/home'></Redirect>
       </Switch>
  
      <Footer></Footer>
    </div>
      );
  }
}
 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
