import ReactDOM from 'react-dom';

const NotifyPortal = props => {
  const notifyRef = document.getElementById('notifications');
  return ReactDOM.createPortal(props.children, notifyRef);
};

NotifyPortal.propTypes = {};

export default NotifyPortal;
