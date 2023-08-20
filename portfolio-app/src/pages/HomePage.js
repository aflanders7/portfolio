import React from 'react';

function HomePage() {
    return (
        <>
            <article id="dom">
                <h2>Welcome to my Web Development Portfolio Project</h2>
                <p>The frontend structure of this site is built with HTML. 
                    A global CSS stylesheet adds style to the website, including 
                    the use of imported Google Fonts. All images files are optimized 
                    for the web to increase load time efficiency and improve image 
                    resolution.  JavaScript is responsible for processing and interacting 
                    with the data on this site. Express.JS is used to get, post, and 
                    delete data as well as to specify the ports and routes of the data. 
                    The Rest API is implemented for CRUD operations and HTTP methods. 
                    The application was developed with Node.JS and managed with NPM. 
                    The React framework updates the DOM based on component modification, 
                    such as with the use of React icons. Mongoose and Express executed 
                    CRUD operations on a collection developed with MongoDB.
                </p>

            </article>
         </>
    );
}

export default HomePage;