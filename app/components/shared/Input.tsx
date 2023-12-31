import { Input as BaseInput } from 'antd';
import Text from './Text';
import ErrorMessage from './ErrorMessage';

type Props = {
    name: string;
    value: string;
    disabled?: boolean;
    label: string;
    placeholder?: string;
    type?: string;
    meta: {
        touched: boolean;
        error: string;
    };
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ name, label, placeholder, value, type, meta, disabled = false, className = '', onChange, onBlur }: Props) => {
    const inputProps = {
        name,
        value,
        type,
        placeholder,
        disabled,
        onChange,
        onBlur,
    };

    return (
        <label className={`block ${className}`}>
            <Text>{label}</Text>
            <BaseInput {...inputProps} />

            {meta.touched && meta.error && (
                <ErrorMessage message={meta.error} className='mt-1' />
            )}
        </label>
    );
};

export default Input;
