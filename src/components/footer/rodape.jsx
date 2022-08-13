
import { FaBeer } from 'react-icons/fa';


import './rodape.css'
export function Rodape () {
    return (
        <div className='rodape'>
           <ul>
                <li>
                    <p>Rua dos Alfaces, nº 303 - Vila Mostarda </p>
                </li>
                
                <li>
                    <FaBeer/>
                </li>
                
                <li>
                    <p>Desenvolvido por: Otávio Neri</p>
                </li>
           </ul>
        </div>
    );
};