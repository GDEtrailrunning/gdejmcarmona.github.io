document.addEventListener("DOMContentLoaded", function () {
  if (typeof Chart === "undefined") return;

  //actualizarDiasRestantes();
  //setInterval(actualizarDiasRestantes, 24*60*60*1000); // Actualizar diario
  //Datos para el gráfico de líneas
const dataLine1 = {
  labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 41',
    data: [13, 12, 10, 21], // Datos de los km recorridos en cada día
    borderColor: 'rgba(75, 192, 192, 1)',
    fill: true,
    tension: 0.1
  }]
};

const dataLine2 = {
  labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'], // Etiquetas de los días
  datasets: [{
    label: 'Total Km recorridos en Semana 42',
    data: [11, 16, 14, 20],// Datos de los km recorridos en cada día
    borderColor: 'rgba(45, 78, 199, 1)',
    fill: true,
    tension: 0.1
  }]
};

// Configuración del gráfico de líneas
const configLine = {
  type: 'line',
  data: dataLine1, // Puede cambiar esto a dataLine2 para mostrar el gráfico de la segunda sección
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Seleccione los contextos de los <canvas> y cree los gráficos
const chartLine1Canvas = document.getElementById('myChart-line-1');
if (chartLine1Canvas && !Chart.getChart(chartLine1Canvas)) {
  new Chart(chartLine1Canvas, configLine);
}

const chartLine2Canvas = document.getElementById('myChart-line-2');
if (chartLine2Canvas && !Chart.getChart(chartLine2Canvas)) {
  new Chart(chartLine2Canvas, {
  type: 'line',
  data: dataLine2,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  });
}

function actualizarDiasRestantes() {
  // Fecha objetivo fija
  const objetivoDate = new Date('2026-05-23');
  const currentDate = new Date();
  const timeDiff = objetivoDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
}

});
