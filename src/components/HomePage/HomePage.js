import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useEffect } from 'react';  
import './HomePage.css';
import logo from '../../logo/Logo_PTIT_University.png';

export default function HomePage() {  
  // handle login
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }, []);

  const HandleSubmit = (event) => {
    event.preventDefault();
    Login(username, password);
  }

  // Example of a login function
  async function Login(username, password) {   
    const response = await fetch('/api/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'soCCCD': username, 'matKhau': password }),
  });

  if (response.ok) {
    const res = await response.json();

    console.log(res.message);

    if (res.data === null) {
      alert('Sai tên đăng nhập hoặc mật khẩu!');
      setUsername('');
      setPassword('');
      localStorage.removeItem('token');
      localStorage.removeItem('id');
    }
    else {
      localStorage.setItem('token', res.data);
      localStorage.setItem('id', username);
      navigate('/main');
    }
  }
}

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
        <form onSubmit={HandleSubmit}>
          <h2 className="service">HỆ THỐNG NHẬP HỌC TRỰC TUYẾN</h2>
          <label htmlFor="username">Tên đăng nhập</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Số CCCD" 
            onChange={TypeUsername} 
            value={username} 
            required
          />
          <label htmlFor="password">Mật khẩu</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Mặc định ddmmyyyy"
            onChange={TypePassword}
            value={password} 
            required
          />
          <button type='submit' className='login-button'>Đăng nhập</button>  
        </form>
      </section>
    </div>
  );
}