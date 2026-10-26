export default function Button({ children, onClick, variant = 'primary', type = 'button' }) {
  return <button type={type} className={`button button-${variant}`} onClick={onClick}>{children}</button>;
}
