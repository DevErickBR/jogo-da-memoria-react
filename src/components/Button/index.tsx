import * as C from './styles'

type Props = {
    label: string;
    icon?: any;
    OnClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ label, icon, OnClick }: Props) => {
    return (
        <C.Container onClick={OnClick}>
            {icon &&
                <C.IconArea>
                    <C.Icon src={icon} />
                </C.IconArea>
            }

            <C.Label>
                {label}
            </C.Label>
        </C.Container>
    );
}