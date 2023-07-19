import { Avatar as BaseAvatar } from 'antd';

type Props = {
    children?: React.ReactNode;
    src?: string | React.ReactNode;
    size?: number;
    className?: string;
}

const Avatar = ({children, src, size = 48, className = ''}: Props) => {

    return (
        <BaseAvatar size={size} src={src} className={className}>
            {children}
        </BaseAvatar>
    )
};

export default Avatar;
