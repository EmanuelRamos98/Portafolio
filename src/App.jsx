import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detalles, Error, Home } from './Pages'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/detalles/:detalles_id' element={<Detalles />} />
            <Route path='/*' element={<Error />} />
        </Routes>
    )
}

export default App
