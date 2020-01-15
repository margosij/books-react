import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./style.css"

class Nav extends Component {
    render() {
        console.log(this.props, "seeing nav props")
        return(
            < nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button>< NavLink className="navbar-brand" to="/">Google Books</ NavLink></button>
                <button><NavLink className="navbar-brand" to="/">Search</NavLink></button>
                <button><NavLink className="navbar-brand" to="/saved">Saved</NavLink></button>
            </nav>
        )
    }
}

export default Nav