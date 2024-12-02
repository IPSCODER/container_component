import axios from "axios"
import React, { useEffect,useState } from "react"

export const DataSource = ({getData = () => {},resourceName,children}) =>{
    const [resource, setResource] = useState(null)

    useEffect(()=>{
        (async () =>{
         const data = await getData();
         setResource(data)   
        })()
    },[])

    // return children(user)

    return (
        <>
        {React.Children.map(children,child =>{
            if (React.isValidElement(child)) {
                return React.cloneElement(child,{[resourceName]: resource})}
            return child;
        })}
        </>
    )

}