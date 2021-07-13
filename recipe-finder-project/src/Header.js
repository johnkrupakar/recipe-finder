
import React, { Component } from 'react';
import RecipeSection from './RecipeSection';
import './common.css';
import './header';

class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            search: false,
            itemRecipe: ""
        };
    }
    getDishRecipe = () => {
    var dish = document.getElementById("dish-name").value;
    this.setState({
        search: true,
        itemRecipe: dish
    })
};


render(){
    return (
        <div className="header" >
            <h1 className="mealHeading">Recipe Finder</h1>
            <form className="search">
                <input type="text" id="dish-name" placeholder="Enter the name of the dish " />
                <input type="submit" value="Get ingredient" onClick={this.getDishRecipe} />
            </form>

            <div>
                {this.state.search ? (
                    <Recipe itemRecipe={this.state.itemRecipe}/>
                ):(<h2 className="dishText">Type a Dish Name to Search for it's ingredients</h2>)}
            </div>
        </div>
    );
};

}


export default Header;