import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import AllNotes from './pages/allNotes';
import CreateNote from './pages/createNewNote';
import SingleNote from './pages/createNewNote';

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<AllNotes />} />
          <Route path='/create-note' element={<CreateNote />} />
          <Route path='/:noteId' element={<SingleNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;