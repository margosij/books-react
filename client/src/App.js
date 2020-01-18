import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Books from "./pages"
import Nav from "./components/Nav"
import SaveBooks from "./components/appLayout"

function App() {
  return(
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={SaveBooks} /> 
        </Switch>
      </Router>
    </div>
  )
}

export default App;