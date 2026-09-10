const express = require("express");
const patrimonio = require("../dados.json")

const mostrarPatrimonio = (req, res) => {
    res.send(patrimonio)
}

const novoPatrimonio = (req, res) => {
    if (req.body) {
        res.send("Patrimônio em analise")
        patrimonio.push(req.body)
    } else {
        res.send("Erro ao receber patrimônio")
    }
}


const listarPatrimonio = (req, res) => {
    res.send(patrimonio)

}

const excluirPatrimonio = (req, res) =>{
    const id = req.params.id;

    patrimonio.forEach((pat, indice) => {
        if(pat.id == id){
            patrimonio.splice(indice, 1);
        }
    });

    res.send("patrimonio excluido com sucesso!")
};

const atualizarPatrimonio = (req, res) => {
   const id = req.query.id;
   const dados = req.body;

   patrimonio.forEach((patrimonio) =>{
    if(patrimonio.id == id){
        patrimonio.item = dados.item;
        patrimonio.local = dados.local;
        patrimonio.dataRegistro = dados.dataRegistro;
        patrimonio.valor = dados.valor;
        patrimonio.patrimonio = dados.patrimonio;
    }
   });

   res.send("patrimonio atualizado com sucesso!");
};

const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", listarPatrimonio)
app.post("/", novoPatrimonio)
app.delete("/:id", excluirPatrimonio)
app.patch("/", atualizarPatrimonio)

app.listen(PORT, () => {
     console.log(`Servidor http://127.0.0.1:${PORT}`)
})
