import PropTypes from "prop-types"
import './cards.css'
import lanche1 from '../../assets/lanche1.jpg'
export const Card = ({
    titulo = 'Sem titulo informado',
    foto = lanche1,
    descricao,
    valor,
    preparo
}) => {
    return (
        <main className="main">
            <h3>{titulo}</h3>
            <img src= {foto} width= {300} alt="lanche 1"/>
            <p className="descricao">{descricao}</p>
            <p>{valor}</p>
            <p>{preparo}</p>
            
            
        </main>
     

    );
};

Card.propTypes  = {
    nome: PropTypes.string.isRequired , 
    foto: PropTypes.any.isRequired,
    valor: PropTypes.number.isRequired,
    tempo: PropTypes.number.isRequired,
    preparo: PropTypes.number.isRequired
};



