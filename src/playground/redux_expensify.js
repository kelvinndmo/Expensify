import {createStore, combineReducers} from 'redux';

//Expenses reducer
const expensesReducerDefaultState = []
const expenseReducer = (state = expensesReducerDefaultState,action) => {
    switch(action){
        default:
            return state;
    }

};
const filterReducerDefaultStore = {
    text:'',
    sort_by:'date',
    startDate:undefined,
    EndDate:undefined
}

const filterReducer = (state=filterReducerDefaultStore,action) => {
    switch(action){
        default:
            return state
    }
}

//store creation
const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    })
    )

console.log(store.getState())
const demoState = {
    expenses : [{
        id:'kelvin',
        description:'January Rent',
        note:'Final rent payment',
        amount:54500,
        createdAt:0
    }],
    filters : {
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        EndDate:undefined
    }
};