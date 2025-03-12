import axios from "../axios.js";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewTweet, setTweet} from "../reducer/tweet.js";
import socket from "../socket.js";

const useAllTweet = () => {
    const tweets = useSelector((state) => state.tweet.value)
    const dispatch = useDispatch()


    const getCurrentUser = async () => {
        try {
            const data = (await axios.get("tweet/all")).data
            dispatch(setTweet(data))
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        (async () => {
            await getCurrentUser()
            socket.on("tweet_posted", (data) => {
                console.log("Teste")
                dispatch(addNewTweet(data))
            })

        })()

        return () => {
            socket.off("tweet_posted")
        }
    }, [])

    return {
        tweets
    }
}


export default useAllTweet;