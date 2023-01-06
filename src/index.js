import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter as Router,
  Routes,
  Route, 
  Link } from 'react-router-dom';

import Account from './Components/Account';
import Login from './Components/Login';
import Home from './Components/Home';
import Greeting from './Components/Greeting';
import Loginn from './Components/Loginn';
import Toogle from './Components/Toogle';
import Logout from './Components/Logout';
import NumberList from './Components/NumberList';
import A from './Components/A';
import A1 from './Components/A1';
import MutipleInputs from './Components/MuitpleInputs';
import Login1 from './Components/Login1';
import Logintest from './Components/Logintest';
import Register from './Components/Register';
import Test from './Components/Test';
import Two_WayB from './Components/Two_WayB';
import C from './Components/C';
import Warns from './Components/Warning';
// let user = {
//   name: "Nhat Nam",
//   age: 25
// }
// function User (props){
//   return props.data.name + " Tuoi:" + props.data.age;
// }
// let html = <div>Toi la: <User data = {user} /> </div>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, ]

const arr = [
  {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net", 
      }
  },
  {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",  
      }
  },
  {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",  
      }
  },
  {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692", 
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
          "name": "Robel-Corkery",
          "catchPhrase": "Multi-tiered zero tolerance productivity", 
      }
  },
  {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
          "name": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
      }
  },
]
const arr1=[{
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",  
  }
}
]
function Render(props) {
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h2>{post.name}</h2>
      <p>{post.username}</p>
      <p>{post.email}</p>
      <p>{post.address.street} <br/> {post.address.suite}</p>
      <p>{post.phone}</p>
      <p>{post.website}</p>
      <p>{post.company.name} <br/> {post.company.catchPhrase} </p>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <Router>
        <App>
            <Routes>
                <Route index path="/" element={<Home/>} />
                <Route  path="/Account" element={<Account/>} />
                <Route  path="/Login" element={<Login/>} />
            </Routes>
        </App>
    </Router> */}
    {/* <Greeting isLoggedIn={true} /> */}
    <Warns />
    {/* <Toogle /> */}
    {/* <App arr={numbers} /> */}
    {/* <Render posts={posts} /> */}
    {/* <A arr={arr} /> */}
    {/* <A1 data={arr1} /> */}
    {/* <App />
    <br /> 
    <MutipleInputs/> */}
    {/* <Login1 /> */}
    {/* <Logintest /> */}
    {/* <Test /> */}
    {/* <Register /> */}
    {/* /<Two_WayB/> */}
    {/* <C/> */}
    {/* <A/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
