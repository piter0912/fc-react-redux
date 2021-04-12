import React, {useEffect, useState} from 'react';
import Header from './Header';
import Content from './Content';
import '../styles/content.css';
import '../styles/header.css';

function App() {

  const [incomesList, setIncomesList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const [incomesTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [balance, setBalance] = useState(0);
  const [inEdit, setInEdit] = useState({id: 0, type: ''});
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);

  useEffect(() => {
    setIncomeTotal(incomesList.reduce((sum, el) => sum + el.amount, 0))
  },[incomesList]);

  useEffect(() => {
    setExpensesTotal(expensesList.reduce((sum, el) => sum + el.amount, 0))
  },[expensesList]);

  useEffect(() => {
    setBalance(incomesTotal-expensesTotal);
  },[incomesTotal, expensesTotal]);

  useEffect(() => {
    setFormInputs();
  },[inEdit]);

  const handleIncomeNameChange = (e) => {
    setIncomeName(e.target.value);
  }

  const handleIncomeAmountChange = (e) => {
    setIncomeAmount(e.target.value);
  } 

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  }

  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  }
  
  const handleAdd = (type) => {
    const name = type==="income" ? incomeName : expenseName;
    const amount = type==="income" ? Number(incomeAmount) : Number(expenseAmount);
    if(!checkInputs(type,name,amount)){
      return false;
    }
    if(inEdit.id !== 0) {      
      handleSave(type, name, amount);
      setInEdit({id: 0, type: ''});
    } else {
      const newListElement = {id: Date.now(), text: name, amount: amount};
      if(type==='income') {
        setIncomesList([...incomesList, newListElement]);
      } else {
        setExpensesList([...expensesList, newListElement]);
      }
    }
    blankInputs();
  }

  const handleDelete = (type,idToDel) => {
    if(inEdit.id !== 0) {
      return false;
    }
    let list = type==='income' ? incomesList : expensesList;
    const newList = list.filter(el => el.id !== idToDel);
    type==='income' ? setIncomesList(newList) : setExpensesList(newList);
  }

  const handleEdit = (type, id) => {
    if(inEdit.id !== 0) {
      return false;
    }
    setInEdit({id, type});
  }

  const handleSave = (type, name, amount) => {
    let list = type==='income' ? incomesList : expensesList;
    const newList = list.map(el => {
      if(el.id===inEdit.id) {
        return {id: el.id, text: name, amount}
      } else {
        return el;
      }
    })
    type === 'income' ? setIncomesList(newList) : setExpensesList(newList);
  }

  const blankInputs = () => {
    setIncomeName('');
    setIncomeAmount(0);
    setExpenseName('');
    setExpenseAmount(0);
  } 

  const checkInputs = (type, name, amount) => {
    const nameOk = name.length>=3;
    const amountOk = amount>0;
    const typePl = type === "income" ? 'przychodu' : 'wydatku';
    if(!nameOk && !amountOk) {
      alert(`Należy podać poprawną nazwę ${typePl} (min. 3 znaki) oraz kwotę (większą od zera)`);
    } else if(!nameOk) {
        alert(`Nazwa ${typePl} musi mieć min. 3 znaki.`);
    } else if(!amountOk) {
        alert(`Kwota ${typePl} musi być większa od zera`);
    } else {
        return true;
    }
    return false;
  }

  const setFormInputs = () => {
    if(inEdit.id === 0 || inEdit.type==='') {
      return false;
    }
    let list = inEdit.type==='income' ? incomesList : expensesList;
    const element = list.find((el) => el.id === inEdit.id);
    if(element === undefined) {
      return false;
    }    
    if(inEdit.type==='income') {
      setIncomeName(element.text);
      setIncomeAmount(element.amount);
    } else {
      setExpenseName(element.text);
      setExpenseAmount(element.amount);
    }
  }

  return (
    <>
        <Header 
          balance={balance}
        />
        <Content 
          onAdd={handleAdd} 
          onEdit={handleEdit}
          onDelete={handleDelete}
          inEdit={inEdit}
          onIncomeNameChange={handleIncomeNameChange}
          onIncomeAmountChange={handleIncomeAmountChange}
          onExpenseNameChange={handleExpenseNameChange}
          onExpenseAmountChange={handleExpenseAmountChange}
          incomesList={incomesList}
          incomesTotal={incomesTotal}
          expensesList={expensesList}
          expensesTotal={expensesTotal}
          incomeName={incomeName}
          incomeAmount={incomeAmount}
          expenseName={expenseName}
          expenseAmount={expenseAmount}
        />
    </>
  );
}

export default App;