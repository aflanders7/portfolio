import React from 'react';
import ImageGallery from 'react-image-gallery';

const bookstore = [
    {
        original: 'images/bookstore1.png',
        thumbnail: 'images/bookstore1.png',
        originalHeight: '600px',
    },
    {
        original: 'images/bookstore2.png',
        thumbnail: 'images/bookstore2.png',
        originalHeight: '600px',
    },
    {
        original: 'images/bookstore3.png',
        thumbnail: 'images/bookstore3.png',
        originalHeight: '600px',
    }
];

function ProjectsPage() {
    return (
        <>
            <h2>Gallery</h2>
            <article class="gallery">
                <ImageGallery items={bookstore} />
            </article>
        </>
    );
}

export default ProjectsPage;