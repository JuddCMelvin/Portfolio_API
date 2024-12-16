const React = require('react');
const Default = require('../layouts/default');

function Edit({skill}) {
    return (
        <Default>
            <h2>Edit a Skill</h2>
            <form action={`/skills/${skill._id}?_method=PUT`} method="POST">
            <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
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
