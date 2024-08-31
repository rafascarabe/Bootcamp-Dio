import { Fragment } from "react"

export default function Button(props){

    const { title } = props;
    return (
        
        <button>{title}</button>
    )
}