import PropTypes from "prop-types"
import { Card } from '../cards/cards'

export const Cardapio = ({ produtos }) => {

    return(
        <ul className="">
            {produtos.map((produto) => {
                <li className="" key={produto.id}>
                    <Card produto={produto}/>
                </li>
            })}
        </ul>
    )
}


Cardapio.propTypes = {
    produtos : PropTypes.array.isRequired
};

