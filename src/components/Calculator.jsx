import { acos, asin, atan, cos, evaluate, log, log10, pi, pow, sin, sqrt, tan } from 'mathjs';
import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {

    const [screen, setScreen] = useState('0');

    function press(val) {
        if (screen === '0') {
            setScreen(val);
        } else {
            setScreen(prevScreen => prevScreen + val);
        }
    }

    // delete
    function backspace() {
        const space = String(screen);
        setScreen(space.substring(0, space.length - 1))
    }

    //calculate
    function calculate() {
        try {
            const result = evaluate(screen);
            setScreen(result.toString());
        } catch (err) {
            setScreen("Error");
        }
    }

    function sine() {
        try {
            const result = sin(parseFloat(screen) * (Math.PI / 180)); // Convert inputs from degrees to radians
            // sin calculates the angle in radians
            setScreen(result.toString());
        } catch (err) {
            setScreen("Error");
        }
    }

    function cosine() {
        try {
            const result = cos(parseFloat(screen) * (Math.PI / 180)); // Convert inputs from degrees to radians
            // sin calculates the angle in radians
            setScreen(result.toString());
        } catch (err) {
            setScreen("Error");
        }
    }

    function ttan() {
        try {
            const result = tan(parseFloat(screen) * (Math.PI / 180)); // Convert inputs from degrees to radians
            // sin calculates the angle in radians
            setScreen(result.toString());
        } catch (err) {
            setScreen("Error");
        }
    }

    function invsin() {
        try {
            const result = asin(parseFloat(screen) * (Math.PI / 180)); // Convert inputs from degrees to radians
            // sin calculates the angle in radians
            setScreen(result.toString());
        } catch (err) {
            setScreen("Error");
        }
    }

    function invcos() {
        try {
            const result = acos(parseFloat(screen) * (Math.PI / 180)); // Convert inputs from degrees to radians
            // sin calculates the angle in radians
            setScreen(result.toString());
        } catch (err) {
            setScreen("Error");
        }
    }

    function invtan() {
        try {
            const result = atan(parseFloat(screen) * (Math.PI / 180)); // Convert inputs from degrees to radians
            // sin calculates the angle in radians
            setScreen(result.toString());
        } catch (err) {
            setScreen("Error");
        }
    }

    function ln() {
        // function to calculate the natural logarithum LN of a number and log10
        try {
            const result = log(parseFloat(screen));
            setScreen(result.toString());
        }
        catch (err) {
            setScreen("Error");
        }
    }


    function loga() {
        try {
            const result = log10(parseFloat(screen));
            setScreen(result.toString());
        }
        catch (err) {
            setScreen("Error")
        }
    }

    //percentage
    function percentage() {
        try {
            const result = parseFloat(screen / 100);
            setScreen(result.toString());
        } catch (error) {
            setScreen("Error")
        }
    }

    function square() {
        try {
            const result = pow(screen, 2);
            setScreen(result.toString());
        } catch (error) {
            setScreen("Error")
        }
    }

    function cube() {
        try {
            const result = pow(screen, 3);
            setScreen(result.toString());
        } catch (error) {
            setScreen("Error")
        }
    }

    function squareroot() {
        try {
            const result = sqrt(screen);
            setScreen(result.toString());
        } catch (error) {
            setScreen("Error")
        }
    }

    function plusminus() {
        try {
            const curr = parseFloat(screen);
            const newval = -curr;
            setScreen(newval.toString());
        } catch (error) {
            setScreen("Error")
        }
    }

    function exp() {
        try {
            const result = parseFloat(pow(10, screen));
            setScreen(result.toString());
        } catch (error) {
            setScreen("Error")
        }
    }

    function handlePi() {
        try {
            setScreen(pi.toString());
        } catch (error) {
            setScreen("Error");
        }
    }

    function decimalPoint() {
        try {
            if (screen.indexOf('.') === -1) {
                // If there's no decimal point already
                setScreen(prevScreen => prevScreen + '.');
            }
        } catch (error) {
            setScreen("Error");
        }
    }









    return (
        <div className='cal-container'>
            <div className="display">
                <input type="text" id='screen' value={screen} placeholder='0' readOnly />
            </div>

            {/* buttons */}
            <div className="keys">




                <p>
                    <CalculatorButton value="sin" className="btn-upper" onClick={() => sine()} />
                    <CalculatorButton value="cos" className="btn-upper" onClick={() => cosine()} />
                    <CalculatorButton value="tan" className="btn-upper" onClick={() => ttan()} />
                    <CalculatorButton value="asin" className="btn-upper" onClick={() => invsin()} />
                    <CalculatorButton value="acos" className="btn-upper" onClick={() => invcos()} />
                </p>
                <p>
                    <CalculatorButton value="atan" className="btn-upper" onClick={() => invtan()} />
                    <CalculatorButton value="π" className="btn-upper" onClick={() => handlePi()} />
                    <CalculatorButton value="ln" className="btn-upper" onClick={() => ln()} />
                    <CalculatorButton value="log" className="btn-upper" onClick={() => loga()} />
                    <CalculatorButton value="%" className="btn-upper" onClick={() => percentage()} />
                </p>
                <p>
                    <CalculatorButton value="sqd" className="btn-upper" onClick={() => square()} />
                    <CalculatorButton value="cube" className="btn-upper" onClick={() => cube()} />
                    <CalculatorButton value="√" className="btn-upper" onClick={() => squareroot()} />
                    <CalculatorButton value="(" className="btn-upper" onClick={() => press("(")} />
                    <CalculatorButton value=")" className="btn-upper" onClick={() => press(")")} />
                </p>
                <p>
                    <CalculatorButton value="7" className="btn-num" onClick={() => press("7")} />
                    <CalculatorButton value="8" className="btn-num" onClick={() => press("8")} />
                    <CalculatorButton value="9" className="btn-num" onClick={() => press("9")} />
                    <CalculatorButton value="DEL" className="btn-red" onClick={() => backspace()} />
                    <CalculatorButton value="AC" className="btn-red" onClick={() => setScreen('0')} />
                </p>
                <p>
                    <CalculatorButton value="4" className="btn-num" onClick={() => press("4")} />
                    <CalculatorButton value="5" className="btn-num" onClick={() => press("5")} />
                    <CalculatorButton value="6" className="btn-num" onClick={() => press("6")} />
                    <CalculatorButton value="X" className="btn-opera" onClick={() => press("*")} />
                    <CalculatorButton value="/" className="btn-opera" onClick={() => press("/")} />
                </p>
                <p>
                    <CalculatorButton value="1" className="btn-num" onClick={() => press("1")} />
                    <CalculatorButton value="2" className="btn-num" onClick={() => press("2")} />
                    <CalculatorButton value="3" className="btn-num" onClick={() => press("3")} />
                    <CalculatorButton value="+" className="btn-opera" onClick={() => press("+")} />
                    <CalculatorButton value="-" className="btn-opera" onClick={() => press("-")} />
                </p>
                <p>
                    <CalculatorButton value="0" className="btn-num" onClick={() => press("0")} />
                    <CalculatorButton value="±" className="btn-opera" onClick={() => plusminus()} />
                    <CalculatorButton value="." className="btn-opera" onClick={() => decimalPoint()} />
                    <CalculatorButton value="EXP" className="btn-opera" onClick={() => exp()} />
                    <CalculatorButton value="=" className="btn-opera" onClick={() => calculate()} />
                </p>
            </div>

        </div>
    )
}

export default Calculator;