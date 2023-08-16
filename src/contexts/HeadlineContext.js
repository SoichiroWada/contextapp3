import { createContext, useState } from 'react';

export const HeadlineContext = createContext(null);

const HeadlineContextProvider = (props) => {
    const [ headline, setHeadline ] = useState("React Context")
    const handleClick = () => {
        let content = document.getElementById("navh1").innerHTML;
        console.log(content)
        content === "React Context" ? setHeadline("Book List") : setHeadline("React Context");
    }
    return (
        <HeadlineContext.Provider value={{ headline, handleClick }}>
            {props.children}
        </HeadlineContext.Provider>
    );
}
 
export default HeadlineContextProvider;
