 population=0;
allAnimals=[];

$(document).ready(function (){
    var tigger = new Tiger("tigger");
    allAnimals.push(tigger);
    var pooh = new Bear("pooh");
    allAnimals.push(pooh);
    var rarity = new Unicorn("rarity");
    allAnimals.push(rarity);
    var gemma= new Giraffe("gemma");
    allAnimals.push(gemma);
    var stinger=new Bee("stinger");
    allAnimals.push(stinger);
    console.log(allAnimals);
        listAnimal();


        // create animal
        $("#create").click(function() {
            var name= $("#name").val();
            if(name==""){
                alert("give that bird a name!");
                return false;
            }
            var animalVal= $("#animalType").val();
            var animal="";
            switch(parseInt(animalVal)){
                case 1:
                   animal= new Tiger(name);
                    break;
                case 2:
                    animal= new Bear(name);
                    break;
                case 3:
                    animal= new Giraffe(name);
                    break;
                case 4:
                    animal= new Bee(name);
                    break;
                case 5:
                    animal= new Unicorn(name);
                    break;
             }
            allAnimals.push(animal);
            console.log(animal);
            console.log(allAnimals);
            listAnimal();
            $("#newActions").append(" species: " + animal.constructor.name + " name: " + animal.name + " was added" + "<br><br>");
        });
        // delete animal
    $("#release").click(function(){
        var animal = $("#remove").val();
        for (var i = 0; i < allAnimals.length; i++) {
            if (allAnimals[i].name == animal) {
                allAnimals.splice(i, 1);
                $("#newActions").append(animal + " is in a better place now" + "<br><br>");
                listAnimal();
            }
        }
    });
    //feed animal
    $("#feed").click(function(){
        var meal= $("#animalFood").val();
        for(var i = 0;i < allAnimals.length;i++){
            allAnimals[i].eat(meal);
        }
    })
});


function listAnimal(){
    $("#output").empty();
    for(var i=0;i < allAnimals.length;i++){
   $("#output").append(" species:  " +  allAnimals[i].constructor.name + "  name: " + allAnimals[i].name +  " favourite food: " + allAnimals[i].food +  "<br><br>")
}

}




// code from OOP
class Animal{
    constructor(name,food){
        this.name=name;
        this.food=food;
        population++;
    }
    sleep(){

        $("#newActions").append(this.name + "sleeps for 8 hours" +"<br><br>")
    }
    eat(food){
        if(food==this.food){
            $("#newActions").append(this.name + " eats " + food +"<br><br>");
            $("#newActions").append("YUM " + this.name + " wants more " + this.food +"<br><br>");
        }else{
            $("#newActions").append(this.name + " eats " + food +"<br><br>");
            this.sleep();
        }

    }
    static getPopulation() {
        console.log (population);
    }

}
class Tiger extends Animal{
    constructor(name) {
        super("Tiger");
        this.name = name;
        this.food = "meat";
    }
}

function run() {
    // var tigger = new Tiger("tigger");
    // var pooh = new Bear("pooh");
    // var rarity = new Unicorn("rarity");
    // var gemma= new Giraffe("gemma");
    // var stinger=new Bee("stinger");
    // var animals=[tigger,pooh,rarity,gemma,stinger];
    // var zoebot= new Zookeeper("zoebot");
    // zoebot.feedAnimals(animals,"meat");
    // Animal.getPopulation();
}

class Bear extends Animal{
    constructor(name){
        super("Bear");
        this.name=name;
        this.food="fish";
    }
    sleep(){
        $("#newActions").append(this.name + " hibernates for 4 months" +"<br><br>" );
    }

}

class Unicorn extends Animal{
    constructor(name){
        super("Unicorn");
        this.name=name;
        this.food="marshmallows";
    }
    sleep(){
        $("#newActions").append(this.name + " sleeps in a cloud" +"<br><br>" );
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super("Giraffe");
        this.name = name;
        this.food = "leaves";
    }

    eat(food) {
        if (food == "leaves") {
            super.eat("leaves");
        } else {
            $("#newActions").append("YUCK " + this.name + " will not eat " + food +"<br><br>" );
            $("#newActions").append( this.name +" sleeps for 8 hours" +"<br><br>" );
        }
    }
}



class Bee extends Animal{
    constructor(name){
        super("Bee");
        this.name=name;
        this.food="pollen";
    }
    eat(food){
        if(food=="pollen"){
            super.eat("pollen");
        }else{
            $("#newActions").append("YUCK " + this.name + " will not eat " + food +"<br><br>" + this.name +" never sleeps" +"<br><br>" );
        }
    }
}

class Zookeeper{
    constructor(name){
        this.name=name;
    }
    feedAnimals(animals,food){
        console.log(this.name +" is feeding " + food +" to " + animals.length + " animals out of " + population + " animals");
        for(var i=0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }

}