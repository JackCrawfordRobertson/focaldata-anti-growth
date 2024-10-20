import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { gsap } from 'gsap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // Register BarElement
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,  // Register the bar element
  Title,
  Tooltip,
  Legend
);

const initialChartData = {
  labels: [
    "National Prosperity", 
    "Economic Indicators", 
    "Individual Prosperity", 
    "Employment Growth", 
    "Political Scepticism", 
    "General Confusion", 
    "Business Expansion", 
    "Public Services/Finances", 
    "Wealth Distribution"
  ],
  datasets: [
    {
      label: 'Percentage Giving Answer (%)',
      data: [20.3, 14.3, 13.4, 11.9, 10.8, 10.8, 10.6, 6, 2.6],
      backgroundColor: [
        '#00bfff', '#ff8c00', '#3cb371', '#b8860b', '#4682b4', '#32cd32', '#ff6347', '#da70d6', '#ff1493'
      ],
    },
  ],
};

const AnimatedChart = ({ userRanking }) => {
  const [chartData, setChartData] = useState(initialChartData);
  const [showChart, setShowChart] = useState(false);

  const animateChartToCorrect = () => {
    const correctOrder = [20.3, 14.3, 13.4, 11.9, 10.8, 10.8, 10.6, 6, 2.6];
    const correctLabels = [
      "National Prosperity", 
      "Economic Indicators", 
      "Individual Prosperity", 
      "Employment Growth", 
      "Political Scepticism", 
      "General Confusion", 
      "Business Expansion", 
      "Public Services/Finances", 
      "Wealth Distribution"
    ];

    // Animate the chart data and labels
    gsap.to(chartData.datasets[0].data, {
      duration: 1.5,
      ease: "power3.out",
      endArray: correctOrder,
      onUpdate: () => setChartData({ ...chartData }),
    });

    // Update labels
    setChartData({
      ...chartData,
      labels: correctLabels,
    });
  };

  useEffect(() => {
    if (userRanking) {
      setShowChart(true); // Show the chart when userRanking is set
      animateChartToCorrect(); // Animate chart after ranking is submitted
    }
  }, [userRanking]);

  const chartOptions = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Percentage Giving Answer (%)', // Y-axis title
          font: {
            size: 16,
          },
        },
      },
    },
    animation: {
      duration: 1000, // Chart animation duration
    },
  };

  return (
    <div>
      {showChart && (
        <div style={{ marginTop: '40px' }}>
          <Bar data={chartData} options={chartOptions} height={300} />
        </div>
      )}
    </div>
  );
};

export default AnimatedChart;