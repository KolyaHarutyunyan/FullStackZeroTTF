import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(({ className, label, ...props }, ref) => {
    return (
        <label className={clsx(className, "label")}>
            {label}
            <input ref={ref} {...props} />
        </label>
    );
});

export default Input;