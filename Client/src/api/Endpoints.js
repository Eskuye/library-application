//All api urls are returned from a central object

/* 
functions are used to return endpoints url for uniformity 
and cases where url's need to be altered with parame
*/

const endpoints = {
    auth: {
        login: () => '/user/sign-in',
        signUp: () => '/user/register'
    },
    book: {
        getAllBooks: () => '/book/all'
    }
}

export default endpoints;