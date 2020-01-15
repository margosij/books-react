import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Books from "./pages/Books"
// import Nav from "./components/Nav"
// import Saved from "./pages/saved"
import SaveBooks from "./components/appLayout"

function App() {
  return(
    // <div>
    //   <Router>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/" component={Layout} />
    //       <Route exact path="/saved" component={Saved} /> 
    //     </Switch>
    //   </Router>
    // </div>
    // <Books/>
    // <Saved/>
    <SaveBooks />
  )
}

export default App;