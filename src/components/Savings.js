import { useDispatch, useSelector } from "react-redux"
import { setBudget, setExpenses, setSavings } from "../actions/SavingsAction";

export default function Savings(){
    const {budget,expenses,savings} = useSelector(state => state);
    const dispatch = useDispatch();
    
    // The state is not getting updated to the provided state until the next call of the handleChange function

    function handleChange(e){
        if(e.target.id==='budget'){
            dispatch(setBudget(e.target.value));
        }
        else if(e.target.id==='expenses'){
            dispatch(setExpenses(e.target.value));
        }
        dispatch(setSavings(budget-expenses));
        console.log(budget);
        console.log(expenses);
        console.log(savings);
    }

    return(
        <div>
            <div className="writePad my-5">
            <label htmlFor="budget">Budget: &nbsp; </label>
            <input type="number" id="budget" onChange={handleChange}/>
            </div>
            <div className="writePad my-5">
            <label htmlFor="expenses">Expenses: &nbsp; </label>
            <input type="number" id="expenses" onChange={handleChange}/>
            </div>
            <div className="writePad my-5">
            <label htmlFor="savings">Amount Remaining: &nbsp; </label>
            <input type="number" value={savings} readOnly id="savings"/>
            </div>
        </div>
    )
}