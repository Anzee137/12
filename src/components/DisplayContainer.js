import Display from "./Display";
import { connect } from "react-redux";
import { resetCurrentValues } from "./../redux/reducer";


function DisplayContainer(props) {

    let countAmountTip = (bill, tip, numberOfPeople) => {
        let sum = (bill * tip / numberOfPeople / 100).toFixed(2);
        if ((isNaN(sum) || !(isFinite(sum)) || (sum <= 0 || numberOfPeople % 1 !== 0))) {
            return 0..toFixed(2);
        }
        return sum
    }

    let total = (bill, tip, numberOfPeople) => {
        let sum = (bill * (100 + +tip) / numberOfPeople / 100).toFixed(2);
        if ((isNaN(sum) || !(isFinite(sum)) || (sum <= 0 || numberOfPeople % 1 !== 0))) {
            return 0..toFixed(2);
        }

        return sum;
    }

    return <Display resetCurrentValues={props.resetCurrentValues} amountTip={countAmountTip(props.currentBill, props.currentTip, props.currentNumberOfPeople)} total={total(props.currentBill, props.currentTip, props.currentNumberOfPeople)} />
}

let mapStateToProps = (state) => ({
    currentTip: state.currentTip,
    currentBill: state.currentBill,
    currentNumberOfPeople: state.currentNumberOfPeople,
})

export default connect(mapStateToProps, { resetCurrentValues })(DisplayContainer);