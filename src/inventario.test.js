import { describe, test, expect } from 'vitest';
import { registrarProducto, escanearRobot, obtenerListaStock } from './inventario';

describe('Pruebas Unitarias de Integración - DATA PIXEL', () => {

    
    
    test('1. Debería registrar un producto correctamente con stock inicial válido', () => {
        const producto = registrarProducto('Cámara Pixel 4K', 10);
        expect(producto.nombre).toBe('Cámara Pixel 4K');
        expect(producto.stock).toBe(10);
    });

    test('2. Debería incrementar el stock en +1 cuando el robot escanea un código válido', () => {
        const baseDatosMock = {
            'BOT-99': { nombre: 'Sensor Telemetría', stock: 5 }
        };
        const nuevoStock = escanearRobot('BOT-99', baseDatosMock);
        expect(nuevoStock).toBe(6); // 5 + 1 = 6
    });

    test('3. Debería retornar la lista completa de productos en stock', () => {
        const baseDatosMock = {
            'A1': { nombre: 'Lente', stock: 2 },
            'B2': { nombre: 'Cable', stock: 4 }
        };
        const lista = obtenerListaStock(baseDatosMock);
        expect(lista).toHaveLength(2);
        expect(lista[0].nombre).toBe('Lente');
    });

    // CAMINOS NEGATIVOS (2 ERRORES CONTROLADOS)

    test('4. Debería lanzar un error si se intenta registrar un producto con stock negativo', () => {
        expect(() => registrarProducto('Pantalla LCD', -5)).toThrow('El stock inicial no puede ser negativo');
    });

    test('5. Debería retornar null si el robot escanea un código que no existe en el sistema', () => {
        const baseDatosMock = { 'BOT-99': { nombre: 'Sensor', stock: 5 } };
        const resultado = escanearRobot('CODIGO-FALSO', baseDatosMock);
        expect(resultado).toBeNull(); // Retorna null controlado
    });
});