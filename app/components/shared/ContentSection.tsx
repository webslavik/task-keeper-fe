type Props = {
    children: React.ReactNode;
    className?: string;
}

const ContentSection = ({ children, className = '' }: Props) => {
    return (
        <div className={`bg-white shadow-lg rounded-lg px-8 py-8 ${className}`}>
            {children}
        </div>
    );
};

export default ContentSection;
