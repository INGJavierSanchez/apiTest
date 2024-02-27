function calcularEstadisticas(ventas) {
    const total = ventas.reduce((acc, venta) => acc + venta.monto, 0);
    const comprasPorTDC = ventas.reduce((acc, venta) => {
      acc[venta.tdc] += venta.monto;
      return acc;
    }, { oro: 0, amex: 0 });
    const noCompraron = ventas.filter(venta => !venta.compro).length;
    const compraMasAlta = Math.max(...ventas.map(venta => venta.monto));
    return { total, comprasPorTDC, noCompraron, compraMasAlta };
  }
  
  module.exports = {
    calcularEstadisticas
  };
  