// Data penjualan
const data2022 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
const data2023 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];
const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

// Inisialisasi Chart
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [
            {
                label: '2022',
                data: data2022,
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: '2023',
                data: data2023,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 10000,
                ticks: {
                    stepSize: 2500
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Laporan Penjualan',
                font: {
                    size: 16
                }
            },
            legend: {
                position: 'top'
            }
        }
    }
});

// Resize handler untuk responsivitas chart
window.addEventListener('resize', function() {
    salesChart.resize();
});