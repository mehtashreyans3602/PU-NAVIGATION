// import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import Profile from './components/Profile';
import AdminMap from "./components/AdminMap";
import Guestmap from "./components/Guestmap";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">

      {!isAuthenticated ? <p>hi please login</p> : <Profile innertext='welcome' />}
      {!isAuthenticated ? <LoginButton logintext='login for admin only' /> : ''}
      {isAuthenticated ? <AdminMap /> : <Guestmap />}

    </div>
  );
}

export default App;
