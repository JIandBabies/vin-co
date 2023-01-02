import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const Window = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const Inner = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AddressModal = ({ setVisible, handleComplete }) => {
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Window>
      <Inner>
        <button type="button" onClick={onClose}>
          X
        </button>
        <DaumPostcode onComplete={handleComplete} />
      </Inner>
    </Window>
  );
};
export default AddressModal;
