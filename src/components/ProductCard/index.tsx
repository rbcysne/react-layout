import './styles.css';

import ProductImg from 'assets/images/car-card.png';
import Button from 'components/Button';


const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>

            <div className="card-middle-container">
                <h6>Audi Supra TT</h6>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</span>
            </div>
            
            <div className="card-bottom-container">
                <Button texto="Comprar" />
            </div>
        </div>

    );
}

export default ProductCard;