// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import { Alert } from './Alert';
import './App.css';
import BookList from './Booklist';
import Clicker from './Clicker';
import Interval from './Interval';
import LoginForm from './UncontrolledLoginForm';
import { Product } from './Products';
import SearchBar from './SearchBar';
import { User } from './UserMenu';
import LangSwitcher from './Selector';
import { Radio } from './RadioButton';
import { Checkbox } from './Checkbox';
import { ControlledLoginForm } from './ControlledForm';
import { FeedbackForm } from './FormikForm';
import AsyncFunction from './AsyncFunction';

const favoriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

const Card = ({ children }) => {
  return <div>{children}</div>;
};
// Колбек-функція для обробки сабміту форми
const handleLogin = userData => {
  // Виконуємо необхідні операції з даними
  console.log(userData);
};

export default function Apps() {
  const [lang, setLang] = useState('uk');
  return (
    <div>
      <AsyncFunction />
      <FeedbackForm />
      <ControlledLoginForm />
      <Checkbox />
      <Radio />
      <>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </>

      <SearchBar />

      <Interval />
      <Clicker />
      <User />

      <h1>Best selling</h1>

      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <>
        <h1>Books of the week</h1>
        <BookList books={favoriteBooks} />
      </>
      <Alert variant="info">Please update your email!</Alert>
      <Alert variant="error">There was an error during transaction!</Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase!
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
