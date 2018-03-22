import axios from 'axios';
import { url, api_key } from '../config/config';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const city_url = `${url}${api_key}&q=${city},us`;
    const request = axios.get(city_url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
};