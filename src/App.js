// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/user'>User</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">这里是About</Route>
          <Route path="/user">这里是User</Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <h2>Home</h2>
  )
}

export default App;
