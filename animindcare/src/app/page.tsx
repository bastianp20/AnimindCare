'useClient'; 
import { useState} from 'react'; 

export default function Homepage(){
  const [mostrarModal, setMostrarModal] = useState(false); 

  const HandleVeterinarioClick = () =>{
    setMostrarModal(true); {/* con el click se muestra el modal*/ }
  }  
}

