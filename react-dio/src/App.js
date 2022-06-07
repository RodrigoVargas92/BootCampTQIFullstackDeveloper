import Item  from "./components/item";
import Card from "./components/card";
const App = () => {
  return (
    <>
    <h1>Minha primeira aplicação em React</h1>
    <ul>      
        <Item>Item1</Item>
        <Item>Item2</Item>
        <Item>Item3</Item>
    </ul>
    <Card/>
    </>
  )
}
export default App;
