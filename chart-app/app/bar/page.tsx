"use client";

import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react';
import { fetchBarChartData } from "../components/api";
import ApexCharts from 'react-apexcharts';

export default function BarChart() {
    const [chartData, setChartData] = useState({
        labels: [],
        data: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchBarChartData();
                const { labels, data } = response.data;

                setChartData({
                    labels: labels,
                    data: data
                });
            } catch (error) {
                console.error('Error fetching bar chart data:', error);
            }
        };

        fetchData();
    }, []);

    const options = {
        chart: {
            type: 'bar',
            height: '100%', // Ensures chart takes full height of container
        },
        xaxis: {
            categories: chartData.labels,
            title: {
                text: 'Products'
            }
        },
        yaxis: {
            title: {
                text: 'Values'
            },
            min: 0 // Start y-axis from 0
        },
        tooltip: {
            y: {
                formatter: (value) => `Value: ${value}`
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false // Disable data labels if not needed
        },
        colors: ['#4BC0C0'] // Customize color of bars
    };

    const series = [
        {
            name: 'Sales',
            data: chartData.data
        }
    ];

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ fontSize: "3em", textAlign: 'center' }}>Bar Chart</h1>
                <div style={{ display: 'flex', alignItems: 'stretch', width: '100%', maxWidth: '1200px' }}>
                    <div style={{ width: '70%', maxWidth: '800px' }}>
                        <ApexCharts
                            options={options}
                            series={series}
                            type="bar"
                            width="100%" // Ensure chart uses full width of container
                            height="auto" // Allow height to adjust based on width
                        />
                    </div>
                    <div style={{
                        width: '30%',
                        maxWidth: '300px',
                        backgroundColor: 'white',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginLeft: '20px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h2 style={{ color: "black", fontSize: "2em" }}>Overview</h2>
                        </div>
                        <p style={{ color: "black" }}>Overview of chart data.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
