const SelectButton = (props) => {
  return <button onClick={props.onSelect}>{props.children}</button>;
};

export default SelectButton;
