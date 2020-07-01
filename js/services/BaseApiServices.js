const RequestMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

const getHeaders = () => {
    let customHeaders = {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
    };
    return customHeaders;
};

const get = (url) => {
    return callApi(RequestMethod.GET, url);
};

const callApi = (requestMethod, url, headers = getHeaders()) => {

    let requestInit = {
        headers: headers,
        method: requestMethod,
        credentials: 'same-origin'
    };

    return fetch(`${url}`, requestInit)
        .then(response => {
            const statusCode = response.status;
            return new Promise((resolve, reject) => {
                response.json().then((response) => {
                    resolve(response);
                }).catch((error) => {
                    console.log("result ", error);
                    reject("Invalid Response!")
                });
            });
        }).catch((error) => {
            console.log("error ", error)
        });
};

export default {
    get
}