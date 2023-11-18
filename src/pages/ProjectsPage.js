import React from 'react';
import { Projects, Projects2 } from '../components/projects';


function ProjectsPage() {
    const data1 = Projects;
    const data2 = Projects2;
    return (
        <>
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

export default ProjectsPage;
