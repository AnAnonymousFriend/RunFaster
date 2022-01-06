import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 16200,
    duration: '30s',
};

export default function () {
    http.get('http://192.168.153.129:8030/ping');
    sleep(1);
}