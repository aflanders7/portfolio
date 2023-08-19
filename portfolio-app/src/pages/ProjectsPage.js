import React from 'react';
import ImageGallery from 'react-image-gallery';

const pictures = [
    {
        original: 'images/checkers-board.png',
        thumbnail: 'images/checkers-board.png',
        description: `Python checkers board (2023)`,
        originalHeight: '450px',
    }];

function ProjectsPage() {
    return (
        <>
            <h2>Gallery</h2>
            <p>Here are some images of my hobbies and projects.</p>
            <article class="gallery">
                <ImageGallery items={pictures} />
            </article>
        </>
    );
}

export default ProjectsPage;