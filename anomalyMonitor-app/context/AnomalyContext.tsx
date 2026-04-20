// neue Anomalie damit erstellen 
// Funktionen mitgeben custom Hook for cleaner access


import { createContext, useContext, useState } from "react";
import myAnomaliesData from '../data/myAnomalies.json';
import allAnomaliesData from '../data/allAnomalies.json';


const myAnomalies = myAnomaliesData.myanomalies
const allAnomalies = allAnomaliesData.allanomalies


type Anomaly = typeof allAnomalies[0]       // Typ aus der JSON ableiten


// festlegen, welche Daten und Funktionen im Context verfügbar sind
const AnomalyContext = createContext({
    allAnomalies,
    myAnomalies: [] as Anomaly[],
    getAnomalyById: (id: string) => allAnomalies.find((a) => a.id === id),
    addAnomaly: (_anomaly: Anomaly) => {},
})

export const useAnomaly = () => useContext(AnomalyContext) // Custom Hook


export function AnomalyProvider({children}: {children:React.ReactNode}) {
    return (
       <AnomalyContext.Provider
            value = {useContext(AnomalyContext)}
        >
            {children}
        </AnomalyContext.Provider>
    );
}