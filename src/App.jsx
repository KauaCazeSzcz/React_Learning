import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcenpt from './components/CoreConcepts/CoreConcept.jsx';
import TabButton from './components/TabButtons/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function HandleSelect(selectedButton){
    // selectedButton => 'components', 'jsx', 'props', 'state';
    setSelectedTopic(selectedButton);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>HandleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=>HandleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>HandleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>HandleSelect('state')}>State</TabButton>
          </menu>
            <div class="tab">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
