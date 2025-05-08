
const formatString = (value1: string, value2?: boolean) => {
    if (value2 === undefined || value2 === true) {
        return value1.toUpperCase();
    } else {
        return value1.toLowerCase();
    }
}

const result1 = formatString("hellow");
const result2 = formatString("hellow", true);
const result3 = formatString("hellow", false);

console.log(result1);
console.log(result2);
console.log(result3);



const filterByRating = (medicine: { title: string; rating: number }[], rating: number) => {
    return medicines.filter(movie => movie.rating >= rating);
}
const medicines = [
    { title: "Medicine 1", rating: 3.5 },
    { title: "Medicine 2", rating: 4.5 },
    { title: "Medicine 3", rating: 5 },
    { title: "Medicine 4", rating: 2.3 },
    { title: "Medicine 5", rating: 9 },
    { title: "Medicine 6", rating: 6 },
]
const filteredMedicines = filterByRating(medicines, 4);
console.log(filteredMedicines);




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

const concat1 = concatenateArrays([1, 2, 3], [4, 5, 6]);
const concat2 = concatenateArrays(["Hafij", "Sumon", "Hasan"], ["Rashid", "Saleh"], ["Rafiq"]);

console.log(concat1); // Output: [1, 2, 3, 4, 5, 6]
console.log(concat2); // Output: ["Hafij", "Sumon", "Hasan", "Rashid", "Saleh", "Rafiq"]




class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel() {
        return `Model: ${this.model}`;
    }
}

const hisCar = new Car("Toyota", 2020, "Corolla");
console.log(hisCar.getInfo());
console.log(hisCar.getModel());


const processValue = (value: string | number): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value * 2;
    }
    return 0;
}

const processedValue1 = processValue("My name is Hafij");
const processedValue2 = processValue(5);
console.log(processedValue1);
console.log(processedValue2);


interface Product {
    name: string;
    price: number;
}

const getMostExpensiveProduct = (products: Product[]): number | null => {
    if (products.length === 0) {
        return null;
    }
    return products.reduce((max, product) => {
        return product.price > max ? product.price : max;
    }, 0);
}

const products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 },
];

const mostExpensiveProduct = getMostExpensiveProduct(products);
console.log(mostExpensiveProduct);


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const getDayType = (day: Day): string => {
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
}

const weekendDay = getDayType(Day.Saturday);   
const weekdayDay = getDayType(Day.Monday);

console.log(weekdayDay); 
console.log(weekendDay); 


const squareAscyne = async (n: number): Promise<number> => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (n < 0) {
                reject("Error: Negative number not allowed");
            }else{
                resolve(n * n);
            }
        }, 1000)
    })
}

squareAscyne(5)
    .then(result => {
        console.log(result);
    }
    )
    .catch(error => {
        console.error(error);
    }
    )
