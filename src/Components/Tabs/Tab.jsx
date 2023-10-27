const Tab = (props) => {
  return (
    <>
      <menu>{props.buttons}</menu>
      {props.children}
    </>
  );
};

export default Tab;
