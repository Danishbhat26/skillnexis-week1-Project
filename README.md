# Fieldnotes — React Blog UI

A responsive blog interface built with React. Posts are loaded from `public/posts.json` and rendered as cards.

## Features
- Fetches local JSON data on page load
- Search by title, excerpt, or category
- Filter by category
- Responsive article-card layout
- Loading, error, and no-results states

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite. The sample article content is for demonstration; edit `public/posts.json` to add your own posts.

## Note
The card background artwork is created with CSS gradients, so the interface does not depend on external image links.
