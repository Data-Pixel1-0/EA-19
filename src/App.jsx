import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Integración de ambos módulos según la guía */}
      <h1>DATA PIXEL - SISTEMA INTEGRADO</h1>
      
      <div style={{ background: '#333', color: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
        <h2> MÓDULO ROBOT ACTIVO</h2>
        <p>Telemetría en línea y esperando escaneo.</p>
      </div>

      <div style={{ background: '#222', color: '#fff', padding: '15px', borderRadius: '8px' }}>
        <h2> PANEL WEB OPERARIO</h2>
        <p>Estado: Esperando inicio de sesión del operario...</p>
      </div>
    </div>
  );
}

export default App;