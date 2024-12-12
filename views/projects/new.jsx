const React = require('react');
const Default = require('../layouts/default');

function New() {
    return (
        <Default>
            <h2>Add a New Project</h2>
            <form action="/projects" method="POST">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                />

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    rows="4"
                    required
                />

                <label htmlFor="technologies">Technologies (comma-separated)</label>
                <input
                    type="text"
                    name="technologies"
                    id="technologies"
                    placeholder="e.g., Node.js, Express, JavaScript"
                    required
                />

                <label htmlFor="githubLink">GitHub Link</label>
                <input
                    type="url"
                    name="githubLink"
                    id="githubLink"
                    placeholder="https://github.com/yourusername/repository"
                />

                <label htmlFor="liveDemoLink">Live Demo Link</label>
                <input
                    type="url"
                    name="liveDemoLink"
                    id="liveDemoLink"
                    placeholder="https://your-live-demo.com"
                />

                <label htmlFor="image">Image URL</label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    placeholder="https://placehold.co/400"
                />

                <br />
                <input type="submit" value="Add Project" />
            </form>
        </Default>
    );
}

module.exports = New;

// CREATE
