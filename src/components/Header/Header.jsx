import reactImg from '../../assets/react-core-concepts.png';

const descripitions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(Max){
  return Math.floor(Math.random()*(Max+1));
}

export default function Header(){
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