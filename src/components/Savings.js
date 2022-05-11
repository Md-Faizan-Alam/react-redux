import { useState } from "react";
import { useDispatch } from "react-redux"
import { updateBudget, updateExpenses, setSavings } from "../actions/SavingsAction";

export default function Savings(){
    const dispatch = useDispatch();

    const [budget,setBudget] = useState(0);
    const [expenses,setExpenses] = useState(0);

    
    // The state is not getting updated to the provided state until the next call of the handleChange function

    function handleChange(e){
        e.preventDefault();
        if(e.target.id==='budget'){
            setBudget(e.target.value);
            dispatch(updateBudget(budget));
        }
        else if(e.target.id==='expenses'){
            setExpenses(e.target.value);
            dispatch(updateExpenses(expenses));
        }
        dispatch(setSavings(budget-expenses));
        console.log(budget);
        console.log(expenses);
    }

    return(
        <div>
            <div className="writePad my-5">
            <label htmlFor="budget">Budget: &nbsp; </label>
            <input type="number" id="budget" defaultValue={0} onChange={handleChange}/>
            </div>
            <div className="writePad my-5">
            <label htmlFor="expenses">Expenses: &nbsp; </label>
            <input type="number" id="expenses" defaultValue={0} onChange={handleChange}/>
            </div>
            <div className="writePad my-5">
            <label htmlFor="savings">Amount Remaining: &nbsp; </label>
            <input type="number" value={budget-expenses} readOnly id="savings"/>
            </div>
        </div>
    )
}