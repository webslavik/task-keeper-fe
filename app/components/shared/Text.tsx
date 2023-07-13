import { Typography } from 'antd';

const { Text: BaseText } = Typography;

type Props = {
    children: React.ReactNode;
    className?: string;
}

const Text = ({ children, className = '', ...props }: Props) => {
    return (
        <BaseText {...props} className={`block ${className}`}>
            {children}
        </BaseText>
    );
};

export default Text;
