// components/Header.jsx
import '../styles/indexStyles.css';

const Header = ({ title, description }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">{ title }</h1>
        <p className="title">{ description }</p>
      </div>
    </header>
  );
};

export default Header;