import {AriaAttributes, ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, AriaAttributes {
}

export const Button: FC<ButtonProps> = props => {
    const {children, className, ...rest} = props;
    return (
        <button
            className={`w-min bg-neutral-400 disabled:bg-neutral-500 hover:bg-neutral-200 px-4 py-1 text-nowrap font-extrabold shadow-[inset_0_0_10px_#444] transition-colors cursor-pointer disabled:cursor-not-allowed ${className}`}
            {...rest}
        >{children}</button>
    );
};