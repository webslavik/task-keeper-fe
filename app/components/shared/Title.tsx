import { Typography } from 'antd';

const { Title: BasicTitle } = Typography;

type Props = {
    children: React.ReactNode;
    type?: number;
    className?: string;
}

const Title = ({ children, type = 1, className = '' }: Props) => {
    return (
        <BasicTitle level={type} className={`mt-0 mb-0 ${className}`}>
            {children}
        </BasicTitle>
    )
};

export default Title;
