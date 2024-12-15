const React = require('react')
const Default = require('../layouts/default')

function Index({ skills, title }) {
    return (
        <Default title={title}>
            <h2>{title}</h2>
            <p>Here are my skills</p>
            <ul>
                {
                    skills.map((skill, index) => {
                        return (
                            <li key={index}>
                                <a href={`/skills/${skill._id}`}>
                                    {skill.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/skills/new"><button>Add a new skill</button></a>
            </div>
        </Default>
    )
}

module.exports = Index
