import axios from "./axios.js";

export const likeTweet = async (id_tweet) => {
    try {
        await axios.put(`tweet/like/${id_tweet}`)
    } catch (err) {
        console.error(err)
    }
}

export const saveTweet = async (id_tweet) => {
    try {
        await axios.put(`tweet/save/${id_tweet}`)
    } catch (err) {
        console.error(err)
    }
}

export const reTweet = async (id_tweet) => {
    try {
        await axios.put(`tweet/retweet/${id_tweet}`)
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

export const emotionTweet = async (id, image) => {
    try {
        const data = new FormData();

        const blob = await fetch(image).then((res) => res.blob());
        data.append("image", blob, "webcam.jpg");
        await axios.post(`tweet/${id}/emotion`, data, {
            headers: {"Content-Type": "multipart/form-data"},

        })

    } catch (err) {
        console.error(err)
    }
}