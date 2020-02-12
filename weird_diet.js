function inspire_me() {
    var flavor_palette = document.getElementById("flavor_palette").value;

    var all_beverages = Array("coffee","black tea","green tea", "chai tea", "milk", "ribena", "hot cocoa","herbal tea","cucumber water","apple juice","cranberry juice","no-pulp orange juice","pear juice","apricot nectar","lemon water")

    var sweet_toppings = Array("cottage cheese","ice cream","pudding","peanut butter","yogurt","sherbet","tapioca","jello","italian ice")
    var sweet_fruits = Array("canned fruit","apples","applesauce","apricots","bananas","cherries","pears","peaches","plums")
    var sweet_extras = Array("butter","marshmallows","heavy cream","honey","jelly","maple syrup","cinnamon","whipped cream")
    var sweet_starches = Array("french toast","pancakes","waffles","rice pudding","cream of wheat","bread pudding","cornflakes","rice krispies","rice cakes","cake","cookies","bagels")

    var savory_proteins = Array("scrambled eggs","fried eggs","deviled eggs","beef","pork","ham","lamb","chicken","turkey","liver","tuna","salmon","shrimp","scallops")
    var savory_vegetables = Array("cooked asparagus","cooked beets","cooked carrots","cooked green beans","cooked waxed beans","cooked tomatoes","cooked winter squash","cooked pumpkin","cooked zucchini","lettuce")
    var savory_extras = Array("cottage cheese","cream cheese","american cheese","swiss cheese","butter","mayo","olive oil","gravy","sour cream","french dressing","ketchup","vinegar","broth","creamed soup","tomato sauce","sea salt and herbs","mustard")
    var savory_starches = Array("bread","rolls","bagels","crackers","skinless potatoes","skinless sweet potatoes","macaroni","spaghetti","white rice","rice noodles","ramen","pizza")

    var all_toppings = Array("cottage cheese","ice cream","pudding","peanut butter","yogurt","sherbet","tapioca","jello","italian ice","scrambled eggs","fried eggs","deviled eggs","beef","pork","ham","lamb","chicken","turkey","liver","tuna","salmon","shrimp","scallops")
    var all_produce = Array("canned fruit","apples","applesauce","apricots","bananas","cherries","pears","peaches","plums","cooked asparagus","cooked beets","cooked carrots","cooked green beans","cooked waxed beans","cooked tomatoes","cooked winter squash","cooked pumpkin","cooked zucchini","lettuce")
    var all_extras = Array("butter","marshmallows","heavy cream","honey","jelly","maple syrup","cinnamon","whipped cream","cottage cheese","cream cheese","american cheese","swiss cheese","mayo","olive oil","gravy","sour cream","french dressing","ketchup","vinegar","broth","creamed soup","tomato sauce","sea salt and herbs","mustard")
    var all_starches = Array("french toast","pancakes","waffles","rice pudding","cream of wheat","bread pudding","cornflakes","rice krispies","rice cakes","cake","cookies","bagels","bread","rolls","bagels","crackers","skinless potatoes","skinless sweet potatoes","macaroni","spaghetti","white rice","rice noodles","ramen","pizza")

    if (flavor_palette == "sweet") {
      var thing_1 = sweet_toppings[Math.floor(Math.random() * sweet_toppings.length)];
      var thing_2 = sweet_fruits[Math.floor(Math.random() * sweet_fruits.length)];
      var thing_3 = sweet_extras[Math.floor(Math.random() * sweet_extras.length)];
      var starch = sweet_starches[Math.floor(Math.random() * sweet_starches.length)];
    } else if (flavor_palette == "savory") {
      var thing_1 = savory_proteins[Math.floor(Math.random() * savory_proteins.length)];
      var thing_2 = savory_vegetables[Math.floor(Math.random() * savory_vegetables.length)];
      var thing_3 = savory_extras[Math.floor(Math.random() * savory_extras.length)];
      var starch = savory_starches[Math.floor(Math.random() * savory_starches.length)];
    } else if (flavor_palette == "whatever") {
      var thing_1 = all_toppings[Math.floor(Math.random() * all_toppings.length)];
      var thing_2 = all_produce[Math.floor(Math.random() * all_produce.length)];
      var thing_3 = all_extras[Math.floor(Math.random() * all_extras.length)];
      var starch = all_starches[Math.floor(Math.random() * all_starches.length)];
    }

    var beverage = all_beverages[Math.floor(Math.random() * all_beverages.length)]

    document.getElementById("thing_1").innerHTML = thing_1;
    document.getElementById("thing_2").innerHTML = thing_2;
    document.getElementById("thing_3").innerHTML = thing_3;
    document.getElementById("starch").innerHTML = starch;
    document.getElementById("beverage").innerHTML = beverage;
}
