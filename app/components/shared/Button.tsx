type Props = {
    type: string;
    children: React.ReactNode;
    className?: string;
    isSubmit?: boolean;
}

const BUTTON_TYPES = {
    primary: 'bg-indigo-500 text-white',
    secondary: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
};

const Button = ({ type = BUTTON_TYPES.primary, children, className = '', isSubmit, ...props}: Props) => {
    const buttonType = isSubmit ? 'submit' : 'button';
    const buttonClassName = `${type} py-2 px-3 text-sm font-semibold rounded-md shadow focus:outline-none ${className}`;

    return (
        <button {...props} type={buttonType} className={buttonClassName}>
            {children}
        </button>
    )
};

export { BUTTON_TYPES };
export default Button;
