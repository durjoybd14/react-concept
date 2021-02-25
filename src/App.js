import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const friends = [{ name: 'naim', age: 24 }, { name: 'shoshe', age: 22 }, { name: 'naima', age: 21 }, { name: 'durjoy', age: 23 }];
  const [names, setnames] = useState([])
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then(res => res.json())
      .then(data => setnames(data))
  }, [])
  return (
    <div className="App">
      {
        friends.map(friend => <FriendList name={friend.name} key={friend.name} age={friend.age}></FriendList>)
      }

      {
        names.map(name => <NameList name={name.name} key={name.id} phone={name.phone}></NameList>)
      }



    </div>
  );
}

function FriendList(props) {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);

  const mystyle = {
    border: '2px solid blue',
    padding: '20px',
    margin: '10px auto',
    fontSize: '20px',
    width: '70%'
  }
  const { name, age } = props;

  return (
    <div style={mystyle}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Count: {count}</p>
      <p>Count: {count * 10}</p>
      <button onClick={handleCount}>click me</button>
    </div>
  )
}

function NameList(props) {
  const mystyle = {
    border: '2px solid blue',
    padding: '20px',
    margin: '10px auto',
    fontSize: '20px',
    width: '70%'
  }
  return (
    <div style={mystyle}>
      <h2>Name:{props.name} </h2>
      <p>Phone: {props.phone} </p>
    </div>
  )
}



export default App;
