// components/Experience.jsx
import '../styles/indexStyles.css';

const Experience = () => {
  return (
	<section id="experience" className="section">
		<h2 className="section-title">Professional Experience</h2>
		
		<div className="experience-item">
			<div className="job-title">Technical Lead</div>
			<div className="company-info"><a href="https://digiptechnologies.com/" className="company-name">Digip Technologies</a> | March 2024 – Present</div>
			<ul className="achievements">
				<li><strong>Leadership:</strong> Lead client discussions to gather requirements and align project goals</li>
				<li><strong>Project Management:</strong> Plan and prioritise tasks, ensuring high-priority deliverables meet timelines</li>
				<li><strong>Team Coordination:</strong> Coordinate cross-functional efforts for efficient target achievement</li>
			</ul>
		</div>

		<div className="experience-item">
			<div className="job-title">Senior Engineer (SE-1)</div>
			<div className="company-info"><a href="https://www.parkar.in/" className="company-name">Parkar Digital</a> | February 2023 – March 2024</div>
			<ul className="achievements">
				<li><strong>Application Development:</strong> Designed secure, high-performance applications using .NET technologies</li>
				<li><strong>Stakeholder Collaboration:</strong> Daily stand-ups to refine requirements and deliver tailored solutions</li>
				<li><strong>Mentoring:</strong> Guided junior developers to enhance team problem-solving capabilities</li>
			</ul>
		</div>

		<div className="experience-item">
			<div className="job-title">Senior Software Developer</div>
			<div className="company-info"><a href="https://digiptechnologies.com/" className="company-name">Digip Technologies</a> | March 2018 – February 2023</div>
			<ul className="achievements">
				<li><strong>Code Quality:</strong> Conducted code reviews ensuring adherence to best practices</li>
				<li><strong>Innovation:</strong> Designed reusable LINQ expression libraries for optimised data filtering</li>
				<li><strong>System Development:</strong> Built script-based trading system and responsive user interfaces</li>
				<li><strong>API Development:</strong> Created RESTful APIs using ASP.NET Core for efficient data exchange</li>
			</ul>
		</div>
	</section>
  );
};

export default Experience;