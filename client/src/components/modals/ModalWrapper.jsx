import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../state/actions/';
import { ModalTitle } from '../ComponentBits.jsx';

const ModalWrapper = ({ title, children, name }) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [bottomPos, setBottomPos] = useState('0px')
  const dispatch = useDispatch();

  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModal(name));
    }
  };

  // ... position of scroll-more indicator ...
  const handleScroll = (e) => {
    if (e.target === e.currentTarget) {
      let el = e.target;
      if (el.scrollHeight - el.scrollTop === el.clientHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
        setBottomPos(-el.scrollTop)
      }
    }
  };

  return (
    <div className="container">

      <div onClick={closeHandler} className="row justify-content-center my-modal-backdrop no-gutters">

        <div className="col-11 col-md-6 my-modal" onScroll={handleScroll}>

          <div className="col-12 position-absolute mt-3 pointer text-right">
            <i onClick={closeHandler} className="material-icons">close</i>
          </div>

          <div className="row no-gutters pb-5">

            <div className="col-12 mt-2 my-5">
              
              <ModalTitle title={title} />

              {children}

            </div>

          </div>

          {!isAtBottom &&
            <div className="scroll-more" style={{ bottom: bottomPos }} />
          }
        </div>

      </div>

    </div>

  )

};

export default ModalWrapper;