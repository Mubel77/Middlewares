function middleware(req, res, next) {
    const admin = ["Ada", "Greta", "Vim", "Tim"]
    const user = req.query.user;
    if(admin.includes(user)){
        next();
    }else{
        res.status(404).send("No tienes los privilegios para ingresar")
    }
};

const metodo = (req, res) => {
    const user = req.query.user;
    res.send(`Hola Admin: ${user}`);
};

module.exports={middleware,metodo}
