export const putColor = (colorName) => {
    console.log(`putColor got the parameter ${colorName}`);
    return{
        type: 'SET_COLOR',
        color: colorName
    }
}