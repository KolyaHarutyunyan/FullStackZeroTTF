import clsx from "clsx";

const Button = ({ className, label, ...props }) => {
  return (
    <button className={clsx(className, "button")} {...props}>
      {label}
    </button>
  );
};

export default Button;
