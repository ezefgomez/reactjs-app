import Title from './Title'

const CardArticulos = ({title, price, description, saludar}) => {

    return (
        <div>
            <div style={{width: "200px", height: "250px", margin: "20px", display: "inline-block", backgroundColor: "grey"}}>
                <h2 style={{textAlign:"center"}}> {title} </h2>
                <Title title={title} />
                <h4 style={{textAlign:"center"}}> {price} </h4>
                <p style={{textAlign:"center"}}> {description} </p>
                <button onClick={saludar}>Saludar</button>
            </div>
        </div>
    )

}
/*
export default function cardArticulos(props) {
    return (
        <div>
            <div style={{width: "200px", height: "250px", background: props.backgroundColor, margin: "20px", display: "inline-block"}}>
                <h2 style={{textAlign:"center"}}> {props.title} </h2>
                <h4 style={{textAlign:"center"}}> {props.price} </h4>
                <p style={{textAlign:"center"}}> {props.description} </p>
            </div>
        </div>
    )
}
*/

export default CardArticulos