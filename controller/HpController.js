
const ph = {
    nam:(req, res)=>{
        res.render('index');
    },
    nem:(req, res)=>{
        res.render('about');
    },
    nim:(req, res)=>{
        res.render('service');
    },
    nom:(req, res)=>{
        res.render('shop');
    },
    nuum:(req, res)=>{
        res.render('contact');
    }
};

module.exports = ph;