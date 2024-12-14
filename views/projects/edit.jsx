const React = require('react');
const Default = require('../layouts/default');

function Edit({project}) {
    return (
        <Default>
            <h2>Edit a Project</h2>
            <form action={`/projects/${project._id}?_method=PUT`} method="POST">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder={project.title}
                        required 
                    />
                </div>
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    rows="4"
                    placeholder={project.description}
                />
                <label htmlFor="technologies">Technologies (comma-separated)</label>
                <input
                    type="text"
                    name="technologies"
                    id="technologies"
                    placeholder={project.technologies}
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
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit
