const getServerUrl = () => {
    if(process.env.ENVIRONMENT === "local") {
        return  "http://localhost:5847"
    }
    return process.env.REACT_APP_API_URL;
}

const server = {
    getServerUrl
}
export default server