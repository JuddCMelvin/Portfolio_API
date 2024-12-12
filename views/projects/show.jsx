const React = require('react')
const Default = require('../layouts/default')

function Show({project}) {
    console.log(project.title)
    return (
        <Default>
            <div className="align-center">
                <h2>Show Page</h2>
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.name}/>
                <h4>{project.description}</h4>
                <h4><a href="/projects">BACK</a></h4>
            </div>
        </Default>
    )
}

module.exports = Show