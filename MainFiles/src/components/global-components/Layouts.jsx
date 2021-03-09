import { React } from 'react';
const Layouts = (props) =>{
    return(
        <>
            <title> {props.pageTitle} | Donis Constuction HTML</title>
            <div>{props.children}</div>
        </>
    )
}
export default Layouts;