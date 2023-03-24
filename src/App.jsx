import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InsertInfo from './components/InsertInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InsertInfo/>}/>
      </Routes>
    </Router>
  )
}

export default App
