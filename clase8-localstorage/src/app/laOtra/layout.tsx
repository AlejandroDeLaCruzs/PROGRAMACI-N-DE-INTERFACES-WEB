import React from "react"
import "./layout.css"

type Params = {
    children: React.ReactNode;
}

const OtroLayout = ({children}: Params) => {
    return (
        <div className="fondo">
            <h2>esto es desde el otro layout </h2>
            {children}
        </div>
    )
}

export default OtroLayout;