import React from 'react';
import { Skills } from '../components/skills';


function HomePage() {
    const data = Skills;

    return (
        <>

            <div class= "container">
                <div class= "header">
                    <h2>About Me </h2> 
                    Hello! I'm Audrey Flanders, a dedicated computer science student with a passion for creative problem-solving 
                    and tackling complex challenges.  My professional experience includes building large-scale data pipelines, developing 
                    web applications, and executing research projects with a focus on innovative design.
                     I am committed to learning and eager to contribute my 
                    skills to projects that push the boundaries of technology. Outside of my studies 
                    I find joy in reading, painting, creative writing, and spending time in nature.
                </div>
                <div class= "header2">
                    <img class="home" alt= "Girl Coding" src={"images/codergirl.png"}/>
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

        </>
    );
}

export default HomePage;