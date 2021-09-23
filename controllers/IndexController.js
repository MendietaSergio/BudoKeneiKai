module.exports  ={
    competitions: (req,res)=>{
        res.render('Competitors', {
            title: 'Competidor',
            css:"login.css"
         });
    },
    showTable01:(req,res)=>{
        res.render('showPoints',{
            title:"Muestra puntaje mesa - 01",
            css:"showPoints.css",
            
        })
    },
    showTable02:(req,res)=>{
        res.render('showPoints',{
            title:"Muestra puntaje mesa - 02",
            css:"showPoints.css",
            
        })
    },
    showTable03:(req,res)=>{
        res.render('showPoints',{
            title:"Muestra puntaje mesa - 03",
            css:"showPoints.css",
            
        })
    },
}