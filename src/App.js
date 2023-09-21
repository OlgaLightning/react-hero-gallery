import './styles/App.css';
import Hero from './components/Hero';
import data from './Data.json';

function App() {
  const heroCard = data.map((hero, index) =>
    <Hero url={hero.url} name={hero.name} universe={hero.universe} alterego={hero.alterego} occupation={hero.occupation} friends={hero.friends} superpowers={hero.superpowers} key={index} />
  );
  return (
    <div className="App">
      <h1 className='header'>Супергерои</h1>
      <div className='app-layout'>{heroCard}</div>
    </div>
  );
}

export default App;
