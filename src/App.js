import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon'
import Pokedex from './Pokedex';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter> 
        <Link to='/pokemons/id'>More info</Link>
        <Switch>
        <Route path='/pokemons/:id' render={((props) => <PokemonDetails {...props} pokemon={pokemons} /> )} />
        <Route path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;