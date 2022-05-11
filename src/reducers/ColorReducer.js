const ColorReducer = (color = '',action) => {
    switch (action.type){
        case 'SET_COLOR':
            console.log(`color changed to ${action.color}`);
            return color = action.color;
        default:
            return color;
    }
}

export default ColorReducer;