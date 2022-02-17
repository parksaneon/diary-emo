const DiaryItem = ({ id, emotion, content, date }) => {
  return (
    <li className='DiaryItem'>
      <div className={`emotion_img_wrapper emotion_img_wrapper_${emotion}`}>
        <img src={process.env.PUBLIC_URL + `assets/emotion/${emotion}.png`} alt='' />
      </div>
      <div></div>
      <div></div>
    </li>
  );
};

export default DiaryItem;
