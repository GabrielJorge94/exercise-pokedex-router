import React from 'react';
import '../about.css'

class About extends React.Component {
  render() { 
    return (
    <div className="about-cointainer">
      <div className="about-text">
      <p> This application simulates a Pokédex, a digital encliclopedia containing all Pokémons </p>
      <p> One can filter Pokémons by type, and see more details for each one of them </p>
      </div>
      <img src="https://cdn2.bulbagarden.net/upload/8/86/Gen_I_Pok%C3%A9dex.png" alt="Pokedex" />
    </div>
    );
  }
}
 
export default About;
