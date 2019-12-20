import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Container, Entry } from './styles'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        //console.log(response.data.results)
        const characters = response.data.results.filter(
          character =>
            character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters)
      })
      .catch(error => {
        console.log('error', error)
      })
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value)
  }


  const [drop, setDrop] = useState('');


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${drop}`)
      .then(response => {
        console.log(response.data.results)
        const characters = response.data.results
        setData(characters)
      })
      .catch(error => {
        console.log('error', error)
      })
  }, [drop]);

  const handleChange = event => {
    setDrop(event.target.value)
  }

  return (
    <section >

      <form className='center mt-4'> 
        <span>Enter in Character Name</span>
        <input
          className='center ml-2'
          type="text"
          onChange={handleInputChange}
          value={query}
          name='name'
          tabIndex='0'
          placeholder='Search by Name'
        />
        <span className='ml-4'>Or select a Character</span>
        <select className='dropdown' className='ml-2' name="names" onChange={handleChange}>
          <option value="Rick">Rick</option>
          <option value="Morty">Morty</option>
          <option value="Summer">Summer</option>
          <option value="Beth">Beth</option>
        </select>
      </form>

      <div className="character-list">


        {data.map((data, key) => {
          return (

            <Card className='mt-4'>
              <Container key={data.id}>
                <CardBody>
                  <CardTitle>Name: {data.name}</CardTitle>
                  <CardTitle>Status: {data.status}</CardTitle>
                  <CardSubtitle>Species: {data.species}</CardSubtitle>
                  <CardSubtitle>Gender: {data.gender}</CardSubtitle>
                </CardBody>
              </Container>
            </Card>

          )
        })}
      </div>
    </section>


  );
}
