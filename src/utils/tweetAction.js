import axios from "./axios.js";

export const likeTweet = async (id_tweet) => {
    try {
        await axios.put(`tweet/like/${id_tweet}`)
    } catch (err) {
        console.error(err)
    }
}

export const postTweet = async (content, file) => {
    try {
        const data = new FormData();
        data.append("content", content);
        if (file)
            data.append("media", file);
        await axios.post(`tweet`, {
            content,
            file
        }, {
            headers: file ? {"Content-Type": "multipart/form-data"} : {},

        })

    } catch (err) {
        console.error(err)
    }
}