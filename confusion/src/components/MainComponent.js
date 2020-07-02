import React, {Component} from 'react';

import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes'
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'


class  Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      dishes: DISHES,
      selectedDish: null
    };
  }

  onSelectedDish(dishId) {
    this.setState({
        selectedDish: dishId
    })
}
  render() { 
    return (
      <div >
      <Header></Header>
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onSelectedDish(dishId)}/>
      <Dishdetail dish={this.state.dishes.filter ((dish)=> dish.id=== this.state.selectedDish)[0]}></Dishdetail>
      <Footer></Footer>
    </div>
      );
  }
}
 

export default Main;
