export default function Header({ title = 'React Practice' }) {
  return <header className="topbar"><a className="brand" href="#top">{title}<span>.</span></a><span className="topbar-note">Learning by building</span></header>;
}
