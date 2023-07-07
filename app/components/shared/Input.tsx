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
            <span className="block text-sm font-medium text-slate-700">{label}</span>
            <input {...field}
                type={type}
                value={value}
                placeholder={placeholder}
                className='peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none'
            />

            {meta.touched && meta.error && (
                <ErrorMessage message={meta.error} className='mt-1' />
            )}
        </label>
    )
};

export default Input;
