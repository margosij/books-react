import React, { Component } from "react"
import "./style.css"
// maybe use a link component from the react router dom for the link buttons below

class Nav extends Component {
    render() {
        return(
            < nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-brand" href="/">Google Books</button>
                <button className="navbar-brand" href="/">Search</button>
                <button className="navbar-brand" href="/">Saved</button>
            </nav>
        )
    }
}

export default Nav