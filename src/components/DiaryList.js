const DiaryList = ({ diaryList }) => {
  return (
    <ul>
      {diaryList.map(diary => (
        <li key={diary.id}>{diary.content}</li>
      ))}
    </ul>
  );
};

export default DiaryList;
