import React from 'react';
import { Skills } from '../components/skills';
import { Projects, Projects2 } from '../components/projects';


function HomePage() {
    const data = Skills;
    const data1 = Projects;
    const data2 = Projects2;
    return (
        <>

            <div class= "container">
                <div class= "header">
                    <h2>About Me </h2> 
                    Hello! I'm Audrey Flanders. I am a dedicated computer science student with a strong passion for creative problem-solving.  
                    I thrive on tackling complex challenges. I am committed to learning and hope to contribute my 
                    skills to projects that push the boundaries of what technology can achieve. Outside of my studies, 
                    I find joy in reading, painting, creative writing, and spending time in nature.
                </div>
                <div class= "header2">
                    <img class="home" alt= "Girl Coding" src={"./images/codergirl.png"}/>
                    <small><i>Source: Biscotto Design</i></small>
                </div>
            </div>
            <div class="center">
                <h2>Technical Skills</h2>
            </div>
            <div class="skills">
                
                {data.map((item) => {
                    return (
                        <div className='skill'>

                            {item.icon}
                            <br></br>
                            {item.name}
                        </div>
                    )})}

            </div>

            <div class="title">
                <h2>Projects</h2>
            </div>

            <div class="container2">
                
                {data1.map((item) => {
                    return (
                        <div className='project'>
                            <div>
                                <img class = 'image' alt= "project" src={item.image}/>
                            </div>
                            
                            <div class = "description">
                                <h3>{item.title}</h3>
                                
                                <strong>Made With: </strong>{item.technology}
                                <p>{item.description}</p>
                                <a href={item.github} target="_blank" class="button">Code</a> &nbsp;
                                <a href={item.live} target="_blank" class="button">Live Site</a>
                            </div>
                        </div>

                    )})}

                {data2.map((item) => {
                    return (
                        <div className='project'>
                            <div>
                                <img class = 'image' src={item.image}/>
                            </div>
                            
                            <div class = "description">
                                <h3>{item.title}</h3>
                                
                                <strong>Made With: </strong>{item.technology}
                                <p>{item.description}</p>
                                <a href={item.github} target="_blank" class="button">{item.code}</a> &nbsp;
                            </div>
                        </div>

                    )})}

            </div>
        </>
    );
}

export default HomePage;