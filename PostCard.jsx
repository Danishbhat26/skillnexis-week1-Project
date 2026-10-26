export default function PostCard({ post }) {
  const formattedDate = new Date(`${post.date}T12:00:00`).toLocaleDateString('en', {
    month: 'short', day: 'numeric', year: 'numeric'
  });
  return (
    <article className="post-card">
      <div className="post-image" aria-hidden="true">
        <span>{post.category}</span>
      </div>
      <div className="post-content">
        <p className="post-meta">{formattedDate} <span>·</span> {post.readTime}</p>
        <h2>{post.title}</h2>
        <p className="post-excerpt">{post.excerpt}</p>
        <button className="read-link" type="button" onClick={() => window.alert(`You selected: ${post.title}`)}>Read article <span aria-hidden="true">→</span></button>
      </div>
    </article>
  );
}
