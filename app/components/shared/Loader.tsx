'use client';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

const Loader = () => {
    const isLoading = useSelector((state: any) => state.shared.isLoading);
    const loaderClassName = `opacity-70 fixed min-w-full min-h-full bg-white flex justify-center items-center ${isLoading ? 'flex' : 'hidden'}`;

    return (
        <div className={loaderClassName}>
            <Spin delay={500} />
        </div>
    );
};

export default Loader;
