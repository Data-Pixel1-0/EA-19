import React from 'react';

export function Login() {
  return (
    <div style={{ padding: '20px', background: '#222', color: '#fff', borderRadius: '8px' }}>
      <h2>Data Pixel - Control de Acceso</h2>
      <input type="text" placeholder="Operario" style={{ margin: '5px' }} />
      <br />
      <button style={{ cursor: 'pointer' }}>Ingresar</button>
    </div>
  );
}