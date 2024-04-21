import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleModel } from '../../utils/modelSlice';

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onBackDrop} />;
};

const ModalOverlay = (props) => {
   
    return (
        <div className='modal'>
            <div>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    const dispatch=useDispatch();

    const onBackDrop=()=>{
        dispatch(toggleModel());
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onBackDrop={onBackDrop} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;