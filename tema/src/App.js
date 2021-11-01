import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import InfoBoard from "./components/info-board/info-board.component.jsx";
import InputBoard from "./components/input-board/input-board.component.jsx";

const App = () => {
    const DEFAULT_INFO = [
        {
            nume: "Andrei",
            nrTelefon: "0725731294"
        },
        {
            nume: "Ioana",
            nrTelefon: "0742147566"
        }
    ];

    const [info, setInfo] = useState([]);

    const clearAllData = () => {
        if (window.confirm("Are you sure you want to delete all data?")) {
            setInfo([]);

            localStorage.setItem("info", JSON.stringify([]));
        }
    };

    const addData = (data) => {
        let mockInfo = [...info];

        mockInfo.push(data);

        setInfo(mockInfo);

        localStorage.setItem("info", JSON.stringify(mockInfo));
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("info"));

        if (data) setInfo(data)
        else setInfo(DEFAULT_INFO)
    }, []);

    return (
        <div id="app-container">
            <div id="app-content-wrapper">
                <h1>Agenda Telefonica</h1>
                <InfoBoard
                    tableData={info}
                    />
                <InputBoard
                    addData={addData}
                    clearAllData={clearAllData}
                    />
            </div>
        </div>
    );
};

export default App;
