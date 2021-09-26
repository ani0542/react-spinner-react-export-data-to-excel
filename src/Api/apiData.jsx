import axios from 'axios';

const baseUrl = 'https://covid19.mathdro.id/api/';

export const getCountries = async() => {
    try {
        // const {data} = await axios.get(baseUrl + 'countries');
        const {data} = await axios.get(baseUrl+"countries")
        console.log(data,'data')
        console.log(data.countries,"data.countries")
        return data.countries;
    } catch (error) {
        throw error;
    }
}


export const getData = async (country) => {
    try {
        const {data} = await axios.get(baseUrl + 'countries/' + country + "/confirmed");
        // console.log(data,'data')
        return data;
    } catch (error) {
        throw error;
    }
}