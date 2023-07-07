type Props = {
    message: string;
    className?: string;
}

const ErrorMessage = ({ message, className = '' }: Props) => {
    return <div className={`text-sm text-red-600 ${className}`}>{message}</div>
};

export default ErrorMessage;
