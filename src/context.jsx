/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

let url = 'https://jsonplaceholder.typicode.com/users';


const AppProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);



    const fetchUsers = async (url) => {
        setLoading(true);
        try {
            const resp = await fetch(url);
            const users = await resp.json();
            setLoading(false)
            setData(users);

        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers(url)
    }, [])
    

    return <AppContext.Provider value={{
        data
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}