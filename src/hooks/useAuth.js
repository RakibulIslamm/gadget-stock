import { useContext } from "react"
import { AuthContext } from "../components/Context/ContextProvider"


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;