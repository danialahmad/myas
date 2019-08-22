import React from 'react';
import HomeAdmin from './Home-admin';
import HomeUser from './Home-user';
import AuthHelper from '../../helpers/AuthHelper';
class Home extends React.Component{
    render(){
        if(AuthHelper.isAuthorized('ADMIN')){
            return <HomeAdmin/>
        }
        return <HomeUser/>
    }
}
export default Home;