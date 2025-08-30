// components/Projects.jsx
import '../styles/indexStyles.css';

const Projects = () => {
  return (
	<section id="projects" className="section">
		<h2 className="section-title">Featured Projects</h2>
		<div className="project-grid">
			<div className="project-card">
				<div className="project-title">Guard Resource One</div>
				<div className="project-duration">January 2025 – Present</div>
				<div className="project-description">Multi-tenant web application for security management with subscription-based access.</div>
				<ul className="project-features">
					<li>Organisation and company management system</li>
					<li>Guard profile creation and management</li>
					<li>Scalable subscription-based functionality</li>
				</ul>
				<div className="project-tech"><strong>Tech Stack:</strong> Blazor Server, ABPIO, Syncfusion</div>
			</div>

			<div className="project-card">
				<div className="project-title">King & Shaxson Trading Platform</div>
				<div className="project-duration">February 2024 – Present</div>
				<div className="project-description">High-performance desktop trading application optimised for large datasets.</div>
				<ul className="project-features">
					<li>Real-time trading at current market prices</li>
					<li>Live match, auction, and matrix trading sessions</li>
					<li>Custom kernel for reliable trade execution</li>
				</ul>
				<div className="project-tech"><strong>Tech Stack:</strong> WPF, DevExpress, Custom Trading Kernel</div>
			</div>

			<div className="project-card">
				<div className="project-title">Brook Furniture Rental</div>
				<div className="project-duration">April 2023 – January 2024</div>
				<div className="project-description">Complete e-commerce platform for furniture rental services.</div>
				<ul className="project-features">
					<li>Lease creation and management system</li>
					<li>Secure online payment processing</li>
					<li>Product browsing and purchasing capabilities</li>
				</ul>
				<div className="project-tech"><strong>Tech Stack:</strong> .NET Framework 4.6, React.js, C#, MS-SQL</div>
			</div>

			<div className="project-card">
				<div className="project-title">Finsys Analytics Platform</div>
				<div className="project-duration">March 2020 – February 2023</div>
				<div className="project-description">Finance-domain application for stock market analysis and predictive insights.</div>
				<ul className="project-features">
					<li>Real-time data visualisation</li>
					<li>Predictive analytics and trend analysis</li>
					<li>Cross-platform desktop and web compatibility</li>
				</ul>
				<div className="project-tech"><strong>Tech Stack:</strong> .NET Core 6, Blazor, WPF, SciChart, MySQL</div>
			</div>

			<div className="project-card">
				<div className="project-title">Triage Healthcare System</div>
				<div className="project-duration">March 2018 – February 2020</div>
				<div className="project-description">Healthcare product managing patient health records and medication data in a critical care environment.</div>
				<ul className="project-features">
					<li>Secure storage and retrieval of patient records</li>
					<li>Medication tracking and management system</li>
					<li>Data accuracy and usability in healthcare environment</li>
				</ul>
				<div className="project-tech"><strong>Tech Stack:</strong> WPF, C#, MS-SQL, XAML, LINQ, LEAD Tools, Telerik</div>
			</div>
		</div>
	</section>
  );
};

export default Projects;