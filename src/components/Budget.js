import React, { useContext } from 'react';
import './budget.css';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, remaining , expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const increaseBudget = (vaL) => {
        if(vaL > 20000) {
            alert("The value cannot exceed remaining funds"+ currency +remaining);
        }
        else{
            dispatch({
                type: 'INCREMENT_BUDGET',
                payload: vaL + 10
            });
        }
  }
    const decreaseBudget  = (vaL) => {
        if(vaL <= totalExpenses) {
            alert("you cannot reduce value lower than the spending  "+ currency +totalExpenses);
        }
        else{
       dispatch({
            type: 'INCREMENT_BUDGET',
            payload: vaL - 10
        });
    }

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            {/* <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => increment(event.target.value)}>
                        </input> */}
                        <input
                        required='required'
                        id='cost'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}>
                        </input>
                        <div class="quantity-nav">
                            <button class="quantity-button quantity-up" onClick={event=> increaseBudget(budget)} fdprocessedid="q0556z8">+</button>
                            <button class="quantity-button quantity-down" onClick={event=> decreaseBudget(budget)} fdprocessedid="04gbkt">-</button>
                        </div>
        </div>
    );
};
export default Budget;
