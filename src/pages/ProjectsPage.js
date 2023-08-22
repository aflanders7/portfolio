import React from 'react';
import { BsGithub } from 'react-icons/bs'; 
import { DiGithubFull } from 'react-icons/di'; 

const Projects = [
    {
        image: 'images/Bookstore.png',
        title: 'Bookstore Database',
        technology: 'MySQL, Node.JS, Express, Handlebars, JavaScript',
        description: 'Database management system for a bookstore. Built with Node.JS and MySQL for backend functionality. Uses CRUD functions to manage and track product inventory, customers, employees, and sales. Deployed with Oracle Cloud.',
        github: 'https://github.com/aflanders7/Bookstore',
        live: 'http://bookstore.ddns.net:8034/',
    }
];

const Projects2 = [
    {
        image: 'images/mentalhealth.png',
        title: 'Mental Health Website',
        technology: 'Svelte, JavaScript',
        description: 'Mental health website featuring a chatbot and breathing animation. Designed and built with a team during a Spring 2023 hackathon. My contributions included the frontend design, JavaScript animation, and integrating the chatbot.',
        github: 'https://github.com/aflanders7/MentalHealthApp-BeaverHack2023',
    }
];

function ProjectsPage() {
    const data = Projects;
    const data2 = Projects2;
    return (
        <>
            <div class="center">
                <h2>Projects</h2>
            </div>

            <div class="container2">
                
                {data.map((item) => {
                    return (
                        <div className='project'>
                            <div>
                                <img class = 'image' src={item.image}/>
                            </div>
                            
                            <div class = "description">
                                <h3>{item.title}</h3>
                                
                                <strong>Made With: </strong>{item.technology}
                                <p>{item.description}</p>
                                <a href={item.github} target="_blank">Code</a> &nbsp;
                                <a href={item.live} target="_blank">Live Site</a>
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
                                <a href={item.github} target="_blank">Code</a> &nbsp;
                            </div>
                        </div>

                    )})}

            </div>

        </>
    );
}

export default ProjectsPage;