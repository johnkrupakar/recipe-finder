import React, { Component } from 'react';
import Axios from "axios";
import './common.css';
import './recipeSection.css';

class RecipeSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            meal_info: [],
        };
    }
    componentDidMount() {
        console.log("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.props.itemRecipe);
        if (this.state.itemRecipe === "") {
            alert("Enter the Dish!");
        } else {
            Axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.props.itemRecipe).then((resolve) => {
                console.log(resolve.data.meals);
                this.setState({ meal_info: resolve.data.meals });
            });
        }
    }

    componentDidUpdate(prevPos) {
        if (this.props.itemRecipe !== prevPos.itemRecipe) {
            if (this.props.itemRecipe === "") {
                alert("Enter a Dish!!");
            } else {
                Axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.props.itemRecipe).then((resolve) => {
                    console.log(resolve.data.meals);
                    this.setState({
                        meal_info: resolve.data.meals,
                    });
                });
            }
        }
    }

    render() {
        const { meal } = this.state;
        if (meal !== null && meal.length > 0) {
            var list = [];
            let i = 1;
            while (meal[0]["strRecipe" + i] !== "") {
                list.push(
                    <li key={i}>
                        {meal[0]["strRecipe" + i] + "-------" + meal[0]["strMeasure" + i]}
                    </li>
                );
                i++;
            }
            console.log(list);
        }

        const id = meal !== null && meal.length > 0 ? (
            <div className="recipeBody">
                <div className="recipeTitle">
                    <h1>{meal[0].strRecipe}</h1>
                </div>
                <div className="recipeInformation">
                    <img src={meal[0].strMealThumb} alt={"Your meal for" + meal[0].strRecipe} />
                    <div className="recipeData">
                        <p>
                            <i>Category of Meal:</i>{meal[0].strCategory}{" "}
                        </p>
                        <p>
                            <i>Area of Meal:</i>{meal[0].strArea}{" "}
                        </p>

                        <h2> Ingredients:</h2>
                        <ul className="ingredients">{list}</ul>
                        <h2>Recipes</h2>
                        <div className="reciepe">{meal[0].strInstructions}</div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="nullData">No Data has been received</div>
        );
        return <div>{ id}</div>
    }
}

export default RecipeSection;