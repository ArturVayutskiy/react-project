import clsx from "clsx";
import css from "./Alert.module.css";


  export const Alert = ({ variant, children, outlined, elevated }) => {
    return (
      <p
        className={clsx(css[variant], {
          [css.isOutlined]: outlined,
          [css.isElevated]: elevated,
        })}
      >
        {children}
      </p>
    );
  };
