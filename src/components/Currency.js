import React, { useContext } from 'react';
import { AppContext} from '../context/AppContext'; 
const Currency = () => {
    const { dispatch} = useContext(AppContext);
    const changeCurrency = (val) =>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    }
    // const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className="input-group-prepend" style={{ display: 'flex' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">currency (Pound)</label>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => changeCurrency(event.target.value)}>
                <option defaultValue value="$" name="Add">$ Dollar</option>
                <option value="£" name="Reduce">£ Pound</option>
                <option value="€" name="Reduce">€ Euro</option>
                <option value="₹" name="Reduce">₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default Currency;
