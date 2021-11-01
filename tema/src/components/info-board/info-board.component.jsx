import React from "react";

const InfoBoard = ({ tableData }) => {
    return (
        <div id="info-board">
            <table>
                <thead>
                    <tr>
                        <th>
                            Nume
                        </th>
                        <th>
                            Numar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(({ nume, nrTelefon }) => (

                            <tr>
                                <td>{nume}</td>
                                <td>{nrTelefon}</td>
                            </tr>

                        )
                    )
                }
            </tbody>
        </table>
    </div>
);
};

export default InfoBoard;
