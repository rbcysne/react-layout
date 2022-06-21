import './styles.css';

const Button = (props: { texto: String }) => {
    return (
        <button className="btn btn-container">
            <h6>{ props.texto }</h6>
        </button>
    );
};

export default Button;
