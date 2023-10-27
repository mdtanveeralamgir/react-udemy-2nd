const Tab = ({ children, buttons, buttonContainer = "menu" }) => {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tab;
