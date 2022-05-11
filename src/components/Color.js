import { useDispatch, useSelector } from "react-redux";
import { putColor } from "../actions/ColorAction";

function Color(){
    const color = useSelector(state => state);
    const dispatch = useDispatch();

    function handleClick(e){
        dispatch(putColor(e.target.id));
    }

    return(
        <div className="App w-50 m-auto py-5 my-5" style={{height:300, backgroundColor:'#5eed5e'}}>
            <h2 className="container col-10">My favorite color is: {color}</h2>
            <div className="container col-10 my-3">
                <div className="mx-2 d-inline">
                <input type="radio" name="color" id="Red" onClick={handleClick}/>
                <label htmlFor="Red">Red</label>
                </div>
                <div className="mx-2 d-inline">
                <input type="radio" name="color" id="Blue" onClick={handleClick}/>
                <label htmlFor="Blue">Blue</label>
                </div>
                <div className="mx-2 d-inline">
                <input type="radio" name="color" id="Green" onClick={handleClick}/>
                <label htmlFor="Green">Green</label>
                </div>
                <div className="mx-2 d-inline">
                <input type="radio" name="color" id="Orange" onClick={handleClick}/>
                <label htmlFor="Orange">Orange</label>
                </div>
            </div>
        </div>
    );
}

export default Color;