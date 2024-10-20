import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { gsap } from 'gsap';

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

    // Animate the chart
    gsap.to(chartData.datasets[0].data, {
      duration: 1,
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

  return (
    <div>
      <Bar data={chartData} />
      <button onClick={animateChartToCorrect}>Show Correct Answers</button>
    </div>
  );
};

export default AnimatedChart;