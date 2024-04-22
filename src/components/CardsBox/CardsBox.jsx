
import "./cardBox.css"


export function CardBox(props){
    return(
        <>
        <h1 className="display-5 text-center m-5">Developers</h1>
        <div className="box-of-cards">
            {props.children}
        </div>
        </>
        
    )
}