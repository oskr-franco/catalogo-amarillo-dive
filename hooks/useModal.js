import useStore from "../store/useStore";

function useModal() {
  const type = 'modal';
  const [state, dispatch] = useStore();
  function openModal(value) {
    const func = 'openModal';
    dispatch({type, func,value })
  }

  function closeModal() {
    const func = 'closeModal';
    dispatch({type: type, func })
  }
  return {
    modalState: state[type],
    openModal,
    closeModal,
  }
}

export default useModal;
