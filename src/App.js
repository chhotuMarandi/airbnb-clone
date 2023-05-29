import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Filter from './components/Filter'
import './Style.css'

function App () {
 return (
   <div>
     <Header />
     <div className='rule'></div>
     <Filter />
   </div>
 );
}

export default App