const capAtTen = store =>{
    return next => {
        return action =>{
            console.log('Store',store);
            return next(action);
        }
    }
}

export default capAtTen;