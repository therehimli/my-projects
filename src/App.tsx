import { Route, Routes } from 'react-router-dom'

import './App.css'
import Wrapper from './layout/Wrapper'
import Project from './pages/projectpage'
import Home from './pages/homepage'
import NotFound from './pages/notFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
