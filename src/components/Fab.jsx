// components/Fab.jsx
import '../styles/indexStyles.css';

const Fab = ({ onClick }) => {
  return (
    <div id="fab-container">
      <button className="fab" onClick={onClick}>
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </div>
  );
};

export default Fab;