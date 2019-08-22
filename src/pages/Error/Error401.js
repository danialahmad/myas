import React from 'react';
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

class Error401 extends React.Component {
    render() {
        return (
            <div className="page-wrapper"> 
                <div className="error-content">
                    <div className="d-table">
                        <div className="d-tablecell">
                            <Icon.Frown 
                                className="icon"
                            />
                            <h1>401</h1>
                            <h4>Unauthorized</h4>
                            <p>The page you are looking for is not authorized!</p>
                            <Link to="/" className="back-link">
                                Back to Home Page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error401;