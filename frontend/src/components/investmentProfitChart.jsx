import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const InvestmentProfitChart = () => {
    const data = {
        labels: ['April', 'May', 'June', 'July','August','September','October'],
        datasets: [
            {
                label: 'Investment',
                data: [1827, 2115, 1549, 2999, 2637, 1205, 2765],
                borderColor: 'rgba(255, 165, 0, 1)',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                yAxisID: 'y',
                fill: true,
                type: 'line',
            },
            {
                label: 'Profit',
                data: [157, 81, 193, 45, 178, 122, 200]                ,
                backgroundColor: 'rgba(45, 60, 98, 1)',
                yAxisID: 'y1',
                type: 'bar',
            },
        ],
    }

    const options = {
        responsive: true,
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Investment ($)',
                },
            },
            y1: {
                type: 'linear',
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
                title: {
                    display: true,
                    text: 'Profit ($)',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return (
        <div className="chart-container mt-2">
            <Line data={data} options={options} />
        </div>
    )
}

export default InvestmentProfitChart