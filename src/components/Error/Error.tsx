import './Error.css'

interface IError {
  error: string
}

const Error: React.FC<IError> = ({error}) => {
    return (
    <p className= 'message'>{error}</p>
    )} 


export default Error


