interface ItemInfoProps {
    label: string;
    value: string;
}

interface ItemInfoListProps {
    items: ItemInfoProps[];
}

const ItemInfo = ({ items }: ItemInfoListProps) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="flex justify-between">
                    <p className="text-xl text-black text-opacity-50">{item.label}:</p>
                    <p className="text-xl text-black text-opacity-50">{item.value}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemInfo