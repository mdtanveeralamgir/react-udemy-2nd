const Tab = (props) => {
  const ButtonContainer = props.buttonContainer;
  return (
    <>
      <ButtonContainer>{props.buttons}</ButtonContainer>
      {props.children}
    </>
  );
};

export default Tab;
