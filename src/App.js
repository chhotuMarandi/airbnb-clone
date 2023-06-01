import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Filter from './components/Filter'
import DisplayPrice from './components/DisplayPrice'
import './Style.css'

function App () {
 return (
   <div>
     <Header />
     <div className='rule'></div>
     <Filter />
     <DisplayPrice />
   </div>
 );
}

export default App