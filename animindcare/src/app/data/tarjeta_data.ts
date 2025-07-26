import { IconType } from 'react-icons';
import { FaDog, FaUserMd, FaPrescriptionBottleAlt, FaClipboardList, FaFileMedical, FaStar, FaStore} from 'react-icons/fa'; 
export interface TarjetaData{
    Icon: IconType; 
    title: string; 
    onClick?: () => void; 
    linkText: string; 
    href?: string; 
}
export const tarjetaData : TarjetaData[]= [
    {
        Icon: FaClipboardList,
        title: "Historial Medico",
        linkText: "Ver Detalles",
        href: "/Ver detalles" 
    },
    {
        Icon: FaUserMd,
        title: "Acceso Veterinario",
        linkText: "Ingreso Veterinario",
        href: "/Ingresar" 
    },
    {
        Icon: FaDog,
        title: "Perfil Mascota",
        linkText: "Ver Mascotas",
        href: "/Mascota" 
    },
    {
        Icon: FaFileMedical,
        title: "Informes y Recetas",
        linkText: "Ver informes y detalles",
        href: "/Ver informes" 
    },
    {
        Icon: FaStar,
        title: "Calificacion de los Veterinarios",
        linkText: "Calificar Veterinarios",
        href: "/Calificar" 
    },
    {
        Icon: FaStore,
        title: "Marketplace",
        linkText: "Ver Productos",
        href: "/marketplace"
    }
]