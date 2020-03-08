import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Favorable Tech</span></h1>
         </div>

         <div className="nine columns main-col">
         <p class="lead center">I enjoy tinkering with many languages and tech, however these have been the most common ones that i currently utilize.</p>
         </div>
         
         <ul class="bgrid-thirds s-bgrid-thirds cf">
         <div class="columns feature-item"><img class="skill" alt="React Js" src="images/skills/react.jpg"/><h5>React Js</h5><p>I've had a wonderful time creating many applications on React Js. It lets me create modular code that i can insert on any project should i need to. This site was drafted in React as well.</p></div>
         <div class="columns feature-item"><img class="skill" alt="Node JS" src="images/skills/node.jpg"/><h5>Node JS</h5><p>Node.js is primarily what I've used to for my server scripts due to its single-threaded nature. It has helped me to create back end api services and traditional websites.</p></div>
         <div class="columns feature-item"><img class="skill" alt="Java" src="images/skills/java.jpg"/><h5>Javascript</h5><p>Javascript was one of the first languages that had me hooked into making functions and creating applications, and it is one of my main languages for most of my work thus far.</p></div>
         <div class="columns feature-item"><img class="skill" alt="MongoDB" src="images/skills/mongo.jpg"/><h5>MongoDB</h5><p>I have found familiarity with MongoDB and its use of JSON style documents to parse data effectively. I utilize it for majority of my works as well.</p></div>
         <div class="columns feature-item"><img class="skill" alt="Git" src="images/skills/git.jpg"/><h5>Git</h5><p>I have utilized Git for all of my code as it integrates version control, allows me to collaborate with my teams on projects, and to organize my inspired ideas.</p></div>
         <div class="columns feature-item"><img class="skill" alt="Heroku" src="images/skills/heroku.jpg"/><h5>Heroku</h5><p>Heroku houses a few of my projects as it's unpaid package still supports Git integreation, free site hosting, and supports Node.js, Java and Python. </p></div>
                
         </ul>

            {/* <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}

            
					</ul>
				</div> */}




      </div>
   </section>
    );
  }
}

export default Resume;
