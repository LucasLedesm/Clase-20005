
$("#pagar").click(function(event) {
    pagar()
    $("#myBtnHisopado").show();
 })

const carrito = [
    {nombre: "Hisopado", descripcion: "Hisopado Covid19", img: "imagen", id: 1, cantidad: 1, precio: 2700}]

async function pagar() {
    const productsToMP = carrito.map((element) => {
      let nuevoElemento = {
        title: element.nombre,
        description: element.descripcion,
        picture_url: element.img,
        category_id: element.id,
        quantity: Number(element.cantidad),
        currency_id: "ARS",
        unit_price: Number(element.precio),
        
      };
      return nuevoElemento;
    });
    console.log(productsToMP)
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
        },
        body: JSON.stringify({
          items: productsToMP,
        }),
      }
      )
      console.warn(response)
      const data = await response.json();
      console.log(data)
      window.open(data.init_point, "_blank");
    }