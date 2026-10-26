import { useState } from 'react';

export default function Form({ onSubmitTitle }) {
  const [title, setTitle] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const cleanedTitle = title.trim();
    if (!cleanedTitle) return;
    onSubmitTitle(cleanedTitle);
    setTitle('');
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="card-title">Card title</label>
      <div className="form-row">
        <input id="card-title" value={title} onChange={event => setTitle(event.target.value)} placeholder="e.g. My new component" maxLength={60} required />
        <button className="button button-primary" type="submit">Add card</button>
      </div>
    </form>
  );
}
