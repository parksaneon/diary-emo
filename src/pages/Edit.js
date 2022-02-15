import { useSearchParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>Edit</h1>
      <p>일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: 'Park' })}>QS 바꾸기</button>
      <button onClick={() => navigate('/home')}>Home으로 가기</button>
    </div>
  );
};

export default Edit;
