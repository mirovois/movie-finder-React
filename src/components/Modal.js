import React from 'react';
import "./Modal.css";
import {FaTimes} from 'react-icons/fa';
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import YouTube from 'react-youtube';

const opts = {
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1
    }
  }

function Modal({title,trailer,setUrl}) {
    const{isModalOpen,closeModal} = useContext(GlobalContext);
    console.log(isModalOpen);
    const handleClose = () =>{
        setUrl('');
        closeModal();



    }
    return (
        <div className={`${isModalOpen ? 'modal__overlay show__modal' : 'modal__overlay'}`}>
        <div className="modal__container">
            <YouTube videoId={trailer} opts={opts}/>


            <h3>{title}</h3>
            <button className="btn__modal-close" onClick={handleClose}>
                <FaTimes />
            </button>
        </div>
        </div>
    )
}

export default Modal;
