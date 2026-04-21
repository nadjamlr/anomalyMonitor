// Author: Nadja Müller
// Anomaly Data Fetch via Nasa API

const API_NASA_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10';


// Anomaly Type
export interface Anomaly {
    copyright: string;
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string
}


// Fetch Anomalies
export async function fetchAnomalies(): Promise<Anomaly[]> {
    const response = await fetch(API_NASA_URL)
    if (!response.ok) {
        console.error('NASA API error:', response.status)
        return []
    }
    const data = await response.json()
    return Array.isArray(data) ? data : [data]
}


const anomalyService = {
  fetchAnomalies,
};


export default anomalyService;
