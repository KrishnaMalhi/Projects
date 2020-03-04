import React from 'react';
import SearchRecipe from './components/SearchiRecipe'
import './styles/index.css';
import RecipeList from './components/RecipeList';
import { Link } from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <div>
        <ul className="nav-bar">
            <li>
                <Link to='/favorites'>Favorite Recipies</Link>
            </li>
            <li>
                <Link to='/'>HOME</Link>
            </li>
        </ul>
        <SearchRecipe />
        <RecipeList />
      </div>
    );
  }
}

export default App;
