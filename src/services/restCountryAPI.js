const axios = require('axios');

const restCountryAPI = axios.create({
    baseURL: "https://restcountries.com/v3.1/alpha/"
});

const methods = {
    getContry: async (code) => {
        try {
            const response = await restCountryAPI.get(code);

            if (response.status !== 200){
                return response.status;
            }

            return response.data;

        }catch (err) {
            console.log(err)
        }
    }
}

module.exports = methods;