'use strict';
import { useGetTasksQuery } from '../store/services/task';

const DashboardPage = () => {
    const { data, error, isLoading } = useGetTasksQuery();

    return (
        <div>
        <h1>Dashboard</h1>
        </div>
    );
};

export default DashboardPage;
