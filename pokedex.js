
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
            poketipo("")
            pokevida("")
            pokeataque("")
            pokedefensa("")
            pokeataque2("")
            pokedefensa2("")
            pokevelocidad("")
            pokepeso("")
            pokeid("")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let hp=data.stats[0].base_stat;
            pokevida(hp);
            console.log(hp);
            let attack=data.stats[1].base_stat;
            pokeataque(attack);
            console.log(attack);
            let defense=data.stats[2].base_stat;
            pokedefensa(defense);
            console.log(defense);
            let specialAttack=data.stats[3].base_stat;
            pokeataque2(specialAttack);
            console.log(specialAttack);
            let specialDefense=data.stats[4].base_stat;
            pokedefensa2(specialDefense);
            console.log(specialDefense);
            let speed=data.stats[5].base_stat;
            pokevelocidad(speed);
            console.log(speed);
            let type=data.types[0].type.name;
            poketipo(type);
            console.log(type);
            let peso=data.weight;
            pokepeso(peso);
            console.log(peso);
            let id=data.id;
            pokeid(id);
            console.log(id);
            let body="";
            for(let i=0;i<data.abilities.length;i++){
                body+=`<tr><td>${i+1}</td><td>${data.abilities[i].ability.name}</td></tr>`
            }document.getElementById('data').innerHTML = body
            console.log(body);
            let body2="";
            for(let i=0;i<data.moves.length;i++){
                body2+=`<tr><td>${i+1}</td><td>${data.moves[i].move.name}</td></tr>`
            }document.getElementById('data2').innerHTML = body2
            console.log(body2); 
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokevida = (value) => {
    const pokehps = document.getElementById("hp");
    pokehps.value = value;
}
const pokeataque = (value) => {
    const pokeataques = document.getElementById("attack");
    pokeataques.value = value;
}
const pokedefensa = (value) => {
    const pokedefensas = document.getElementById("defense");
    pokedefensas.value = value;
}
const pokeataque2 = (value) => {
    const pokeataques2 = document.getElementById("special-attack");
    pokeataques2.value = value;
}
const pokedefensa2 = (value) => {
    const pokedefensas2 = document.getElementById("special-defense");
    pokedefensas2.value = value;
}
const pokevelocidad = (value) => {
    const pokevelocidads = document.getElementById("speed");
    pokevelocidads.value = value;
}
const poketipo = (value) => {
    const poketipos = document.getElementById("type");
    poketipos.value = value;
}
const pokepeso = (value) => {
    const pokepesos = document.getElementById("peso");
    pokepesos.value = value;
}
const pokeid = (value) => {
    const pokeids = document.getElementById("pokeid");
    pokeids.value = value;
}
