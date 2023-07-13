type Props = {
    params: {
        id: string;
    };
}

const TaskPage = ({params}: Props) => {
    const {id} = params;

    return (
        <div>
            <h2>Edit a task: {id}</h2>
        </div>
    );
};

export default TaskPage;
