fetch("https://api.icndb.com/jokes/random")
.then(response =>{
    return response.json()
})
.then(data =>{
    console.log(data)
    var tw = new Typewriter("#jokes", { cursor: { type: "underscore" }, tick: 50 });
tw.type('"' + data.value.joke + '"');
})


document.getElementById("btn").addEventListener('click', function(){ //fetch another punchline on click
    document.getElementById('jokes').innerHTML = " "
    fetch("http://api.icndb.com/jokes/random")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        console.log(data)
        var tw = new Typewriter("#jokes", { cursor: { type: "underscore" }, tick: 50 });
    tw.type('"' + data.value.joke + '"');
    })
})
