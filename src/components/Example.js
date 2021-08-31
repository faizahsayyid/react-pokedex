import { useParams } from 'react-router-dom'

const Example = () => {
    let { pokemon } = useParams();
    return (
        <div style={{marginTop: 100}}>
            {pokemon}
        </div>
    )
}

export default Example
