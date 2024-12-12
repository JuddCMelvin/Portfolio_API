const React = require('react')
const Default = require('./layouts/default')

function Index({projects, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <p>Here are my projects</p>
            <ul>
                {
                    projects.map((project, index) =>{
                        return (
                        <li key={index}>
                            <a href={`/projects/${index}`}> 
                                {project.title}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index