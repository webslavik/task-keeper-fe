import { Button as BaseButton } from 'antd';

type Props = {
    children: React.ReactNode;
    type?: string;
    disabled?: boolean;
    className?: string;
    href?: string;
    isLink?: boolean;
    isSubmit?: boolean;
    onClick?: () => void;
}

const BUTTON_TYPES = {
    primary: 'primary',
    danger: 'danger',
    ghost: 'ghost',
    dashed: 'dashed',
    link: 'link',
    text: 'text',
    default: 'default'
};

const Button = ({type = BUTTON_TYPES.primary, children, className = '', isSubmit, ...props }: Props) => {
    const htmlType = isSubmit ? 'submit' : 'button';

    return (
        <BaseButton {...props} htmlType={htmlType} type={type} className={`${className}`}>
            {children}
        </BaseButton>
    );
};

export { BUTTON_TYPES };
export default Button;
