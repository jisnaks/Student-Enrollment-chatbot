import Chatbot from 'react-chatbot-kit'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-chatbot-kit/build/main.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import ChatbotPg from './Components/ChatbotPg';

function App() {
  return (
    <div className='App'>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/chatbotpg" element={<ChatbotPg />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
