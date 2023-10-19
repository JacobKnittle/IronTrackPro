import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import WorkoutsPage from './pages/WorkoutsPage';
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="signup"
            element={
              <>
                <Navbar />
                <SignUp />
              </>
            }
          />
          <Route path="workouts" element={<WorkoutsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
