import { useState } from 'react';

const sortOptionList = [
  { value: 'lastest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' }
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
  const [sortType, setSortType] = useState('lastest');

  const getProcessedDiaryList = () => {
    const compare = (a, b) =>
      sortType === 'lastest' ? parseInt(b.date) - parseInt(a.date) : parseInt(a.date) - parseInt(b.date);
    const copyList = [...diaryList]; // JSON.parse(JSON.stringify(diaryList));

    return copyList.sort(compare);
  };

  return (
    <ul>
      <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
      {getProcessedDiaryList().map(diary => (
        <li key={diary.id}>{diary.content}</li>
      ))}
    </ul>
  );
};

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList;
