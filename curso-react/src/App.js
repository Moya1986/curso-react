import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemCount/ItemCount.js';

function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }
  return (
<>
<NavBar/>
<ItemListContainer greeting={'Hola Coder'}/>
<ItemCount initial={0} stock={25} onAdd={onAdd}/>
</>
);
}



export default App;
