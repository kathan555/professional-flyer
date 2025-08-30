// components/Skills.jsx
import '../styles/indexStyles.css';

const Skills = () => {
  return (
	<section id="skills" className="section">
		<h2 className="section-title">Technical Expertise</h2>
		<div className="skills-grid">
			<div className="skill-category">
				<h4>Programming Languages</h4>
				<div className="skill-tags">
					<span className="skill-tag">C#</span>
					<span className="skill-tag">JavaScript</span>
					<span className="skill-tag">jQuery</span>
				</div>
			</div>
			<div className="skill-category">
				<h4>Frameworks & Technologies</h4>
				<div className="skill-tags">
					<span className="skill-tag">ASP.NET Core</span>
					<span className="skill-tag">Blazor</span>
					<span className="skill-tag">WPF</span>
				</div>
			</div>
			<div className="skill-category">
				<h4>Databases</h4>
				<div className="skill-tags">
					<span className="skill-tag">MS-SQL</span>
					<span className="skill-tag">MySQL</span>
					<span className="skill-tag">SQLLight</span>
				</div>
			</div>
			<div className="skill-category">
				<h4>Development Tools</h4>
				<div className="skill-tags">
					<span className="skill-tag">GitHub</span>
					<span className="skill-tag">Telerik</span>
					<span className="skill-tag">SciChart</span>
					<span className="skill-tag">Syncfusion</span>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Skills;