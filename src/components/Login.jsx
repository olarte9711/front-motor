import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { FaUser, FaLock } from 'react-icons/fa';
import { login } from "../helpers/ApiHelper";
import { UserContext } from "../context/UserContext";
import { LoadingScreen } from "./LoadingScreen";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [credentialsError, setCredentialsError] = useState('');
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(emailValue) ? '' : 'Por favor digite un email válido.');
  };

  const validatePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordError(passwordValue.length < 6 ? 'Contraseña debe tener por lo menos 6 carácteres.' : '');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const data = await login(email, password);
      console.log(data);
  
      if (data) {
        setUser({
          name: data.user,
          role: data.rol[0],
        });
        navigate('/motor');
      } else {
        setCredentialsError("Credenciales invalidas");
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
    } finally {
      setLoading(false)
    }
  };
  

  return (
    <div className="login-container">
      {loading && <LoadingScreen />}
      
      {!loading && (
        <div className="login">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Profile"
            className="profile-img"
          />
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Digite su email"
                value={email}
                onChange={validateEmail}
                className={emailError ? 'error' : ''}
              />
              <i><FaUser /></i>
              {emailError && <small className="error-text">{emailError}</small>}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Digite su contraseña"
                value={password}
                onChange={validatePassword}
                className={passwordError ? 'error' : ''}
              />
              <i><FaLock /></i>
              {passwordError && <small className="error-text">{passwordError}</small>}
            </div>
            <button
              type="submit"
              className="login-button"
              disabled={emailError || passwordError || !email || !password }
            >
              {loading ? 'Ingresando ...' : 'Ingresar'}
            </button>
          </form>

          {credentialsError && <small className="error-text">{credentialsError}</small>}
          <div className="forgot-password">
            <a href="#forgot">¿Olvidaste tu contraseña?</a>
          </div>
          <div className="terms-privacy">
            <p>
              Terminos de uso. <a href="#privacy">Política de privacidad</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
