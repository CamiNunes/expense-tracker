import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';


const App = () => {
  const [list, setList] = useState(items);/* lista completa(todos os meses) */
  const [filteredList, setFilteredList] = useState<Item[]>([]);/* lista filtrada com os registros do mês corrente */
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); /* função que pega o mês atual */
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);


  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList)    {
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;   
      } else{
        incomeCount += filteredList[i].value;  
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList])

  const handleMonthChange=(newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema Fiananceiro
        </C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense}/>  

        {/* Área de inserção */}

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;