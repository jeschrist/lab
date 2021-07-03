const _ = require('lodash');
const data = require('./json/data')

function task1(){
    let colors = require('./json/colors.json')
    console.log(_(colors)
        .map(el => Object.keys(el)[0])
        .filter(el => el.length < 6)
        .orderBy()
        .value()
    )
}

function task2(){
    let colors = require('./json/colors.json')
    console.table(_(colors)
        .map(el => { return {'color': Object.keys(el)[0], 'rgb': Object.values(el)[0].slice(0, 3)}})
        .orderBy(['color'], ['asc'])
        .value()
    )
}

function task3(){
    let users = require('./json/users.json')
    console.log(_(users)
        .filter(u => +u.address.geo.lat < 0)
        .map (el => { return {'name': el.username, 'city': el.address.city}})
        .orderBy(['city'], ['desc'])
        .value()
    )
}

function task4(){
    let clients = require('./json/clients.json').clients
    console.log(_(clients)
        .filter(u => u.address.city === "Кунгур")
        .orderBy(['gender', 'age', 'name'],  ['asc', 'desc', 'asc']) 
        .value()
    )
}
function task5(){
    let data = require('./json/data.js')
    console.log(_.orderBy(_
        .zip(data.colors, _.map(data.argb, u => rgb2hex(u)))
        .map(arr => _.zipObject(['color', 'hex_name'], arr)), ['color'], ['asc'])
    )
}

function rgb2hex(arr) {
    return "#" + ((1 << 24) + (arr[0] << 16) + (arr[1] << 8) + arr[2]).toString(16).slice(1);
}

task1()
task2()
task3()
task4()
task5()
