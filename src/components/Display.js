import "./css/display.css";

function Display(props) {

    let onResetButtonClick = () => {
        props.resetCurrentValues();
    }

    return (
        <div className="display">
            <div>
                <span>
                    <div>
                        <h3>Tip Amount</h3>
                        <p>/ preson</p>
                    </div>
                    <h1>${props.amountTip}</h1>
                </span>
                <span>
                    <div>
                        <h3>Total Amount</h3>
                        <p>/ preson</p>
                    </div>
                    <h1>${props.total}</h1>
                </span>
            </div>
            <button onClick={onResetButtonClick} className={props.amountTip > 0 ? "active" : null}>RESET</button>
        </div>
    );
}

export default Display;