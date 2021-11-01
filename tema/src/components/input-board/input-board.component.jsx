import React, { useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";

const InputBoard = ({ addData, clearAllData }) => {
    const [inputs, setInputs] = useState({
        nume: "",
        nrTelefon: ""
    });

    const handleSubmit = event => {
        event.preventDefault();
        let errors = "";

        if (inputs.nrTelefon.length < 10) {
            errors += "Numarul de telefon este invalid!\n";
        }

        if (inputs.nrTelefon.length === 0) {
            errors += "Spatiul 'numar telefon' nu poate fi gol!\n";
        }

        if (inputs.nume.length === 0) {
            errors += "Spatiul 'nume' nu poate fi gol!\n";
        }

        if (!errors) addData({ ...inputs });
        else alert(errors);
    };

    const handleInput = event => {
        const { name, value } = event.target;

        if (name === "nrTelefon") {
            if (value.length === 11) return;
        }

        setInputs({
            ...inputs,
            [name]: value.toString()
        });
    };

    const handleDelete = event => {
        event.preventDefault();
        clearAllData();
    };

    return (
        <div id="input-board">
            <form onSubmit={handleSubmit}>
                <div className="form-inputs-wrapper">
                    <FormInput
                        type="text"
                        name="nume"
                        label="Nume"
                        onChange={handleInput}
                        value={inputs.name}
                        />
                    <FormInput
                        type="number"
                        name="nrTelefon"
                        label="Numar Telefon"
                        onChange={handleInput}
                        value={inputs.nrTelefon}
                        />
                </div>
                <div className="form-buttons">
                    <button type="submit" name="submit">Submit</button>
                    <button name="delete" onClick={handleDelete}>Delete</button>
                </div>
            </form>
        </div>
    );
};

export default InputBoard;
