const path = require('path');
const fs = require("fs");
//const login = path.join(__dirname, "../views/users/login.ejs");
//const signup = path.join(__dirname, "../views/users/signup.ejs");

let pathJSON = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(pathJSON, "utf-8"));

const usersController = {
    //login.html
    login: (req, res) => {
        res.render('./users/login', { titulo: "Ingresar" });
    },

    //signup.html
    signup: (req, res) => {
        res.render('./users/signup', { titulo: "Crear cuenta" });
    },

    perfil:(req, res) => {
        res.render('./users/perfil', { titulo: "Mi Perfil" })
    },

    //Guardar usuario nuevo
    store: (req, res) => {
        //función que busca el mayor ID y devuelve el siguiente
        function siguienteID(users) {
           let id = 1;
            for (let i = 1; i < users.length; i++) {
                if (users[i].id > id) {
                    id = users[i].id;
                }
            }
            return id += 1;
        }
       

        //tomamos los datos del req.body
        let userNuevo = {
            id: siguienteID(users),
            email: req.body.email,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            contraseña: req.body.contraseña,
            imgDePerfil: req.body.profilePicture,
            fechaDeCreacion: new Date(), 
        }
        
        users.push(userNuevo);
        let usersJSON = JSON.stringify(users, null, 4);
        fs.writeFileSync(pathJSON, usersJSON, "utf-8");

        res.redirect("/user/login");
    },

    //Renderizar la vista de Edit
    edit: (req, res) => {
        let id = req.params.id;
        let user = users.find( element => element.id == id);
        if (user == undefined) {
            res.send("El usuario no existe");
        } else {
            res.render('./users/userEdit', { user });
        }
    },

    update: (req, res) => {
        let id = req.params.id;
       //let file = req.file;
        let { email, nombre, apellido, contraseña } = req.body;
       
        users.forEach(item => {
            if (item.id == id) {
                item.email = email;
                item.nombre = nombre;
                item.apellido = apellido;
                item.contraseña = contraseña;
             }
        });
        let usersJSON = JSON.stringify(users, null, 4);
        fs.writeFileSync(pathJSON, usersJSON, "utf-8");
        res.redirect("/");
    },

    delete: (req, res) =>{
        let id = req.params.id;
        let userDelete = users.find((item)=>{item.id == id});
             
        users = users.filter(user => user.id!=id);
       
        let usersJSON = JSON.stringify(users, null, 4);
        fs.writeFileSync(pathJSON, usersJSON, "utf-8");
        res.redirect("/");
    }
};
module.exports = usersController;