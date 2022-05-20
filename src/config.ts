export let API: string;
console.log(process.env.NODE_ENV, process.env)
if (process.env.NODE_ENV === 'development') {
    API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else if (process.env.NODE_ENV === 'production') {
    API = process.env.REACT_APP_PRODUCTION_API_URL!
}
