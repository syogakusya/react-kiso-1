import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Threads } from './components/Threads';
import { CreateNewThread } from './components/CreateNewThread';
import { Thread } from ' ./components/Thread';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element ={<Threads />} exact/>
          <Route path="/thread/new" element={<CreateNewThread />} exact/>
          <Route path="/thread/:thread_id" element={<Thread />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
