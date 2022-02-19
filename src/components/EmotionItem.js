const EmotionItem = ({ emotion_id, emotion_img, emotion_descript, onClick, isSelected }) => (
  <div
    className={'EmotionItem' + isSelected ? `EmotionItem_on_${emotion_id}` : 'EmotionItem_off'}
    onClick={() => onClick(emotion_id)}
  >
    <img src={emotion_img} alt='' />
    <p>{emotion_descript}</p>
  </div>
);

export default EmotionItem;
