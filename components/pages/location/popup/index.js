import styled from "styled-components";
import { ButtonCustom } from "../../../ResponsiveHeader/onDesktop/style";

const WrapperFullScreen = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 102;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  height: 500px;
  width: 500px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  .modal-img {
    width: 100%;
    height: 450px;
    padding: 10px;
    background: #000;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  }
  .modal-footer {
    display: block;
    float: right;
    padding: 6px;
  }
`;
const PopUp = ({ open, handleClick, url }) => {
  return (
    <WrapperFullScreen onClick={() => handleClick(!open)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div className="modal-img">
          <img src={`${url}`} alt="" />
        </div>
        <div className="modal-footer">
          <ButtonCustom onClick={() => handleClick(!open)}>Close</ButtonCustom>
        </div>
      </Modal>
    </WrapperFullScreen>
  );
};
export default PopUp;
