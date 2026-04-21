// Author: Nadja Müller
// Anomaly Context – zentraler Datenspeicher der App

import { fetchAnomalies } from "../services/AnomalyService";
import { createContext, useContext, useState, useEffect } from "react";
import myAnomaliesData from '../data/myAnomalies.json';
import { Anomaly } from "../services/AnomalyService";


const AnomalyContext = createContext({
    myAnomalies: [] as Anomaly[],
    getAnomalyByName: (title: string) => allAnomalies.find((a) => a.title === title),
    addAnomaly: (anomaly: Anomaly) => {},
})

// Custom Hook
export const useAnomaly = () => useContext(AnomalyContext)


// Context Provider
export function AnomalyProvider({ children }: { children: React.ReactNode }) {

    const [myAnomalies, setMyAnomalies] = useState<Anomaly[]>(
        myAnomaliesData.myanomalies
    )

    const [allAnomalies, setAllAnomalies] = useState<Anomaly[]>([])

    useEffect(() => {
        fetchAnomalies().then(data => setAllAnomalies(data))
    }, [])

    function addAnomaly(anomaly: Anomaly) {
        const alreadySaved = myAnomalies.find(a => a.title === anomaly.title)
        if (!alreadySaved) {
            setMyAnomalies(prev => [...prev, anomaly])
        }
    }

    function getAnomalyByName(title: string) {
        return [...myAnomalies, ...allAnomalies].find(a => a.title === title)
    }

    return (
        <AnomalyContext.Provider value={{ allAnomalies, myAnomalies, addAnomaly, getAnomalyByName }}>
            {children}
        </AnomalyContext.Provider>
    )
}
