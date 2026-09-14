document.addEventListener("DOMContentLoaded", function () {
actualizarDiasRestantes();
setInterval(actualizarDiasRestantes, 24 * 60 * 60 * 1000); // actualizar diario
  const chartFontFamily = '"Tajawal", Arial, sans-serif';
  const sharedChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        labels: {
          color: '#374151',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '700'
          },
          padding: 14
        }
      },
      tooltip: {
        titleFont: {
          family: chartFontFamily,
          size: 13,
          weight: '700'
        },
        bodyFont: {
          family: chartFontFamily,
          size: 12
        },
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        cornerRadius: 10,
        padding: 10
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#4b5563',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '600'
          },
          maxRotation: 0,
          autoSkip: true
        },
        grid: {
          color: 'rgba(15, 23, 42, 0.08)',
          drawBorder: false
        },
        border: {
          color: 'rgba(15, 23, 42, 0.16)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#4b5563',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '600'
          }
        },
        grid: {
          color: 'rgba(15, 23, 42, 0.08)',
          drawBorder: false
        },
        border: {
          color: 'rgba(15, 23, 42, 0.16)'
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2.5,
        tension: 0.25
      },
      point: {
        radius: 3.5,
        hoverRadius: 5,
        borderWidth: 1,
        backgroundColor: 'rgba(45, 74, 62, 1)',
        borderColor: 'rgba(45, 74, 62, 1)'
      }
    }
  };

  // --- Datos ---
  const dataLine1 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
    datasets: [{
      label: 'Km recorridos en Semana 35',
      data: [14, 8, 8, 9],
      borderColor: 'rgba(153, 102, 255, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  const dataLine2 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
    datasets: [{
      label: 'Km recorridos en Semana 36',
      data: [7, 8, 7, 60],
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  // --- Configuración base ---
  const baseConfig = {
    type: 'line',
    options: { scales: { y: { beginAtZero: true } } }
  };

  // --- Crear gráficos ---
  new Chart(document.getElementById('myChart-line-1'), { ...baseConfig, data: dataLine1 });
  new Chart(document.getElementById('myChart-line-2'), { ...baseConfig, data: dataLine2 });
  new Chart(document.getElementById('myChart-line-3'), { ...baseConfig, data: dataLine3 });

  // --- Función de cuenta regresiva ---

function actualizarDiasRestantes() {
  // Fecha objetivo fija
  const objetivoDate = new Date('2026-09-27');
  const currentDate = new Date();
  const timeDiff = objetivoDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
}

  // Crear dos nuevas instancias de HTMLVideoElement para cada sección
  let Semana_1_video_1 = document.createElement("video");
  let Semana_1_video_2 = document.createElement("video");
  let Semana_2_video_3 = document.createElement("video");
  let Semana_2_video_4 = document.createElement("video");

  // Establecer las fuentes de video
  Semana_1_video_1.src = "video 1.mp4"; // ruta de su primer video
  Semana_1_video_2.src = "video 2.mp4"; // ruta de su segundo video
  Semana_2_video_3.src = "video 3.mp4"; // ruta de su tercer video
  Semana_2_video_4.src = "video 4.mp4"; // ruta de su cuarto video

  // Establecer atributos de video
  Semana_1_video_1.controls = true;
  Semana_1_video_1.autoplay = false;
  Semana_1_video_1.loop = false;

  Semana_1_video_2.controls = true;
  Semana_1_video_2.autoplay = false;
  Semana_1_video_2.loop = false;

  Semana_2_video_3.controls = true;
  Semana_2_video_3.autoplay = false;
  Semana_2_video_3.loop = false;

  Semana_2_video_4.controls = true;
  Semana_2_video_4.autoplay = false;
  Semana_2_video_4.loop = false;

  // Agregar los dos videos a cada sección
  document.getElementById("Semana 1").appendChild(video1);
  document.getElementById("Semana 1").appendChild(video2);
  document.getElementById("Semana 2").appendChild(video3);
  document.getElementById("Semana 2").appendChild(video4);

});
