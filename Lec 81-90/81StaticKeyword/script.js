// static keyword

class Animal{
    constructor(name) {
        this.name = Animal.capitalize(name);
    }
    walk(){
        console.log(`Animal ${this.name} is Walking`);
    }
    static capitalize(name)
    {
        return name.charAt(0).toUpperCase() + name.substr(1,this.name.length-1);
    }
    // staic methords are belong to the whole class not to a particular object
    // static function are used like
    // class_name.function_name
    // eg Animal.capitalize
}

let j = new Animal("jack");
j.walk()