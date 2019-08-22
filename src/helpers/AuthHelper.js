class AuthHelper {

    static authenticateUser(token) {
        localStorage.setItem('token', token);
    }

    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
    static deauthenticateUser() {
        localStorage.removeItem('token');
    }

    static isAuthorized(role) {
     let currentRole=['ADMIN'];
     if (typeof role === 'undefined'||role==null||role=='') {
        role="*";
      }
     if(currentRole==role||role=='*'){
         return true;
     }
     let arrRole=role.split(',');
     for(const role of currentRole){
        for(const selectedRole of arrRole){
            if(selectedRole == role)
               return true;
        }
     }


     return false;
    }
}
export default AuthHelper;