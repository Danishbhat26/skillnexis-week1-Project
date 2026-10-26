import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';
import Form from './components/Form.jsx';

const initialCards = [
  { id: 1, title: 'Reusable Header', description: 'A shared navigation area for the app.', label: 'Layout' },
  { id: 2, title: 'Reusable Card', description: 'Displays content from props.', label: 'Component' },
  { id: 3, title: 'State and Events', description: 'The counter updates when you click a button.', label: 'Interaction' }
];

export default function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState(initialCards);
  const [message, setMessage] = useState('');

  function handleAddCard(title) {
    setCards(current => [...current, {
      id: Date.now(), title, description: 'This card was added using form state.',
      label: 'New'
    }]);
    setMessage(`Added "${title}" to the cards.`);
  }

  return (
    <div className="app-shell">
      <Header title="React Component Lab" />
      <main className="page-wrap">
        <section className="intro">
          <p className="eyebrow">WEEK 1 · ASSIGNMENT 2</p>
          <h1>Reusable React Components</h1>
          <p>Practice components, props, state, and event handling with a small interactive interface.</p>
        </section>

        <section className="demo-section">
          <div className="section-heading"><div><p className="eyebrow">STATE + EVENTS</p><h2>Interactive counter</h2></div></div>
          <div className="counter-panel">
            <span className="counter-value">{count}</span>
            <div className="button-row">
              <Button onClick={() => setCount(value => value - 1)} variant="secondary">Decrease</Button>
              <Button onClick={() => setCount(0)} variant="ghost">Reset</Button>
              <Button onClick={() => setCount(value => value + 1)}>Increase</Button>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <p className="eyebrow">PROPS</p><h2>Cards rendered from data</h2>
          <div className="card-grid">
            {cards.map(card => <Card key={card.id} title={card.title} description={card.description} label={card.label} />)}
          </div>
        </section>

        <section className="demo-section">
          <p className="eyebrow">FORM + STATE</p><h2>Add a card</h2>
          <Form onSubmitTitle={handleAddCard} />
          {message && <p className="success-message" role="status">{message}</p>}
        </section>
      </main>
      <Footer />
    </div>
  );
}
