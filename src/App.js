import Header from './layouts/header/header.js';
import Login from './layouts/login/login.js';
import './sass/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Login />
      </main>
    </div>
  );
}

export default App;
