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
import { usePromiseTracker } from "react-promise-tracker";



const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
    <h1>Hey some async call in progress ! </h1>
  );
}

export default function App() {
  return (
    <main>
   
    <Header/>  
    <Route exact path = '/'> 
      <WelcomePage/>
    </Route>
    <Route exact path = '/characters'>  
    <LoadingIndicator/>
        <CharacterList/>
        
      </Route>
    </main>
  );
}
