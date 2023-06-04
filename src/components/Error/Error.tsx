import "./Error.css";

interface IError {
  error: string;
  className?: string;
}

const Error: React.FC<IError> = ({ error, className }) => {
  return <p className={`message ${className}`}>{error}</p>;
};

export default Error;