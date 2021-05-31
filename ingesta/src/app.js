const { Client } = require('@elastic/elasticsearch')
const delay = require('delay');

const client = new Client({ node: 'http://127.0.0.1:9200' })

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const dato = async () => {
  await client.index({
    index: 'car_panel',
    body: {
      "@timestamp": new Date(),
      UNIVERSIDAD: "Salesiana GYE",
      MARCA: "LUX",
      MODELO: "CT200",
      DATA: {

        RPM:{
          DESCRIPTION:"REVOLUCIONES",
          VALUE:getRandomArbitrary(0, 1000)
        },
        VELOCIDAD:{
          DESCRIPTION:"VELOCIMETRO",
          VALUE: getRandomArbitrary(0, 150)
        },
        
        KILOMETRAJE:{
          DESCRIPTION:"KILOMETRAJE",
          VALUE:getRandomArbitrary(0, 15000)
        },
        DIR_IZQ:{
          DESCRIPTION:"DIR_IZQUIERDA",
          VALUE:Math.random() >= 0.5?1:0
          
        },
        DIR_DER:{
          DESCRIPTION:"DIR_DERECHA",
          VALUE:Math.random() >= 0.5?1:0
        },
        NEUTRO:{
          DESCRIPTION:"NEUTRO",
          VALUE:Math.random() >= 0.5?1:0
        },
        CAMBIO1:{
          DESCRIPTION:"CAMBIO1",
          VALUE:Math.random() >= 0.5?1:0
        },
        CAMBIO2:{
          DESCRIPTION:"CAMBIO2",
          VALUE:Math.random() >= 0.5?1:0
        },
        CAMBIO3:{
          DESCRIPTION:"CAMBIO3",
          VALUE:Math.random() >= 0.5?1:0
        },
        CAMBIO4:{
          DESCRIPTION:"CAMBIO4",
          VALUE:Math.random() >= 0.5?1:0
        },
        TEMPMOTOR:{
          DESCRIPTION:"TEMPERATURA DE MOTOR",
          VALUE:Math.random() >= 0.5?1:0
        },
        LUZBAJA:{
          DESCRIPTION:"LUZ BAJA",
          VALUE:Math.random() >= 0.5?1:0
        },
        LUZALTA:{
          DESCRIPTION:"LUZ ALTA",
          VALUE:Math.random() >= 0.5?1:0
        },
        ACEITE:{
          DESCRIPTION:"ACEITE",
          VALUE:Math.random() >= 0.5?1:0
        },
        GASOLINA:{
          DESCRIPTION:"GASOLINA",
          VALUE:Math.random() >= 0.5?1:0
        },
        GAS1:{
          DESCRIPTION:"GAS1",
          VALUE:Math.random() >= 0.5?1:0
        },
        GAS2:{
          DESCRIPTION:"GAS2",
          VALUE:Math.random() >= 0.5?1:0
        },
        GAS3:{
          DESCRIPTION:"GAS3",
          VALUE:Math.random() >= 0.5?1:0
        },
        GAS4:{
          DESCRIPTION:"GAS4",
          VALUE:Math.random() >= 0.5?1:0
          
        }
      }
    }
  })
}

const run = async () => {
  let i = 0;

  try {
    while(true) {
      await dato()
  
      await delay(5000)
      console.log(`envio ${i}`)
      i++
    }  
  } catch (error) {
    console.log(error)
  }
}

run()
