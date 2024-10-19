import "./button.scss";

export default function Button({
  text,
  onClick,
  textColor,
  backgroundColor,
  typeofButton,
  borderRadius,
  width,
  padding
}: ButtonProps) {
  return (
    <button
      className={`${backgroundColor ? `${backgroundColor}` : "bg-primary"} ${borderRadius} ${width} ${padding}`}
      type={typeofButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
