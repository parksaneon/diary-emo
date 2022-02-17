import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';

import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import DiaryList from '../components/DiaryList';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headerText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime();
    const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getTime();

    setData(diaryList.filter(diary => firstDay <= diary.date && diary.date <= lastDay));
  }, [diaryList, curDate]);

  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
  };

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
  };

  return (
    <div>
      <MyHeader
        headerText={headerText}
        leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
        rightChild={<MyButton text={'>'} onClick={increaseMonth} />}
      />
    </div>
  );
};

export default Home;
