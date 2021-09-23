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
            css:"Referee.css"
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
    evaluationCreate:(req,res)=>{
        res.render('NewEvaluation',{
            title:"Crear Evaluacion",
            css:"NewEvaluation.css"
        })
    },
    evaluationView:(req,res)=>{
        res.render('ViewEvaluation',{
            title:"Vista Evaluacion",
            css:"NewEvaluation.css"
        })
    },
    evaluation:(req,res)=>{
        res.render('Evaluation',{
            title:"Listado de Evaluacion",
            css:"Evaluation.css"
        })
    },
    score:(req,res)=>{
        res.render('Score',{
            title:"Puntajes",
            css:"Score.css"
        })
    },
}