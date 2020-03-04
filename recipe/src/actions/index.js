export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPES = 'FAVORITE_RECIPES'

export function setRecipe(items){
    const action = {
        type: SET_RECIPES,
        items
    }
    return action;
}

export function favoriteRecipe(recipe){
    const action =  {
        type: FAVORITE_RECIPES,
        recipe
    }
    return action;
}