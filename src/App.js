import React, { useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      return [action.data, ...state];
    }
    case 'REMOVE': {
      return state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((it) => (it.id === action.data.id ? action.data : it));
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current++,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  const onRemove = (targetId) => {
    dispatch({
      type: 'REMOVE',
      targetId,
    });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <BrowserRouter>
        <div className="App">
          <img src={process.env.PUBLIC_URL + '/assets/emotion1.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/assets/emotion2.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/assets/emotion3.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/assets/emotion4.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/assets/emotion5.png'} alt="" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DiaryStateContext.Provider>
  );
}

export default App;
