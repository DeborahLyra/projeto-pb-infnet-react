import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<X />} />
      
    </Routes>
  </BrowserRouter>
  )
}
