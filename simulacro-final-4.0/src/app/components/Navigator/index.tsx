import Link from "next/link";
import "./style.css"



export const Navigator = () => {
    type Menu = {
        name: string,
        ruta: string,
    };

    const menuOpciones: Menu[] = [
        {
            name: "Home",
            ruta: "/",
        },
        {
            name: "Characters",
            ruta: "/characters",
        },
        {
            name: "Locations",
            ruta: "/locations",
        },
        {
            name: "Episodes",
            ruta: "/episodes",
        }
    ];

    return (
        <div className="menu">
            {menuOpciones && menuOpciones.map((opcion) => <Link href={opcion.ruta} className="opcion" key={opcion.ruta}>{opcion.name}</Link>)}
        </div>
    )
}