import mongo from "../db/db.js";
import { getUser, getSession } from "./userControllers.js";
import { getProductById } from "./productsController.js";

const db = await mongo();

async function getChartItens(req, res) {
  try {
    const session = await getSession();

    if (!session) {
      return res.status(404);
    }
    const chart = session.chart;
    let chartItems = [];

    for (let i = 0; i < chart.length; i++) {
      let element = chart[i];

      let productFound = await getProductById(element.product_id);
      let finalPrice = productFound.price*element.amount;
      let item = {
        product: productFound.product,
        img: productFound.img,
        price: productFound.price,
        amount: element.amount,
        finalPrice: finalPrice,
      };
      chartItems.push(item);
    }
    
    return res.send(chartItems);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

export { getChartItens };
