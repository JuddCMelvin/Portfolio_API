const React = require('react');
const Default = require('../layouts/default');

function New({skills}) {
    return (
        <Default>
            <h2>Add a New Project</h2>
            <form action="/projects" method="POST">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        required
                    />
                </div>

                {skills.map(skill => {
                    return(
                        <div key={skill.id}>
                            <label htmlFor="skills">{skill.name}</label>
                            <input
                                type="checkbox"
                                name="skills" 
                                value={skill.name}
                            />
                        </div>
                    )
                })}

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    rows="4"
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

