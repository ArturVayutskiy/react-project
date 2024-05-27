import { useState, useEffect } from 'react';

const Clicker = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const savedObject = window.localStorage.getItem('saved-clicks-first');

  useEffect(() => {
    console.log('First updated: ', first);
  }, [first]);

  useEffect(() => {
    console.log('Second updated: ', second);
  }, [second]);

  useEffect(() => {
    console.log('Total clicks: ', first + second);
  }, [first, second]);

  useEffect(() => {
    window.localStorage.setItem(
      'saved-clicks-first',
      JSON.stringify({ first })
    );
  }, [first]);

  useEffect(() => {
    window.localStorage.setItem(
      'saved-clicks-second',
      JSON.stringify({ second })
    );
  }, [second]);

  return (
    <>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
      <button onClick={() => setFirst(0) + setSecond(0)}>Reset</button>
    </>
  );
};

//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

export default Clicker;
