import { useEffect, useMemo, useState } from 'react';
import PostCard from './components/PostCard.jsx';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/posts.json')
      .then(response => {
        if (!response.ok) throw new Error('Could not load posts.');
        return response.json();
      })
      .then(data => setPosts(data))
      .catch(() => setError('We could not load the blog posts. Please restart the development server and try again.'))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(
    () => ['All', ...new Set(posts.map(post => post.category))],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return posts.filter(post => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesSearch = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [posts, search, category]);

  return (
    <div className="blog-app">
      <header className="blog-header">
        <a href="#top" className="wordmark">fieldnotes<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#articles">Articles</a><a href="#about">About</a></nav>
      </header>
      <main>
        <section className="blog-hero">
          <p className="eyebrow">IDEAS FOR CURIOUS BUILDERS</p>
          <h1>Notes on making<br /><em>things for the web.</em></h1>
          <p>Practical thoughts on frontend development, code, and thoughtful design.</p>
          <a className="hero-link" href="#articles">Explore the articles ↓</a>
        </section>

        <section className="articles-section" id="articles">
          <div className="articles-heading">
            <div><p className="eyebrow">THE JOURNAL</p><h2>Latest articles</h2></div>
            <span className="result-count">{filteredPosts.length} articles</span>
          </div>
          <div className="controls">
            <label className="search-box"><span aria-hidden="true">⌕</span><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search articles..." aria-label="Search articles" /></label>
            <label className="filter-label">Category
              <select value={category} onChange={event => setCategory(event.target.value)} aria-label="Filter by category">
                {categories.map(item => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
          </div>

          {loading ? <p className="status-message">Loading articles…</p> : error ? <p className="status-message error">{error}</p> :
            filteredPosts.length ? <div className="post-grid">{filteredPosts.map(post => <PostCard key={post.id} post={post} />)}</div> :
            <div className="empty-state"><h3>No articles found</h3><p>Try another search term or choose a different category.</p><button onClick={() => { setSearch(''); setCategory('All'); }}>Clear filters</button></div>
          }
        </section>

        <section className="about-strip" id="about"><p className="eyebrow">ABOUT FIELDNOTES</p><h2>A learning project, built with React.</h2><p>This mini-project loads article data from a local JSON file and demonstrates dynamic rendering, search, and category filtering.</p></section>
      </main>
      <footer className="blog-footer"><a href="#top" className="wordmark">fieldnotes<span>.</span></a><p>Week 1 React Blog UI practice project.</p></footer>
    </div>
  );
}
