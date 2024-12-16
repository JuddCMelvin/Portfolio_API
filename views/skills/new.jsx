const React = require('react');
const Default = require('../layouts/default');

function New({skills}) {
    return (
        <Default>
            <h2>Add a New Skill</h2>
            <form action="/skills" method="POST">
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
                <input type="submit" value="Add Skill" />
            </form>
        </Default>
    );
}

module.exports = New;

