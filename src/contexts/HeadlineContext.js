import { createContext, useState } from 'react';

export const HeadlineContext = createContext(null);

const HeadlineContextProvider = (props) => {
    const [ headline, setHeadline ] = useState("Context App")
    const handleClick = () => {
        console.log(document.getElementById("navh1").innerHTML)
        let content = document.getElementById("navh1").innerHTML;
        if (content === "Context App") {
            setHeadline("Book Lists");
        } else {setHeadline("Context App");}
    }
    return (
        <HeadlineContext.Provider value={{ headline, handleClick }}>
            {props.children}
        </HeadlineContext.Provider>
    );
}
 
export default HeadlineContextProvider;
