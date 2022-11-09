import ReactDOM from 'react-dom';

const BlockPortal = props => {
  const blockRef = document.getElementById(props.id);
  return ReactDOM.createPortal(props.children, blockRef);
};

BlockPortal.propTypes = {};

export default BlockPortal;
