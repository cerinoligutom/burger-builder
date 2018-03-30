import React, { Component } from 'react';

import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // Can also use this syntax below:
  // constructor(props) {
  //   super(props);
  //   this.state = {...props};
  // }
  // but we'll use this one below because it's shorter
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;
