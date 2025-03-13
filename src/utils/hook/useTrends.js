import {useEffect, useState} from "react";
import axios from "../axios.js";

const useTrends = () => {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        (async () => {
            try{
                const data = (await axios.get("/tweet/trends")).data
                setTrends(data)

            }catch(err){
                console.error(err)
            }
        })()
    },[])

    return {
        trends
    }
}

export default useTrends;