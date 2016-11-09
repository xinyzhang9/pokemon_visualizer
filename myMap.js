var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Av2mgOB8vTomOG1V1MKWxkeS5gH-lagrb0dmSLh01f6BwU6SQfUy5W5O63eeBQwo'
    });
    add_pokemon_layer();
}

//1. define pokemon data format, create mock pokemon data
var map_items = [
	{
		"pokemon_id": 12,
		"expire": 1234567,
		"longitude": -121.9872018,
		"latitude": 37.391752
	}
]

//2. create pokemon image on map
function get_pokemon_layer_from_map_items(map_items){
	var layer = new Microsoft.Maps.Layer();
	var pushpins = [];
	for(var i in map_items){
		var map_item = map_items[i];
		var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item['latitude'],map_item['longitude']), 
			{ icon: 'images/pushpin_images/pokemon/'+map_item['pokemon_id']+'.png'});
		pushpins.push(pushpin);
	}
	layer.add(pushpins);

	return layer;
}

function add_pokemon_layer(){
	var pokemon_layer = get_pokemon_layer_from_map_items(map_items);
	map.layers.insert(pokemon_layer);
}



//3. add pokemon counter down refresh

//4. connect with REST API