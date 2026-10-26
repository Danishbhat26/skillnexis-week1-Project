export default function Card({ title, description, label = 'Practice' }) {
  return <article className="content-card"><span className="card-label">{label}</span><h3>{title}</h3><p>{description}</p></article>;
}
