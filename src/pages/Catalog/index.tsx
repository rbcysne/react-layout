import './styles.css';

import Button from 'components/Button';
import ProductCard from 'components/ProductCard';


const Catalog = () => {
    return (
        <>
            <div className="container my-4">
                <div className="base-card catalog-search-container">
                    <input />
                    <Button texto="Buscar" />
                </div>
            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Catalog;
