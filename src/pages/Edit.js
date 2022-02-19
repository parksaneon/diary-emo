import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import DiaryEditor from '../components/DiaryEditor';

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  const { id } = useParams();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(diary => parseInt(diary.id) === parseInt(id));
      targetDiary ? setOriginData(targetDiary) : navigate('/', { replace: true });
    }
  }, [diaryList, id]);

  return (
    <div>
      <h1>{originData && <DiaryEditor isEdit={true} originData={originData} />}</h1>
    </div>
  );
};

export default Edit;
