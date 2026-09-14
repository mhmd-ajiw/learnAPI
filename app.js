function ambilSuhu(kota, callback){
    setTimeout( function(){
        callback(suhu);
    }, 1500);
}

ambilSuhu('Semarang', function(32, city) {
    console.log(`suhu di ${city} : ${suhu}°C`);
});