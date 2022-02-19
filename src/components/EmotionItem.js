const EmotionItem = ({ emotion_id, emotion_img, emotion_descript, onClick }) => (
  <div className='EmotionItem' onClick={() => onClick(emotion_id)}>
    <img src={emotion_img} alt='' />
  </div>
);

export default EmotionItem;
