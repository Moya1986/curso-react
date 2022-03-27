import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemCount/ItemCount.js';
import Item from './components/Item/Item';

function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }
  return (
<>
<NavBar/>
<ItemListContainer greeting={'Lista de productos'}/>
<ItemCount initial={0} stock={25} onAdd={onAdd}/>
<Item />
</>
);
}



export default App;
