import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ResetPassword from './components/ResetPassword'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/reset" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/signIn" />} />
      </Routes>
    </Router>
  )
}

export default App
