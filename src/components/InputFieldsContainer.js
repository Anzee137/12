import InputFields from "./InputFields";
import { connect } from "react-redux";
import { setCurrentNumber } from "./../redux/reducer";


function InputFieldsContainer(props) {

    return <InputFields {...props} />
}

let mapStateToProps = (state) => ({
    currentTip: state.currentTip,
    currentBill: state.currentBill,
    currentNumberOfPeople: state.currentNumberOfPeople,
})

export default connect(mapStateToProps, { setCurrentNumber })(InputFieldsContainer);