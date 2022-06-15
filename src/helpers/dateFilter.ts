/*Arquivo com lista de funções para trabalhar com Data*/
import { Item } from '../types/Item';

/*função que pega o mês corrente */
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

/*filtrar a lista baseado no mês */
export const filterListByMonth = (list: Item[], date: string): Item[] =>{
  let newList: Item[] = [];
  let [year, month] = date.split('-')

  for(let i in list){
    if(list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() + 1) === parseInt(month))
    {
      console.log(list[i].date.getMonth() + 1);
      newList.push(list[i]);
    }
  }
  
  return newList;
}

const addZeroToDate = (dayOrMonth: number): string => {
  if(dayOrMonth < 10){
    return `0${dayOrMonth}`;
  } else {
    return `${dayOrMonth}`;
  }

}

export const formatDate = (date: Date): string =>{
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();   
  
  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembor'];

  return `${months[parseInt(month)-1]} de ${year}`;
}