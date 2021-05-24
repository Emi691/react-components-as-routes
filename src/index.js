import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Messages from './Messages'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink> 
//     <NavLink
//       to="/signup"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Signup</NavLink>
//     <NavLink
//       to="/messages"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Messages</NavLink>
   
//   </div>

// const Home = () => <h1>Home!</h1>  

// const About = () => <h1>This is my about component!</h1>


// const Login = () =>
//   <form>
//     <h1>Login</h1>
//     <div>
//       <input type="text" name="username" placeholder="Username" />
//       <label htmlFor="username">Username</label>
//     </div>
//     <div>
//       <input type="password" name="password" placeholder="Password" />
//       <label htmlFor="password">Password</label>
//     </div>
//     <input type="submit" value= "Login" />
//   </form>

// const Signup = () => 
//   <form>
//     <h1>Signup</h1>
//     <div>
//       <input type="text" name="username" placeholder="Username" />
//       <label htmlFor="username">Username</label>
//     </div>
//     <div>
//       <input type="text" name="email" placeholder="Email" />
//       <label htmlFor="email">Email</label>
//     </div>
//     <div>
//       <input type="password" name="password" placeholder="Password" />
//       <label htmlFor="password">Password</label>
//     </div>
//     <input type="submit" value= "Sign Up" />
//   </form>

// const Messages = () => <h1>Messages:</h1>

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages}/>
    </div>
  </Router>),
  document.getElementById('root')
);
