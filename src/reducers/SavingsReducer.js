export const budgetReducer = (budget = 0,action) => {
    switch (action.type){
        case 'SET_BUDGET':
            budget = action.value;
            return budget;
        default:
            return budget;
    }
}
export const expensesReducer = (expenses = 0,action) => {
    switch (action.type){
        case 'SET_EXPENSES':
            expenses = action.value;
            return expenses;
        default:
            return expenses;
    }
}
export const savingsReducer = (savings = 0,action) => {
    switch (action.type){
        case 'SET_SAVINGS':
            savings = action.value;
            return savings;
        default:
            return savings;
    }
}