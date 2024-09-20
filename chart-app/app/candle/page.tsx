"use client";

import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { fetchCandleChartData } from "../components/api";

export default function CandleChart() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartSeries, setChartSeries] = useState([]);

    // call backend and store object in variable
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchCandleChartData();
                const fetchedData = response.data.data;

                const seriesData = fetchedData.map(point => ({
                    x: new Date(point.x),
                    y: [point.open, point.high, point.low, point.close]
                }));


                setChartOptions({
                    chart: {
                        type: 'candlestick',
                        height: 350,
                        toolbar: {
                            show: true
                        }
                    },
                    xaxis: {
                        type: 'datetime'
                    },
                    yaxis: {
                        tooltip: {
                            enabled: true
                        }
                    }
                });

                setChartSeries([{
                    name: 'Candlestick Chart',
                    data: seriesData
                }]);
            } catch (error) {
                console.error('Error fetching candlestick data:', error);
            }
        };

        fetchData();
    }, []);

    //return html with chart object
    return (
        <div style={{position: 'relative', minHeight: '100vh'}}>
            <Navbar/>
            <div style={{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{fontSize: "3em", textAlign: 'center'}}>Candle Chart</h1>
                <div style={{display: 'flex', alignItems: 'stretch', width: '100%', maxWidth: '1200px'}}>
                    <div style={{width: '70%', maxWidth: '800px'}}>
                         {chartSeries.length > 0 && (
            <ApexCharts
                options={chartOptions}
                series={chartSeries}
                type="candlestick"
                height={350}
            />
        )}
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
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <h2 style={{color: "black", fontSize: "2em"}}>Overview</h2>
                        </div>
                        <p style={{color: "black"}}>Overview of chart data.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
