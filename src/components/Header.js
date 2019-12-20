import React from "react";
import { Route, Link } from 'react-router-dom'

export default function Header() {
  return (
  
    <header className='dogg'>
      <Link to='/' >
        <div className='button'><span class='innerButton'>Go Home</span></div>
      </Link>
      <h1 >Rick &amp; Morty Fan Page</h1>

      <Link to='/characters'  >
        <div className='button'><span class='innerButton'>See Characters</span></div>
        </Link>
    </header>
    
  );
}



      
     