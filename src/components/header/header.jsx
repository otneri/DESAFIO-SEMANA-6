import './header.css'
import logo from '../../assets/logo.png'

export function Header () {
    return (
        <div className='menu'>
            <img src={ logo } alt="logo" />
            <h1>Chiqueias Burger</h1>
            <button>Cardápio</button>
            
        </div>
    );
};

