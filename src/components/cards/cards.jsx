import PropTypes from "prop-types"

function Card () {
    return (
        <div>
            <h1></h1>
            <img src=""/>
            
            
            
        </div>
    );
};

Card.propTypes  = {
    nome: PropTypes.string.isRequired , 
    foto: PropTypes.any.isRequired,
    valor: PropTypes.number.isRequired,
    tempo: PropTypes.number.isRequired,
}

export default Card