import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Filter from './components/Filter'
import DisplayPrice from './components/DisplayPrice'
import Card from './components/Card'
import './Style.css'
import CardSection from './components/CardSection'

function App () {
 return (
   <div>
     <Header />
     <div className='rule'></div>
     <Filter />
     <DisplayPrice />
     <CardSection />
   </div>
 );
}

export default App