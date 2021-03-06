import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';
import AddItemForm from '../add-item-form';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this._idCounter = 1;
    this.state = {
      todoData: [
        this._createTodoItem(`Drink Coffee`),
        this._createTodoItem(`Build React App`),
        this._createTodoItem(`Have a Lunch`),
      ],
      searchQuery: ``,
      currentFilter: `all`,
    };

    this.deleteListItemHandler = this.deleteListItemHandler.bind(this);
    this.addListItemHandler = this.addListItemHandler.bind(this);
    this.doneItemToggleHandler = this.doneItemToggleHandler.bind(this);
    this.importantItemToggleHandler = this.importantItemToggleHandler.bind(this);
    this.searchInputChangeHandler = this.searchInputChangeHandler.bind(this);
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
  }

  _createTodoItem(textContent) {
    return {
      textContent,
      isImportant: false,
      isDone: false,
      id: this._idCounter++,
    }
  }

  _toggleProperty(array, id, propName) {
    const index = array.findIndex((item) => item.id === id);

    const oldItem = array[index];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1)
    ];
  }

  _searchItems(items, searchQuery) {
    if (searchQuery.length === 0) {
      return items;
    }

    return items.filter((item) => item.textContent.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
  }

  _filterItems(items, filter) {
    switch (filter) {
      case `all`:
        return items;
      case `active`:
        return items.filter((item) => !item.isDone);
      case `done`:
        return items.filter((item) => item.isDone);
      default:
        return items;
    }
  }

  searchInputChangeHandler(searchQuery) {
    this.setState({searchQuery});
  }

  filterChangeHandler(filter) {
    this.setState({currentFilter: filter});
  }

  doneItemToggleHandler(id) {
    this.setState(({todoData}) => {
      return {
        todoData: this._toggleProperty(todoData, id, `isDone`)
      }
    });
  }

  importantItemToggleHandler(id) {
    this.setState(({todoData}) => {
      return {
        todoData: this._toggleProperty(todoData, id, `isImportant`)
      }
    });
  }

  deleteListItemHandler(id) {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((item) => item.id === id);

      return {
        todoData: [
          ...todoData.slice(0, index),
          ...todoData.slice(index + 1)
        ]
      }
    });
  }

  addListItemHandler(text) {
    this.setState(({todoData}) => {
      return {
        todoData: [
          ...todoData,
          this._createTodoItem(text)
        ]
      }
    });
  }

  render() {
    const { todoData, searchQuery, currentFilter } = this.state;

    const doneAmount = todoData.filter((item) => item.isDone).length;
    const todoAmount = todoData.length - doneAmount;

    const visibleItems = this._filterItems(this._searchItems(todoData, searchQuery), currentFilter);

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoAmount} done={doneAmount} />
        <div className='top-panel d-flex'>
          <SearchPanel onSearchInputChange={this.searchInputChangeHandler} />
          <StatusFilter filter={currentFilter} onFilterChange={this.filterChangeHandler} />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleteButtonClick={this.deleteListItemHandler}
          onDoneToggleClick={this.doneItemToggleHandler}
          onImportantToggleClick={this.importantItemToggleHandler}
        />
        <AddItemForm onAddButtonClick={this.addListItemHandler} />
      </div>
    );
  }
}
