import {data} from '../data/data.js'

export function addTask(dataObj) {
    data.push(dataObj);
    console.log(dataObj)
}
