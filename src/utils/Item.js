const Item = ({title, stock, cost, image}) => {
    return(
        <>
            <section>
                <div>
                    <img src={image} alt={title}/>
                </div>
                <div>
                    <h1>{title}</h1>
                    <h2>{cost}</h2>
                    <p>{stock}</p>
                </div>
            </section>
        </>
    )
}

export default Item;