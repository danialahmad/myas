import React from 'react';
import {Row, Breadcrumb, Col } from 'react-bootstrap';
import Loader from '../../components/Common/Loader';
import Footer from '../Footer/Footer';
import Navigation from '../../components/Navigation/Navigation'

class HomeUser extends React.Component{
    state = {
        sideMenu: true,
        loading: true
    };

    // Loading icon false after DOM loaded
    componentDidMount() {
        this.myInterval = setInterval(() => { 
            this.setState({ loading: false });
        }, 1000); 
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    render() {
        let loader = null;
        if (this.state.loading) {
            loader = <Loader message="Loading..." />
        }
        return (
            <div className="page-wrapper">
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}
                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? '' : 'hide-sidemenu'}`}>
                    {/* Loader */}
                    {loader}
                    {/* End Loader */}
                    
                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>Home User</h1>
                            <Breadcrumb.Item to="/home">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Dashboard v.2</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}
export default HomeUser;