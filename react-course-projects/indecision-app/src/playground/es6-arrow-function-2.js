// arguments object - no longer bound with arrow functions , if need aruguments object use ES5

const a = (a,b) => {
    // console.log(arguments);
    return a + b;
}

const user = {
    name:'Andrew',
    cities: ['Philaelphia', 'New york','Dublin'],
    printPlacesLived: function(){   // anonymous ES5 function
        const that = this ;

        this.cities.forEach(function(city){
                console.log(this.name + 'has lived in ' + city);
        });
    }
}

// above done using arrow funcion below


const user = {
    name:'Andrew',
    cities: ['Philaelphia', 'New york','Dublin'],
    printPlacesLived: function(){
        const that = this ;

        this.cities.forEach((city) => {
                console.log(this.name + 'has lived in ' + city);
        });
    }
}


const user = {
    name:'Andrew',
    cities: ['Philaelphia', 'New york','Dublin'],
    printPlacesLived (){                  // ES6 
        const that = this ;

        this.cities.forEach((city) => {
                console.log(this.name + 'has lived in ' + city);
        });
    }
}

const user = {
    name:'Andrew',
    cities: ['Philaelphia', 'New york','Dublin'],
    printPlacesLived (){                  // ES6 
        return  this.cities.map ((city)=>  this.name + 'has lived in ' + city );


    }
}