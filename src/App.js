import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import NotFound from './components/NotFound';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        <Switch>
        <Route 
        path='/pokemons/:id' 
        render={((props) => <PokemonDetails {...props} pokemon={pokemons} /> )} />
        <Route path="/about" component={About}/>
        <Route exact path="/" render={({props}) => <Pokedex {...props} pokemons={pokemons} />} />
        <Route exact path="*" component={NotFound} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;