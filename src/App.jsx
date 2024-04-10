import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Threads } from './components/Threads';
import { CreateNewThread } from './components/CreateNewThread';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element ={<Threads />}/>
        <Route path="/thread/new" element={<CreateNewThread />}/>
      </Routes>
    </Router>
  )
}

export default App;
