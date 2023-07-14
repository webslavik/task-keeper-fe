import { Checkbox as BaseCheckbox } from 'antd';

type Props = {
    checked: boolean;
    onChange: (event: any) => void;
}

const Checkbox = (props: Props) => {
    return (
        <BaseCheckbox {...props} />
    );
};

export default Checkbox;
