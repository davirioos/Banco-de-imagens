import React, { useState } from 'react';
import { ToastContainer ,toast } from 'react-toastify';
import { isEmail } from 'validator';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default function Cadastro (){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  function handeSubmit(e){
    e.preventDefault()

    let formErrors = false;
    // const regex = (?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*()_+^&}{:;?.])/;
    const letra = /^(?=.*[a-z])/;
    const letraMaiuscula = /^(?=.*[A-Z])/
    const numero = /^(?=.*[1-9])/

    if (!name || !email || !password || !passwordAgain) {
      formErrors = true;
      toast.error('Nem um Campo pode fica vazio.');
      return
    }
    if (name.length < 3 || name.length > 35) {
      formErrors = true;
      toast.error('Nome tem que ter pelo menos mais de 3 Letras.');
      return 
    }
    if (!isEmail(email)){
      formErrors = true;
      toast.error('E-mail invalido.')
      return 
    }
    if (!isEmail(email)){
      formErrors = true;
      toast.error('E-mail invalido.')
      return 
    }
    if(!letra.test(password)){
      formErrors = true;
      toast.error('Senha tem que conte 1 Letra minúscula ')
      return 
    }
    if(!letraMaiuscula.test(password)){
      formErrors = true;
      toast.error('Senha tem que conte 1 Letra Maiúscula ')
      return 
    
    }
    if(!numero.test(password)){
      formErrors = true;
      toast.error('Senha tem que conte algum número')
      return 
    }

    if(password !== passwordAgain){
      formErrors = true;
      toast.error('As Senha tem que ser iguais')
      return
    }
    if(formErrors)return;

    toast.success('Login Criado')
  }


  return (
    <div className='containerLogin'>
      <ToastContainer />
      <form className='form' onSubmit={handeSubmit}>
        <label>
          Nome
        </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className='inputPosition' placeholder='Nome'/>
        <label>
          E-mail
        </label>
          <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputPosition' placeholder='Email' />
        <label>
          Senha
        </label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputPosition' placeholder='Senha' />
        <label>
          Repeti Senha
        </label>
        <input type='password' id='passwordAgain' value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} className='inputPosition' placeholder='Repeti Senha'/>

        <button type="submit" className='buttonEfect'>Enviar</button>
      </form>
    </div>
  );
}