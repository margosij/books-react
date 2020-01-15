import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Layout from "./components/appLayout"
// import Nav from "./components/Nav"
import Saved from "./pages/saved"

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
    // <Layout/>
    <Saved/>
  )
}

export default App;