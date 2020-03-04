import React from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems';
// import { Link } from 'react-router-dom';


class FavoriteRecipeList extends React.Component{
    render(){
        return(
            <div>
                
                <h3>favorite Recipies: </h3>
                {
                    this.props.favoriteRecipe.map((recipe, index)=>{
                        return(
                            <RecipeItems key={index} recipe={recipe}  favoriteButton={false}/>
                        )
                    })
                }
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        favoriteRecipe: state.favoriteRecipe
    }
}
export default connect(mapStateToProps, null)(FavoriteRecipeList);