export interface DropdownProp {
    key: number;
    text: string,
    icon?: React.ReactElement;
}

const DropdownStyle: React.FC<{ props: DropdownProp[] }> = ({ props }) => {
    return (
        <ul tabIndex={0} className="dropdown-content menu bg-gray-200 rounded-box z-[1] w-52 p-2 shadow my-4">
            {props.map((prop, index) => (
                <li key={index} ><div className="text-black">{prop.icon} {prop.text}</div></li>
            ))}
        </ul>
    )
}

export default DropdownStyle
