import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeContextProvider from './contexts/ThemeContext';
import HeadlineContextProvider from './contexts/HeadlineContext';

function App() {
  return (
    <div className="App">

      <ThemeContextProvider>
        <AuthContextProvider>
        <HeadlineContextProvider>
            <Navbar></Navbar>
        </HeadlineContextProvider>
          <BookContextProvider>
            <BookList></BookList>
          </BookContextProvider>
          <ThemeToggle></ThemeToggle>
        </AuthContextProvider>
      </ThemeContextProvider>


    </div>
  );
}

export default App;
