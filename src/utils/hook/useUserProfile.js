import {useEffect, useState} from "react";
import axios from "../axios.js";

const useUserProfile = (id) => {
    const [user, setUser] = useState(null)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        (async () => {
            if (!id)
                return
            try {
                const data = (await axios.get(`users/${id}`)).data
                setTweets(data.tweets)
                setUser(data.user)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [id]);


    return {
        user,
        tweets,
    }
}

export default useUserProfile;