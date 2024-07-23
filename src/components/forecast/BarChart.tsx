import React, { useRef, useEffect } from 'react';
import Chart, { ChartData, ChartOptions } from 'chart.js/auto';

interface BarChartProps {
    data: ChartData;
    options?: ChartOptions;
}

const SimpleChart = ({ data, options }: BarChartProps) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            // Initialize Chart.js
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy(); // Destroy previous chart instance if it exists
                }
                chartInstance.current = new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: options,
                });
            }
        }

        // Cleanup function to destroy chart instance when the component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, options]); // Recreate the chart if data or options change


    return <canvas ref={chartRef}></canvas>;
};

export default SimpleChart;
