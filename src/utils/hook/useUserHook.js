import axios from "../axios.js";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../reducer/user.js";

const useUserHook = () => {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()


    const getCurrentUser = async () => {
        try {

            const data = (await axios.get("/users/current")).data
            dispatch(setUser(data))
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    return {
        user
    }
}


export default useUserHook;