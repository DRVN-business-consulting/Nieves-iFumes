import React from 'react';

export const themes = {
  light: {
    lightcoral: {
      background: { backgroundColor: '#fff' },
      progress: {backgroundColor:'lightcoral'},
      border: {borderColor: 'lightcoral'},
      text: { color: 'black' },
    },
    lightblue: {
      background: { backgroundColor: '#fff' },
      progress: {backgroundColor:'lightblue'},
      border: {borderColor: 'lightblue'},
      text: { color: 'black' },
    },
    goldenrod: {
      background: { backgroundColor: '#fff' },
      progress: {backgroundColor:'goldenrod'},
      border: {borderColor: 'goldenrod'},
      text: { color: 'black' },
    },
  },
  dark: {
    lightcoral: {
      background: { backgroundColor: '#000' },
      progress: {backgroundColor:'lightcoral'},
      border: {borderColor: 'lightcoral'},
      text: { color: 'white' },
    },
    lightblue: {
      background: { backgroundColor: '#000' },
      progress: {backgroundColor:'lightblue'},
      border: {borderColor: 'lightblue'},
      text: { color: 'white' },
    },
    goldenrod: {
      background: { backgroundColor: '#000' },
      progress: {backgroundColor:'goldenrod'},
      border: {borderColor: 'goldenrod'},
      text: { color: 'white' },
    },
  },
};

export const ThemeContext = React.createContext();
