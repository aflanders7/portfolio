import React from 'react';
import { Skills } from '../components/skills';


function HomePage() {
    const data = Skills;
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
                    <img src={"images/codergirl.png"} height = "400px"/>
                    <small><i>Source: Biscotto Design</i></small>
                </div>
            </div>
            <div class="center">
                <h2>My skills</h2>
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