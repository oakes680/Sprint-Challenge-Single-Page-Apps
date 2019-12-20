import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import { Route, Link } from 'react-router-dom'
import {
  Card,  CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Container, Entry} from './components/styles'

export default function App() {
  return (
    <main>
   
    <Header/>  
    <Route exact path = '/'> 
      <WelcomePage/>
    </Route>
    <Route exact path = '/characters'>  
        <CharacterList/>
      </Route>
    </main>
  );
}
