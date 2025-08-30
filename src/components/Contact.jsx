// components/Contact.jsx
import '../styles/indexStyles.css';

const Contact = () => {
  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/assets/Kathanpatelcv.pdf';
    link.download = 'Kathan_Patel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGitHub = () => {
    window.open('https://github.com/kathan555', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kathan-patel-92215213a/', '_blank');
  };

  return (
    <section id="contact" className="cta-section">
      <h2 className="cta-title">Ready to Transform Your Ideas into Reality?</h2>
      <p className="cta-text">Let's discuss how I can help you build exceptional .NET solutions that drive your business forward.</p>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={openGitHub} className="github-link" style={{ cursor: "pointer" }}>
          View My Work on GitHub →
        </button>
        <button onClick={openLinkedIn} className="github-link" style={{ background: "#0077b5", cursor: "pointer" }}>
          Connect on LinkedIn →
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={downloadResume} className="github-link" style={{ background: "#27ae60", border: "none", cursor: "pointer" }}>
          📄 Download Resume
        </button>
      </div>
    </section>
  );
};

export default Contact;