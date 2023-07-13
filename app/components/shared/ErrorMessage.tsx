import Text from './Text';

type Props = {
    message: string;
    className?: string;
}

const ErrorMessage = ({ message, className = '' }: Props) => {
    return <Text className={`text-red-600 ${className}`}>{message}</Text>;
};

export default ErrorMessage;
