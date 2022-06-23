const path = require('path');
const fs = require("fs");

let pathJSON = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(pathJSON, "utf-8"));

const productsController = {
    //productDetail.html
    product: (req, res) => {
        res.render('./products/productDetail', { titulo: "Detalle de producto" });
    },

    //productCart.html
    cart: (req, res) => {
        res.render('./products/productCart', { titulo: "Carrito de compras" });
    },

    //Renderizar Vista Create
    create: (req, res) => {
        res.render('./products/productCreate');
    },
    //Guardar producto nuevo
    store: (req, res) => {
        //función que busca el mayor ID y devuelve el siguiente
        function siguienteID(products) {
            let id = 1;
            for (let i = 1; i < products.length; i++) {
                if (products[i].id > id) {
                    id = products[i].id;
                }
            }
            return id += 1;
        }
        
        //tomamos los datos del req.body
        let productNuevo = {
            id: siguienteID(products),
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            moneda: req.body.moneda,
            precio: req.body.precio,
            imagenes: "URL",
            categoria: req.body.categoria,
            subcategoria: req.body.subcategoria,
            esNovedad: req.body.esNovedad,
            esDestacado: req.body.esDestacado, 
            esOferta: req.body.esOferta,
            descuento: req.body.descuento,     
            fechaDeCreacion: new Date()
        }
        products.push(productNuevo);
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(pathJSON, productsJSON, "utf-8");

        res.redirect("/");
    },

    //Renderizamos la vista de Edit
    edit: (req, res) => {
        let id = req.params.id;
        let product = products.find(element => element.id == id);
        res.render('./products/productEdit', {product});
    },
    update: (req, res) =>{
        let id = req.params.id;
        products.forEach(product => {
			if (product.id == id) {
                product.nombre= req.body.nombre,
                product.descripcion= req.body.descripcion,
                product.moneda= req.body.moneda,
                product.precio= req.body.precio,
                product.imagenes= "URL",
                product.categoria= req.body.categoria,
                product.subcategoria= req.body.subcategoria,
                product.esNovedad= req.body.esNovedad,
                product.esDestacado= req.body.esDestacado, 
                product.esOferta= req.body.esOferta,
                product.descuento= req.body.descuento,     
                product.fechaDeCreacion= new Date()
			}
		})
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(pathJSON, productsJSON, "utf-8");
        res.redirect("/");
    },
    delete: (req, res) =>{
        let id = req.params.id;
        products = products.filter(product => product.id!=id);
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(pathJSON, productsJSON, "utf-8");
        res.redirect("/");
    }
};
module.exports = productsController;