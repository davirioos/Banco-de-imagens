import React, { useState } from 'react';
import { ToastContainer ,toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default function Login (){
  return (
    <div className='containerLogin'>
      <ToastContainer />
      <form className='form'>
        <label>
          E-mail
        </label>
          <input type='text' className='inputPosition' placeholder='Email' />
        <label>
          Senha
        </label>
          <input type='password' id='password' className='inputPosition' placeholder='Senha' />
        <button type="submit" className='buttonEfect'>Enviar</button>
      </form>
    </div>
  );
}