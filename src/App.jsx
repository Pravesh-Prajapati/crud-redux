import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form'
import ShowContact from './components/Pages/ShowContact'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/'  element={<Form/>}/>
        <Route path='/showcontact' element={<ShowContact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
