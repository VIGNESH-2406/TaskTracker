import propTypes from "prop-types";

const Button = ({ color, Text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {Text}
      </button>
    </div>
  );
};

export default Button;
