import mongo from "../db/db.js";

const db = await mongo();

async function getChartItens(req, res) {
    const user = "Fulano";
    
try {
    console.log('entrou');
    const chartProducts = await db.collection("products").find().toArray();
    console.log(chartProducts)
    return res.send(chartProducts);
} catch (error) {
    console.log(error);
    return res.status(500);
}

 
}

export { getChartItens }