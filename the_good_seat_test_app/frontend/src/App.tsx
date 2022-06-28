import Layout from "./components/Layout";
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import MainPage from "./pages/MainPage";
import { useContext } from "react";
import { AuthContext } from "./store/auth-context";

function App() {

  const { isLogged } = useContext(AuthContext)


  return (
    <Layout>
      <Routes>
        <Route path="/" element={isLogged ? <MainPage /> : <Navigate to="auth" />} />
        <Route path='auth' element={!isLogged ? <AuthPage /> : <Navigate to="/" />}>
          <Route path='' element={<Navigate to='login' />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
