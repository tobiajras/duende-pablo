const BackgroundBlurs = ({ children }) => {
  return (
    <div className='background-blur'>
      <div className='background-blur-2'>
        <div className='background-blur-3'>
          <div className='background-blur-4'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBlurs;
