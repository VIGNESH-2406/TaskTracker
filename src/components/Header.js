import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  console.log(typeof onAdd);
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button
        color={showAdd ? "red" : "green"}
        Text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Trackerrrr",
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
