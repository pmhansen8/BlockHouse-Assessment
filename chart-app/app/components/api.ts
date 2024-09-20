import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

// use axios to call backend
export const fetchCandleChartData = () => {
    return axios.get(`${API_BASE_URL}/api/candlechart/`);
};

export const fetchLineChartData = () => {
    return axios.get(`${API_BASE_URL}/api/linechart/`);
};

export const fetchBarChartData = () => {
    return axios.get(`${API_BASE_URL}/api/barchart/`);
};

export const fetchPieChartData = () => {
    return axios.get(`${API_BASE_URL}/api/piechart/`);
};
