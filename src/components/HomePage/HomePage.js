import React from 'react';
import {useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../../logo/Logo_PTIT_University.png';

export default function HomePage() {  
  // handle login
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const Login = () => {   
    if (username === 'admin' && password === 'admin') {
      navigate('/main');
    }
    else {
      alert('Username or password is incorrect');
    }
  };

  const TypeUsername = (event) => {
    setUsername(event.target.value);
  };

  const TypePassword = (event) => {
    setPassword(event.target.value);
  };
  
  return (
    <div className='home--container'>
      <nav>
        <img className='nav--img' src={logo} alt='PTIT University Logo' />
        <h1 className='nav--title'>Học Viện Công Nghệ Bưu Chính Viễn Thông</h1>
      </nav>
      <section className='home--section'>
        <form method='POST'>
          <h2 classname="service">HỆ THỐNG NHẬP HỌC TRỰC TUYẾN</h2>
          <label for="username">Tên đăng nhập</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Số CCCD" 
            onChange={TypeUsername} 
            value={username} 
            required
          />
          <label for="password">Mật khẩu</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Mặc định ddmmyyyy"
            onChange={TypePassword}
            value={password} 
            required
          />
          <button type="submit" className='login-button' onClick={Login}>Đăng nhập</button>  
        </form>
      </section>
    </div>
  );
}