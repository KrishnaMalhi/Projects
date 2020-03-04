import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipe } from '../actions';

class SearchRecipe extends React.Component{
    constructor(){
        super();
        this.state = {
            Ingredients: '',
            dish: ''
        }
    }
    search(){
        // let Ingredients = this.state.Ingredients;
        // let dish = this.state.dish;
        let { Ingredients , dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${Ingredients}&q=${dish}`;
        // const url = 'https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi'

        fetch(url, {
            method: 'GET'

            // method: 'POST',
            // "headers": {
            //     "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
            //     "x-rapidapi-key": "ba270fb210msh646e39d9bb12ab2p17edf9jsna5bcfdbf5207",
            //     "content-type": "text/plain",
            //     "accept": "text/plain"
            // },
            // "body": `https://www.jamieoliver.com/recipes/${Ingredients}-recipes/${dish}/`

        }).then(response => response.json())
          .then(json => {
            this.props.setRecipe(json.results)
          })
    }
    render(){
        return(
            <div>
                <Form inline className="input-form">
                    <FormGroup>
                        <FormLabel>Ingredients</FormLabel>
                        {' '}
                        <FormControl type="text" 
                            placeholder="chicken, tomatos" 
                            onChange = {event => this.setState({Ingredients: event.target.value})}    
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Dish</FormLabel>
                        {' '}
                        <FormControl type="texr" 
                            placeholder="dish" 
                            onChange = {event => this.setState({dish: event.target.value})}    
                        />
                    </FormGroup>
                    {' '}
                    <Button onClick = {()=> this.search()}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default connect(null, {setRecipe})(SearchRecipe);