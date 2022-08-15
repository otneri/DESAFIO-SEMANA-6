import PropTypes from 'prop-types';
import { Cardapio } from '../cardapio/cardapio'
import { Subsecoes } from '../subsecoes/subsecoes'


export const Secao = ({nome , produtos,  subSecoes}) => {
    return (
        <div className=''>    
            <div >
                <h2>{nome}</h2>
                <hr className=''/>
            </div>
            {subSecoes?.length > 0 ? (
                subSecoes.map((sub, index) => <Subsecoes key={index} produtos={produtos} subSecao={sub} />)
            ) : (
                <Cardapio produtos={produtos} />
            )}
            
        </div>
    )
}

Secao.propTypes = {
    nome: PropTypes.string.isRequired,
    produtos : PropTypes.array.isRequired,
    subsecoes : PropTypes.arrayOf(PropTypes.string)
}