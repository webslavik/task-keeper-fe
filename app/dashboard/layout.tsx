type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className='max-w-2xl mx-auto mt-16'>
            {children}
        </div>
    );
};

export default DashboardLayout;
