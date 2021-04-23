import Liste from "./Liste"



const Attrezzatura = () => {

    return (
        <div>
            <div className="row no-gutters">
                <div className="col-md-6">
                    <Liste tipo="attrezzatura" filtro="Fotocamera"/>
                </div>
                <div className="col-md-6">
                    <Liste tipo="attrezzatura" filtro="Obiettivo"/>
                </div>
            </div>
        </div>
    )
}

export default Attrezzatura;