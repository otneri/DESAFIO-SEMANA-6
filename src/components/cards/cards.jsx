import PropTypes from "prop-types"
import './cards.css'


export const Card = ({ produto }) => {
    <div className="">
        <img className="" src= {produto.img} alt="Foto prato" height={200} />

        <div className="">
            <h2 className="">{produto.nome}</h2>
            <p className="">{produto.descricao}</p>
        </div>

        <div className="">
            <strong>
            {`R$ ${produto.valor.toFixed(2).replace('.', `,`)}`}
            </strong>

            <p>{produto.tempoPreparo}</p> 
        </div>
    </div>
};

Card.propTypes  = {
    produto: PropTypes.shape ({
        nome: PropTypes.string.isRequired , 
        img: PropTypes.any,
        descricao : PropTypes.string.isRequired,
        valor: PropTypes.number.isRequired,
        tempoPreparo: PropTypes.string.isRequired
    })  
};



