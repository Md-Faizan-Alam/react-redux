export const updateBudget = (value) => {
    return{
        type: 'SET_BUDGET',
        value: value
    }
}
export const updateExpenses = (value) => {
    return{
        type: 'SET_EXPENSES',
        value: value
    }
}
export const setSavings = (value) => {
    return{
        type: 'SET_SAVINGS',
        value: value
    }
}