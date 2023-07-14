type Props = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const ContentSection = ({ children, className = '', ...props }: Props) => {
    return (
        <div {...props} className={`bg-white shadow-lg rounded-lg px-8 py-8 ${className}`}>
            {children}
        </div>
    );
};

export default ContentSection;
