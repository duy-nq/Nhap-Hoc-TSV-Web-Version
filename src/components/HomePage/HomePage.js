import React from 'react';
import './HomePage.css';
import logo from '../../logo/Logo_PTIT_University.png';

export default function HomePage() {
  return (
    <div className='home--container'>
      <nav>
        <img className='nav--img' src={logo} alt='PTIT University Logo' />
        <h1 className='nav--title'>Học Viện Công Nghệ Bưu Chính Viễn Thông</h1>
      </nav>
      <section className='home--section'>
        <form method='POST'>
          <h2>HỆ THỐNG NHẬP HỌC TRỰC TUYẾN</h2>
          <label for="username">Tên đăng nhập</label>
          <input type="text" id="username" name="username" placeholder="Số CCCD" required/>

          <label for="password">Mật khẩu</label>
          <input type="password" id="password" name="password" placeholder="Mặc định ddmmyyyy" required/>

          <button type="submit">Đăng nhập</button>
        </form>
      </section>
    </div>
  );
}