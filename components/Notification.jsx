import {createPortal} from 'react-dom';

const Notification = (props) => {
  const {status, title, message} = props;

  return createPortal(
    <div
      className={`flex fixed bottom-0 left-0 h-[5px] w-full text-[#dfdbe6] bg-[#343036] justify-between items-center px-2 sm:px-6 py-9 shadow-2xl md:w-[40rem] md:left-[calc(50%-20rem)] md:rounded-t-lg gap-x-4 ${
        status === 'success' && 'bg-[rgb(18,189,75)] text-[rgb(52,48,54)]'
      } ${status === 'error' && 'bg-[rgb(161,12,74)]'}`}>
      <h2 className='text-2xl w-fit'>{title}</h2>
      <p className='max-w-[20rem] sm:max-w-none'> {message}</p>
    </div>,
    document.getElementById('notifications')
  );
};
export default Notification;
