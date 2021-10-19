import React from 'react';

const initialState = {
  pokemonName: '',
  pokemonType: '',
  pokemonWeight: 0,
  weightUnit: '',
  pokemonSum: '',
}
class PokemonDetails extends React.Component {

  constructor (){
    super();
    this.state ={
      ...initialState,
    }

    this.renderMap = this.renderMap.bind(this);
  }

  findPokemonById() {
    const {pokemon} = this.props;
    const {id} = this.props.match.params;
        
    const pokemonFiltered = pokemon.find((pokemon) => pokemon.id === parseInt(id, 10));

    this.setState(
      {
        pokemonName: pokemonFiltered.name,
        pokemonType: pokemonFiltered.type,
        pokemonWeight: pokemonFiltered.averageWeight.value,
        weightUnit: pokemonFiltered.averageWeight.measurementUnit,
        pokemonSum: pokemonFiltered.summary,
      }
      );
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

  componentDidMount(){
  this.findPokemonById();
  }
  render() {
    const {pokemonName, pokemonType, pokemonWeight, weightUnit, pokemonSum} = this.state
  return <div>
    <p>
      {pokemonName}
    </p>
    <p>
      {pokemonType}
    </p>
    <p>
      {pokemonWeight} 
      {weightUnit}      
    </p>
    <p>
      {pokemonSum}
    </p>
    {this.renderMap()}
    </div>;
  }
}
 
export default PokemonDetails;