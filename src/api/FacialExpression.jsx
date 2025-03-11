import axios from 'axios';


const uploadFile = (image) => {

    axios.post('http://127.0.0.1:5000/upload', {
        image: image
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });

}


export default uploadFile