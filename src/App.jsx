import {useState, useEffect} from "react";
import Disconnected from "./template/Disconnected.jsx";
import Conencted from "./template/Connected.jsx";


const App = () => {
  const [login, setLogin] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token")
        setLogin(Boolean(token))
    }, [])


  if (login === null) {
    return <div>Chargement...</div>;
  }

    if (!login) {
        return <Disconnected/>
    } else
        return <Conencted/>

  }
export default App;