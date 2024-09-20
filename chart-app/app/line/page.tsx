"use client";

import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react';
import { fetchLineChartData } from "../components/api";
import ApexCharts from 'react-apexcharts';

export default function LineChart() {
    const [chartData, setChartData] = useState({
        labels: [],
        data: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchLineChartData();
                const { labels, data } = response.data;

                setChartData({
                    labels: labels,
                    data: data
                });
            } catch (error) {
                console.error('Error fetching line chart data:', error);
            }
        };

        fetchData();
    }, []);

    const options = {
        chart: {
            type: 'line',
            height: '100%',
        },
        xaxis: {
            categories: chartData.labels,
            title: {
                text: 'Time Period'
            }
        },
        yaxis: {
            title: {
                text: 'Sales'
            },
            min: 0
        },
        tooltip: {
            y: {
                formatter: (value) => `Value: ${value}`
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        }
    };

    const series = [
        {
            name: 'Sales Over Time',
            data: chartData.data
        }
    ];

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ fontSize: "3em", textAlign: 'center' }}>Line Chart</h1>
                <div style={{ display: 'flex', alignItems: 'stretch', width: '100%', maxWidth: '1200px' }}>
                    <div style={{ width: '70%', maxWidth: '800px' }}>
                        <ApexCharts
                            options={options}
                            series={series}
                            type="line"
                            width="100%"
                            height="auto"
                        />
                    </div>
                    <div style={{ width: '30%', maxWidth: '300px', backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginLeft: '20px' }}>
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
