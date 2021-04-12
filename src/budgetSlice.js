import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    incomesListNew: [],
    expensesListNew: [],
    incomesTotalNew: 0,
    expensesTotalNew: 0,
    balanceNew: 0,
    inEditNew: {id:0, type: ''},
    incomeNameNew: '',
    incomeAmountNew: 0,
    expenseNameNew: '',
    expenseAmountNew: 0
  },
  reducers: {
    setIncomesListNew: state => {
        console.log('setIncomesListNew');
    },
    setExpensesListNew: state => {
        console.log('setExpensesListNew');
    },
    setIncomesTotalNew: state => {
        console.log('setIncomesTotalNew');
    },
    setExpensesTotalNew: state => {
        console.log('setExpensesTotalNew');
    },
    setBalanceNew: state => {
        console.log('setBalanceNew');
    },
    setInEditNew: state => {
        console.log('setInEditNew');
    },
    setIncomeNameNew: state => {
        console.log('setIncomeNameNew');
    },
    setIncomeAmountNew: state => {
        console.log('setIncomeAmountNew');
    },
    setExpenseNameNew: state => {
        console.log('setExpenseNameNew');
    },
    setExpensesAmountNew: state => {
        console.log('setExpensesAmountNew');
    }
  }
})

export const { setIncomesListNew, setExpensesListNew, setIncomesTotalNew, setExpensesTotalNew, setBalanceNew, 
    setInEditNew, setIncomeNameNew, setIncomeAmountNew, setExpenseNameNew, setExpensesAmountNew } = budgetSlice.actions

export default budgetSlice.reducer