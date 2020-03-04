import React from 'react';
import {favoriteRecipe} from '../actions';
import { connect } from 'react-redux';

class RecipeItems extends React.Component{
    constructor(){
        super();
        this.state = {
            favorited: false
        }
    }

    favorite(recipe){
        this.props.favoriteRecipe(recipe);
        this.setState({favorited: true});
    }

    render(){
        let { recipe } = this.props
        return(
            <div className="recipe-items">
                {
                    this.props.favoriteButton ?
                        this.state.favorited ?
                        <div className="star">&#9733;</div>
                        :
                        <div onClick = {() => this.favorite(recipe)} className="star">
                            &#9734;
                        </div>
                    :
                    <div></div>
                }
                
                <div className="recipe-title">
                    <a href = {recipe.href}>
                        <h4> {recipe.title} </h4>
                    </a>
                    <p>
                        {recipe.ingredients}
                    </p>
                    <img src={recipe.thumbnail} 
                        alt={recipe.title}
                        className="recipe-img"
                    />
                </div>
            </div>
        );
    }
}

export default connect(null, {favoriteRecipe})(RecipeItems);