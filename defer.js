Function.prototype.defer = function(ms){
    return  setTimeout(this, ms) 
}
function delay(){
    return console.log(`il ritardo è di: ${ms} ms (lanciare per credere!)`)
}

let ms = 999999999
delay.defer(ms)

