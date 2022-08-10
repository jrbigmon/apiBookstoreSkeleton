const axios = require('axios');

const restCountryAPI = axios.create({
    baseURL: "https://restcountries.com/v3.1/alpha/"
});

const methods = {
    getCountry: async (code) => {
        try {
            const response = await restCountryAPI.get(code);

            if (response.status !== 200){
                return response.status;
            }

            return response.data[0].flags.png;

        }catch (err) {
            new Error(err.message = "API restCountry failed!");

            return res.status(500).json(err.message);
        }
    }
}

module.exports = methods;