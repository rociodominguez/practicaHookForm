import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const { register: rtc_register, handleSubmit: rtc_handleSubmit, formState: { errors: rtc_errors } } = useForm();

  const rtc_onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={rtc_handleSubmit(rtc_onSubmit)} style={rtc_formStyle}>
      <div style={rtc_inputGroupStyle}>
        <label>Nombre de usuario</label>
        <input
          {...rtc_register('username', { required: 'El nombre de usuario es requerido' })}
          style={rtc_inputStyle}
        />
        {rtc_errors.username && <span style={rtc_errorStyle}>{rtc_errors.username.message}</span>}
      </div>

      <div style={rtc_inputGroupStyle}>
        <label>Correo electrónico</label>
        <input
          {...rtc_register('email', {
            required: 'El correo electrónico es requerido',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'El formato del correo electrónico es inválido'
            }
          })}
          style={rtc_inputStyle}
        />
        {rtc_errors.email && <span style={rtc_errorStyle}>{rtc_errors.email.message}</span>}
      </div>

      <div style={rtc_inputGroupStyle}>
        <label>Contraseña</label>
        <input
          type="password"
          {...rtc_register('password', {
            required: 'La contraseña es requerida',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: 'La contraseña debe tener al menos 8 caracteres, incluyendo letras y números'
            }
          })}
          style={rtc_inputStyle}
        />
        {rtc_errors.password && <span style={rtc_errorStyle}>{rtc_errors.password.message}</span>}
      </div>

      <button type="submit" style={rtc_buttonStyle}>Registrarse</button>
    </form>
  );
};

const rtc_formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9'
};

const rtc_inputGroupStyle = {
  marginBottom: '15px'
};

const rtc_inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '5px 0',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const rtc_errorStyle = {
  color: 'red',
  fontSize: '12px'
};

const rtc_buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default RegistrationForm;