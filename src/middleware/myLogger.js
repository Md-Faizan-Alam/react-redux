const myLogger = store =>{
    return next => {
        return action =>{
            console.log('myLogger has been called');
            return next(action);
        }
    }
}

export default myLogger;