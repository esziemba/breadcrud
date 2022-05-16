const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/Default')

function Index ({breads}) {
    return (
        <default>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> 8 */}
            <ul>
                {
                    breads.map((bread, index) => {
                        return(<li key={index}>
                            <a href={`/breads/${index}`}>
                            {bread.name}
                            </a>
                        </li>)
                    })
                }
            </ul>
        </default>
    )
}

module.exports = Index