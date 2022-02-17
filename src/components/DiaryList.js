import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';

const sortOptionList = [
  { value: 'lastest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' }
];

const filterOptionList = [
  { value: 'all', name: '전부다' },
  { value: 'good', name: '좋은 감정만' },
  { value: 'bad', name: '안좋은 감정만' }
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {optionList.map(({ name }, idx) => (
        <option key={idx}>{name}</option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState('lastest');
  const [filter, setFilter] = useState('all');

  const getProcessedDiaryList = () => {
    const filterCallBack = ({ emotion }) => (filter === 'good' ? parseInt(emotion) <= 3 : parseInt(emotion) > 3);
    const compare = (a, b) =>
      sortType === 'lastest' ? parseInt(b.date) - parseInt(a.date) : parseInt(a.date) - parseInt(b.date);

    const copyList = [...diaryList]; // JSON.parse(JSON.stringify(diaryList));
    const filteredList = filter === 'all' ? copyList : copyList.filter(filterCallBack);

    return copyList.sort(compare);
  };

  return (
    <ul>
      <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
      <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
      <MyButton type={'positive'} text={'새 일기 쓰기'} onClick={() => navigate('/new')} />
      {getProcessedDiaryList().map(({ id, content, emotion }) => (
        <li key={id}>
          {content} {emotion}
        </li>
      ))}
    </ul>
  );
};

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList;
