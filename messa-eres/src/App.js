import './App.css';
import { CardList } from './components/cardList/CardList';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <CardList />
      </div>
    </div>
  );
}
