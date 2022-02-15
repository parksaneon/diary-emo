const MyButton = ({ text, type, onClick }) => {
  type = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button className={`MyButton MyButton_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default',
};

export default MyButton;
