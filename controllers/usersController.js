module.exports  ={
    login: (req,res)=>{
        res.render('Login', {
            title: 'Login',
            css:"login.css"
        })
    },
    competitors: (req,res)=>{
        res.render('Competitors', {
            title: 'Agregar competidor',
            css:"competitors.css"
        })
    },
    referee: (req,res)=>{
        res.render('Referee', {
            title: 'Puntaje Arbitro',
            css:"login.css"
        })
    },
    userManagement:(req,res)=>{
        res.render('UserManagement',{
            title:"Gestion de usuario",
            css:"login.css"
        })
    },
    category:(req,res)=>{
        res.render('Category',{
            title:"Categorias",
            css:"category.css"
        })
    },
    evaluation:(req,res)=>{
        res.render('Evaluation',{
            title:"Evaluacion",
            css:"login.css"
        })
    },
    score:(req,res)=>{
        res.render('Score',{
            title:"Puntajes",
            css:"login.css"
        })
    },
}