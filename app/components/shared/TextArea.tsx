import { Input } from 'antd';
import Text from './Text';
import ErrorMessage from './ErrorMessage';

const { TextArea: BaseTextArea } = Input;

type Props = {
    name: string;
    value: string;
    label: string;
    rows?: number;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    meta: {
        touched: boolean;
        error: string;
    };
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextArea = ({ name, rows = 4, label, placeholder, value, type, disabled = false, meta, className = '', onChange, onBlur }: Props) => {
    const textAreaProps = {
        name,
        value,
        type,
        placeholder,
        disabled,
        rows,
        onChange,
        onBlur,
    };

    return (
        <label className={`block ${className}`}>
            <Text>{label}</Text>
            <BaseTextArea {...textAreaProps}/>

            {meta.touched && meta.error && (
                <ErrorMessage message={meta.error} className='mt-1' />
            )}
        </label>
    );
};

export default TextArea;
