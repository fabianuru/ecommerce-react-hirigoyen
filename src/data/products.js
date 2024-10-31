const products = [

    {
        id: "JUICE-CAR",
        name: "Caroteno",
        price: 270,
        category: "jugos",
        subcategory: "Energizante",
        img: "/public/img/caroteno.jpg",
        stock: 1000,
        description: "Naranja, Zanahoria y Jengibre"
    },
    {
        id: "JUICE-ANA",
        name: "Ananá Fit",
        price: 270,
        category: "jugos",
        subcategory: "Energizante",
        img: "/public/img/ananafit.jpg",
        stock: 1000,
        description: "Ananá, manzana verde, limón, jengibre, curcuma y pimienta de cayenna"
    },
    {
        id: "JUICE-DRG",
        name: "Dr Green",
        price: 280,
        category: "jugos",
        subcategory: "Detox",
        img: "/public/img/drgreen.jpg",
        stock: 1000,
        description: "Manzana verde, espinaca, pepino, limón, apio y ananá"
    },
    {
        id: "JUICE-RED",
        name: "Red Beat",
        price: 280,
        category: "jugos",
        subcategory: "Detox",
        img: "/public/img/redbeat.jpg",
        stock: 1000,
        description: "Remolacha, manzana verde, limón, jengibre y perejil"
    }
    ,
    {
        id: "PLAN-GREEN",
        name: "Plan Green Week",
        price: 1740,
        category: "planes",
        subcategory: "jugos",
        img: "/public/img/plangreen.jpg",
        stock: 1000,
        description: "Reto semanal - 7 jugos , 1 jugo por día todas las mañanas en ayuno!"
    }
    ,
    {
        id: "PDTX-PRINCIPIANTE",
        name: "Plan Detox Principiantes",
        price: 2630,
        category: "planes",
        subcategory: "Detox",
        img: "/public/img/plandetox.jpg",
        stock: 1000,
        description: "Plan detox - 10 jugos , sentite mejor con nuestro plan de jugos personalizado."
    },
    {
        id: "PDTX-INTERMEDIO",
        name: "Plan Detox Intermedio",
        price: 3300,
        category: "planes",
        subcategory: "Detox",
        img: "/public/img/plandetox.jpg",
        stock: 1000,
        description: "Plan detox - 13 jugos , sentite mejor con nuestro plan de jugos personalizado."
    },
    {
        id: "PDTX-AVANZADO",
        name: "Plan Detox Avanzado",
        price: 4800,
        category: "planes",
        subcategory: "Detox",
        img: "/public/img/plandetox.jpg",
        stock: 1000,
        description: "Plan detox - 21 jugos , sentite mejor con nuestro plan de jugos personalizado."
    },
    {
        id: "S-BASICA",
        name: "Suscripción básica",
        price: 5000,
        category: "suscripcion",
        subcategory: "básica",
        img: "/public/img/suscripcionbasica.jpg",
        stock: 1000,
        description: "5 jugos por semana durante 1 mes"
    },
    {
        id: "S-INTERMEDIA",
        name: "Suscripción intermedia",
        price: 7300,
        category: "suscripcion",
        subcategory: "intermedia",
        img: "/public/img/suscripcionintermedia.jpg",
        stock: 1000,
        description: "8 jugos por semana durante 1 mes"
    },
    {
        id: "S-AVANZADA",
        name: "Suscripción Avanzada",
        price: 10000,
        category: "suscripcion",
        subcategory: "avanzada",
        img: "/public/img/suscripcionfamiliar.jpg",
        stock: 1000,
        description: "12 jugos por semana durante 1 mes"
    }
]


const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=> {
            resolve (products)
        },2000)
    })
}

const getProduct = (idProduct) => {
    return new Promise((resolve ) => {
        setTimeout(()=> {
            const product = products.find((product)=> product.id === idProduct)
            resolve(product)
        },2000)
        
    })
}

export {getProducts , getProduct}