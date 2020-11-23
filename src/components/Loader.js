import hamster from './hamster.gif'

const Loader = () => {
    return (
        <div className="loader">
             <img src={hamster} alt="Loading" />
             <h1>retrieving information...</h1>
        </div>
    )
}

export default Loader 