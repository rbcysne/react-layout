import { ReactComponent as HomeImage } from 'assets/images/car-header.svg';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="base-card home-card">
                    <div className="home-content-container">
                        <>
                            <h1>O carro perfeito para você</h1>
                            <p>
                                Conheça os nossos carros e dê mais um passo na
                                realização do seu sonho
                            </p>
                        </>
                    </div>
                    <div className="home-image-container">
                        
                        <HomeImage />
                    </div>
                </div>
                <div className="base-card home-button-container">
                        <Link to="/catalog">
                            <Button texto={"Ver Catálogo"}/>
                        </Link>
                    <span>Comece a agora a navegar</span>
                </div>
            </div>
        </>
    );
};

export default Home;
