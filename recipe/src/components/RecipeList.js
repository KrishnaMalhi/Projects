import React from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems'
// import { Link } from 'react-router-dom';

class RecipeList extends React.Component{
    render(){
        return(
            <div>
                
                <h3>Recipies: </h3>
                {
                    this.props.recipe.map((recipe, index) =>{
                        return(
                            <RecipeItems key={index} recipe={recipe} favoriteButton={true}/>
                        )

                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, null)(RecipeList);