import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = (props) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[props.buttonType]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
