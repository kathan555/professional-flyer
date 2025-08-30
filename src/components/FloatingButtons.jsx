// components/FloatingButtons.jsx
import '../styles/indexStyles.css';

const FloatingButtons = () => {
  const openMail = () => {
    window.location.href = 'mailto:patel.kathan555@gmail.com?subject=Professional Inquiry&body=Hello Kathan,%0D%0A%0D%0AI would like to discuss a potential project opportunity with you.%0D%0A%0D%0ABest regards,';
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kathan-patel-92215213a/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/kathan555', '_blank');
  };

  return (
    <div className="floating-buttons">
      <button className="floating-btn mail-btn" onClick={openMail}>
        ✉️
        <span className="tooltip">Send Email</span>
      </button>
      <button className="floating-btn linkedin-btn" onClick={openLinkedIn}>
        💼
        <span className="tooltip">LinkedIn Profile</span>
      </button>
      <button className="floating-btn github-btn" onClick={openGitHub}>
        💻
        <span className="tooltip">GitHub Profile</span>
      </button>
    </div>
  );
};

export default FloatingButtons;