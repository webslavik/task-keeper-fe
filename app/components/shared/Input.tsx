import { Input as BaseInput } from 'antd';
import Text from './Text';
import ErrorMessage from './ErrorMessage';

type Props = {
    value: string;
    label: string;
    placeholder?: string;
    type?: string;
    field: any;
    meta: {
        touched: boolean;
        error: string;
    };
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, placeholder, value, type, field, meta, className = '' }: Props) => {
    return (
        <label className={`block ${className}`}>
            <Text>{label}</Text>
            <BaseInput {...field} type={type} value={value} placeholder={placeholder} />

            {meta.touched && meta.error && (
                <ErrorMessage message={meta.error} className='mt-1' />
            )}
        </label>
    );
};

export default Input;
