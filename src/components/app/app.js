import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'JoKhn Cab', salary: '1800', increase: true, id: 1},
        {name: 'Peter Pak', salary: '1000', increase: true, id: 2},
        {name: 'Jonny Deppa', salary: '3000', increase: false, id: 3},
    
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      //1 Cпособ фильтрации
/*    const index = data.findIndex(elem => elem.id === id); */           
/*    const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after]; */

      return {
        //1 Cпособ фильтрации
        /* data: newArr */

        // 2 Способ фильтрации 
        data: data.filter(item => item.id !==id)
      }

    })
  }

  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          />
          <EmployeesAddForm/>
      </div>
    );
  }



}

export default App;
