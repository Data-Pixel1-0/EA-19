
export function registrarProducto(nombre, stockInicial) {
    if (stockInicial < 0) {
        throw new Error("El stock inicial no puede ser negativo");
    }
    return { nombre, stock: stockInicial };
}

export function escanearRobot(codigoBarras, inventarioExistente) {
    if (!codigoBarras || !inventarioExistente[codigoBarras]) {
        return null; // Error controlado: código no existe
    }
    
    inventarioExistente[codigoBarras].stock += 1;
    return inventarioExistente[codigoBarras].stock;
}

export function obtenerListaStock(inventario) {
    return Object.values(inventario);
}