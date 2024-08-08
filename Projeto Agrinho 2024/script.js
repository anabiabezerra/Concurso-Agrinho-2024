document.addEventListener('DOMContentLoaded', function() {
    // Dados para o gráfico
    var dadosEconomiaEnergia = {
        labels: ['LEDs', 'Energia Solar', 'Reciclagem', 'Conservação'],
        datasets: [{
            label: 'Economia de Energia (kWh)',
            backgroundColor: ['#2E8B57', '#3CB371', '#20B2AA', '#66CDAA'],
            data: [500, 700, 300, 400]
        }]
    };

    // Configurações do gráfico
    var config = {
        type: 'bar',
        data: dadosEconomiaEnergia,
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Economia de Energia (kWh)'
                    }
                }
            }
        }
    };

    // Selecionando o elemento onde o gráfico será renderizado
    var ctx = document.getElementById('graficoEconomiaEnergia').getContext('2d');
    new Chart(ctx, config);

    console.log('O script JavaScript foi carregado!');
});
