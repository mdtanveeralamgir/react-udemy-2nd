const SelectButton = (props) => {
  let isSelected = props.selectedOne ? "active" : "";
  return (
    <button className={isSelected} onClick={props.onSelect}>
      {props.children}
    </button>
  );
};

export default SelectButton;
