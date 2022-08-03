import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [previousCalc, setPreviousCalc] = useState("");
    const [ceState, setCeState] = useState(false);
    const [result, setResult] = useState(false);
    const operators = ["÷", "×", "-", "+", "%"];

    const clearDisplay = () => {
        setCalc("")
    }
    
    const initialState = () => {
        setCalc("");
        setPreviousCalc("");
    }

    const updateCalc = (e,value) => {
        e.stopPropagation();
        const op = operators.includes(value)
        const sizeLimit = calc.length > 8 && !op
        if (op && calc === '' || 
            op && operators.includes(calc.slice(-2,-1))
        ) {return}

        switch (value) {
            case "AC":
                initialState()
                break;
            case "=":
                setResult(true);
                setPreviousCalc(`${calc} =`);
                setCalc(eval(calc).toString());
                break;
            case sizeLimit:
                return
            default:
                op ? setCalc(`${calc} ${value} `)
                : setCalc(calc + value);
                break;
        }
    }

    return (
        <div className="calc-wrapper">
            <div className="display">
                <p className="previous-calc-text">{previousCalc}</p>
                <p className="calc-text">{calc || 0}</p>
            </div>
            <div className="btn-grid">
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="("
                    className="btn btn-dark"
                >
                    (
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value=")"
                    className="btn btn-dark"
                >
                    )
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="%"
                    className="btn btn-dark"
                >
                    %
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="AC"
                    className="btn btn-dark"
                >
                    AC
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="7"
                    className="btn btn-dark"
                >
                    7
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="8"
                    className="btn btn-dark"
                >
                    8
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="9"
                    className="btn btn-dark"
                >
                    9
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="÷"
                    className="btn btn-dark"
                >
                    ÷
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="4"
                    className="btn btn-dark"
                >
                    4
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="5"
                    className="btn btn-dark"
                >
                    5
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="6"
                    className="btn btn-dark"
                >
                    6
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="×"
                    className="btn btn-dark"
                >
                    ×
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="1"
                    className="btn btn-dark"
                >
                    1
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="2"
                    className="btn btn-dark"
                >
                    2
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="3"
                    className="btn btn-dark"
                >
                    3
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="-"
                    className="btn btn-dark"
                >
                    -
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="0"
                    className="btn btn-dark"
                >
                    0
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="."
                    className="btn btn-dark"
                >
                    .
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="="
                    className="btn btn-dark"
                >
                    =
                </button>
                <button
                    onClick={(e) => {
                        updateCalc(e,e.target.value);
                    }}
                    type="button"
                    value="+"
                    className="btn btn-dark"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Calculator;
