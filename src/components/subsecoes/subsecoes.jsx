import PropTypes from 'prop-types'
import { Cardapio } from '../cardapio/cardapio'


export const Subsecoes = ({ produtos, subSecao }) => {
    const produtosFiltrados = produtos.filter((prod) => prod.subSecao === subSecao);
    
    
    
    return (
        <div className=''>
            <div>
                <h3>{subSecao}</h3>
                <hr className=''/>
            </div>
            <Cardapio produtos={produtosFiltrados}/>

        </div>
    );
};

Subsecoes.propTypes = {
    produtos : PropTypes.array.isRequired,
    subSecao : PropTypes.string,
};

