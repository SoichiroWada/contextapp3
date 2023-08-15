import { createContext, useState } from 'react';

export const HeadlineContext = createContext(null);

const HeadlineContextProvider = (props) => {
    const [ headline, setHeadline ] = useState("Context App")
    const handleClick = () => {
        let content = document.getElementById("navh1").innerHTML;
        console.log(content)
        content === "Context App" ? setHeadline("Book Lists") : setHeadline("Context App");
    }
    return (
        <HeadlineContext.Provider value={{ headline, handleClick }}>
            {props.children}
        </HeadlineContext.Provider>
    );
}
 
export default HeadlineContextProvider;
