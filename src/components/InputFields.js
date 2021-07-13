import style from "./css/inputFields.module.css";
import dollarIcon from "./../images/icon-dollar.svg";
import personIcon from "./../images/icon-person.svg";
import { useState } from "react";




function InputFields(props) {

    let [active, setActive] = useState();
    let [error, setError] = useState(false);


    let onInputChange = (e) => {
        let str = "";
        if ((e.target.value[1] !== "." || e.target.value[1] !== ".") && e.target.value[0] === "0" && e.target.value.length >= 2) {
            str = e.target.value.slice(1, e.target.value.length);
        } else {
            str = e.target.value;
        }

        if (e.target.name === "currentNumberOfPeople" && (str <= 0 || str % 1 !== 0)) {
            setError(true);
        } else if (e.target.name === "currentNumberOfPeople" && (str > 0)) {
            setError(false);
        }

        props.setCurrentNumber(str, e.target.name);
    }

    let onTipButtonClick = (number, tip) => {
        setActive(number);
        props.setCurrentNumber(tip, "currentTip");

    }


    return (
        <div className={style.inputFields}>
            <div>
                <h3>Bill</h3>
                <img className={style.icon} src={dollarIcon} alt="" />
                <input placeholder="0" type="number" className={style.input} value={props.currentBill} onChange={onInputChange} name="currentBill" />
            </div>
            <div className={style.middleBox}>
                <h3>Selected Tip %</h3>
                <div className={style.selectTip}>
                    <button className={active === 1 && props.currentTip > 0 ? style.active : null} onClick={() => { onTipButtonClick(1, 5) }}><strong>5% </strong></button>
                    <button className={active === 2 && props.currentTip > 0 ? style.active : null} onClick={() => { onTipButtonClick(2, 10) }}><strong>10%</strong></button>
                    <button className={active === 3 && props.currentTip > 0 ? style.active : null} onClick={() => { onTipButtonClick(3, 15) }}><strong>15%</strong></button>
                    <button className={active === 4 && props.currentTip > 0 ? style.active : null} onClick={() => { onTipButtonClick(4, 25) }}><strong>25%</strong></button>
                    <button className={active === 5 && props.currentTip > 0 ? style.active : null} onClick={() => { onTipButtonClick(5, 50) }}><strong>50%</strong></button>
                    <input onClick={() => { onTipButtonClick(6, props.currentTip) }} value={props.currentTip} type="number" min="0" placeholder="Custom" name="currentTip" onChange={onInputChange} />
                </div>
            </div>
            <div>
                <h3>Number of people</h3>
                {error ? <p className={style.errorText}>Should be integer and more than 0</p> : null}
                <img className={style.icon} src={personIcon} alt="" />
                <input placeholder="0" min="1" type="number" className={error ? `${style.input} ${style.errorInput}` : `${style.input}`} value={props.currentNumberOfPeople} name="currentNumberOfPeople" onChange={onInputChange} />
            </div>
        </div>
    );
}

export default InputFields;