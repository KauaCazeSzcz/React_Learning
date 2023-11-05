import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data.js';

const descripitions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(Max){
  return Math.floor(Math.random()*(Max+1));
}

function Header(){
  let description = descripitions[genRandomInt(2)];
  return(
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcenpt({image, title, description}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcenpt {...CORE_CONCEPTS[0]} />
          <CoreConcenpt {...CORE_CONCEPTS[1]} />
          <CoreConcenpt {...CORE_CONCEPTS[2]} />
          <CoreConcenpt {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
