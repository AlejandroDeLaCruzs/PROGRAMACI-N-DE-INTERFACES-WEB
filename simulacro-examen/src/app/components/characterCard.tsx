type Params = {
    id: string,
    img: string,
    name: string
}

export const CharacterCard = ({id, img, name}: Params) => {
    return (
        <div>
            <img src={img}/>
            <h3>{name}</h3>
        </div>
    );
}