import nike2 from '../../public/itemlist/nike2.jpg'
import nike3 from '../../public/itemlist/nike3.jpg'
import nike4 from '../../public/itemlist/nike4.jpg'
import nike5 from '../../public/itemlist/nike5.jpg'
import nike6 from '../../public/itemlist/nike6.jpg'
import nike7 from '../../public/itemlist/nike7.jpg'
import nike8 from '../../public/itemlist/nike8.jpg'
import nike9 from '../../public/itemlist/nike9.jpg'


const productos = [
    
    {id: 1, name: 'Hoodie', img: [nike2], tipe: 'Vintage', price: 600, season: 'Winter', description: 'Hoodie Blanco simple, estilo vintage con cortes que lo caracterizan por la moda de los 90' },
    {id: 2, name: 'Corset uwu', img: [nike3], tipe: 'Vintage', price: 500, season: 'Winter', description: 'Corset simple'},
    {id: 3, name: 'Corset Dark', img: [nike4], tipe: 'Vintage', price: 600, season: 'Winter', description: 'Corset Dark'},
    {id: 4, name: 'Hoodie Black And Yellow', img: [nike5], tipe: 'Vintage', price: 450, season: 'Winter' , description: 'Hoodie Black And Yellow'},
    {id: 5, name: 'Pants algodón', img: [nike6], tipe: 'Vintage', price: 420, season: 'Winter', description: 'Pantalon de algodón'},
    {id: 6, name: 'Corset Chicas Super Poderosas', img: [nike7], tipe: 'Vintage', price: 318, season: 'Winter', description: 'Corset'},
    {id: 7, name: 'Conjunto Bicolor', img: [nike8], tipe: 'Vintage', price: 318, season: 'Winter', description: 'Conjunto Bicolor'},
    {id: 8, name: 'Hoodie 2', img: [nike9], tipe: 'Vintage', price: 420, season: 'Winter', description: 'Hoodie 2'},
]


//promesa que devuelva 'productos' cuando se llame
 const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 3000)
})

export default getFetch