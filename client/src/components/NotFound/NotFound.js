import { Link } from 'react-router-dom'
import './NotFound.css';

export const NotFound = () => {
    

    return (
        <div className="not-found">
    <div className="container">
        <h2>Oops!</h2>
        <h1>404</h1>
        <div className="content">
            <p>The page you are looking for might have been removed,<br/>
                had its name changed or is temporarily unavailable</p>
                <Link to="/home">Go to homepage </Link>
        </div>
    </div>
</div>
        );
}