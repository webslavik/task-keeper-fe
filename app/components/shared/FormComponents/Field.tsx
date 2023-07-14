import { Field as BaseField } from 'formik';

type Props = {
    name: string;
    children: (props: any) => JSX.Element;
}

const Field = ({ name, children }: Props) => {
    return (
        <BaseField name={name}>
            {(props: any) => {
                const { field } = props;

                return children({
                    ...props,
                    ...field,
                });
            }}
        </BaseField>
    );
};

export default Field;
