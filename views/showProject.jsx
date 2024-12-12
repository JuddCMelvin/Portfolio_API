const React = require('react')
const Default = require('./layouts/default')

function Show({project}) {
    console.log(project.title)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{project.title}</h3>
            <h4>{project.description}</h4>
            <h4><a href="/projects">BACK</a></h4>
        </Default>
    )
}

module.exports = Show