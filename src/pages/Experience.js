import React from "react";
import "../styles/Experience.css";
 function  Experience (){
    return (
        <div className="experience">
            <h2>Experience</h2>
            <div className="job">
                <h3>Software Developer</h3>
                <p className="company">Sir Brandon company.com</p>
                <p className="date">January 2024 - Present</p>
                <ul className="responsibilities">
                    <li>Developed and maintained web applications using React.js.</li>
                    <li>Collaborated with cross-functional teams to design and implement new features.</li>
                    <li>Participated in code reviews to ensure code quality and maintainability.</li>
                    
                </ul>
            </div>
            <div className="job">
                <h3>Intern</h3>
                <p className="company">XYZ Tech Ltd.</p>
                <p className="date">August 2024</p>
                <ul className="responsibilities">
                    <li>Assisted in the development and testing of software products.</li>
                    <li>Worked closely with senior developers to learn best practices in software development.</li>
                    <li>Contributed to documentation and technical specifications.</li>
                    <li>Be solving peoples problem</li>
                    
                </ul>
            </div>
        
        </div>
    );
}

export default Experience;
