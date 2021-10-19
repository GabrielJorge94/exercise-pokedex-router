import React from 'react';
import '../PokemonDetails.css';

const initialState = {
  pokemonName: '',
  pokemonType: '',
  pokemonWeight: 0,
  weightUnit: '',
  pokemonSum: '',
  pokemonImg: '',
}
class PokemonDetails extends React.Component {

  constructor (){
    super();
    this.state ={
      ...initialState,
    }

    this.renderMap = this.renderMap.bind(this);
  }

  findPokemonById(givenId) {
    const {pokemon} = this.props;
    const findPokemon = pokemon.find((pokemon) => pokemon.id === givenId);


    this.setState(
      {
        pokemonName: findPokemon.name,
        pokemonType: findPokemon.type,
        pokemonWeight: findPokemon.averageWeight.value,
        weightUnit: findPokemon.averageWeight.measurementUnit,
        pokemonSum: findPokemon.summary,
        pokemonImg: findPokemon.image,
      }
      );
      return findPokemon;
  }

  renderMap() {
    const {pokemon} = this.props;
    const {id} = this.props.match.params;

    const pokemonFiltered = pokemon.find((pokemon) => pokemon.id === parseInt(id, 10));

    const {foundAt} = pokemonFiltered;

    return foundAt.map(({location, map}) => (
      <div key={location}>
              <img src={map} alt={`${pokemon.name} location`} />
              <p>
                <em>{location}</em>
              </p>
            </div>
    ))
  }

  componentDidMount() {
    const {id} = this.props.match.params;

    this.findPokemonById(parseInt(id, 10));
  }

  render() {
    const {pokemonName, pokemonType, pokemonWeight, weightUnit, pokemonSum, pokemonImg} = this.state
    return (
      <div className="pokedex">
        <div className="pokemon">
          <div>
          <p>{pokemonName}</p>
          <p>{pokemonType}</p>
          <p>
            Average weight: {`${pokemonWeight} ${weightUnit}`}
          </p>
          </div>
        <img src={pokemonImg} alt={`${pokemonName} sprite`} />
        </div>
        <div>
          <h1>Summary</h1>
          <p>{pokemonSum}</p>
        </div>
        {this.renderMap()}
      </div>);
  }
}
 
export default PokemonDetails;