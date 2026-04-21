// Author: Nadja Müller
// Anomaly Context – zentraler Datenspeicher der App


import { createContext, useContext, useState } from "react";
import myAnomaliesData from '../data/myAnomalies.json';
import allAnomaliesData from '../data/allAnomalies.json';


// Define type
const allAnomalies = allAnomaliesData.allanomalies
type Anomaly = typeof allAnomalies[0]


const AnomalyContext = createContext({
    allAnomalies,
    myAnomalies: [] as Anomaly[],
    getAnomalyById: (id: string) => allAnomalies.find((a) => a.id === id),
    addAnomaly: (_anomaly: Anomaly) => {},
})

// Custom Hook
export const useAnomaly = () => useContext(AnomalyContext)


// Context Provider
export function AnomalyProvider({ children }: { children: React.ReactNode }) {

    const [myAnomalies, setMyAnomalies] = useState<Anomaly[]>(
        myAnomaliesData.myanomalies
    )

    function addAnomaly(anomaly: Anomaly) {
        const alreadySaved = myAnomalies.find(a => a.id === anomaly.id)
        if (!alreadySaved) {
            setMyAnomalies(prev => [...prev, anomaly])
        }
    }

    function getAnomalyById(id: string) {
        return [...myAnomalies, ...allAnomalies].find(a => a.id === id)
    }

    return (
        <AnomalyContext.Provider value={{ allAnomalies, myAnomalies, addAnomaly, getAnomalyById }}>
            {children}
        </AnomalyContext.Provider>
    )
}
