
export function CardItem(props) {
    return (
        <div className="card_card">
            <h2 className="card_title">{props.title}</h2>
            <p className="card_num">{props.num}</p>
        </div>
    )
}
