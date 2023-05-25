import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import itemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
    return (
    <div className='App'>
        <NavBar />
    <itemListContainer greetings {..."Bienvenidos"} />
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada" , quantity)}/>
    </div>
    )
        

    

}

export default App
