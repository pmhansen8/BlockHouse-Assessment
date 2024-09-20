"use client";

import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react';
import { fetchPieChartData } from "../components/api";
import ApexCharts from 'react-apexcharts';

export default function PieChart() {
    const [chartData, setChartData] = useState({
        labels: [],
        data: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchPieChartData();
                const { labels, data } = response.data;

                setChartData({
                    labels: labels,
                    data: data
                });
            } catch (error) {
                console.error('Error fetching pie chart data:', error);
            }
        };

        fetchData();
    }, []);

    const options = {
        chart: {
            type: 'pie'
        },
        labels: chartData.labels,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        tooltip: {
            y: {
                formatter: (value) => `${value}`
            }
        }
    };

    const series = chartData.data;

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ fontSize: "3em", textAlign: 'center' }}>Pie Chart</h1>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '1200px' }}>
                    <div style={{ width: '70%', maxWidth: '500px', display: 'flex', justifyContent: 'center' }}>
                        <ApexCharts
                            options={options}
                            series={series}
                            type="pie"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div style={{
                        width: '100%',
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
