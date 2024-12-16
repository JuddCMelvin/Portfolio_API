const React = require('react')
const Default = require('../layouts/default')

function Show({skill}) {
    console.log(skill.name)
    return (
        <Default>
            <div className="align-center">
                <h2>Skill</h2>
                <h3>{skill.name}</h3>
                <img src={skill.image} alt={skill.name}/>
                <h4><a href="/skills">BACK</a></h4>
                <a href={`/skills/${skill.id}/edit`}><button>Edit</button></a>
            </div>
            <form action={`/skills/${skill.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>
        </Default>
    )
}

module.exports = Show