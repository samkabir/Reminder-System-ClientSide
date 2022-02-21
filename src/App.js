import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ReminderPage from "./Pages/Home/ReminderPage/ReminderPage";
import './App.css';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/reminderPage" element={<ReminderPage />} />

              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
