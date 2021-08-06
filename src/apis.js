import axios from 'axios';
import { serverUrl } from './consts';
const getCurrentDeviceConfigURL = `${serverUrl}/api/gateway/getcurrentdeviceconfig`;
const setDeviceConfigURL = `${serverUrl}/api/gateway/setdeviceconfig`;

export function getCurrentDeviceConfig() {
    axios.get(`${getCurrentDeviceConfigURL}`)
    .then((response) => {
        if (response !== undefined && response !== null) {
           console.log("apis/getCurrentDeviceConfig: Device config Data obtained");
        }
        else {
            console.log("apis/getCurrentDeviceConfig: Got invalid(null or undefined) data", response.data);
        }
    })
    .catch((error) => {
        console.log("apis/getCurrentDeviceConfig: Error occured while fetching Device config");
        throw (error);
    });
}

export function setDeviceConfig(data,gateway) {
    return axios.post(`${setDeviceConfigURL}`,{ data, gateway });
}

