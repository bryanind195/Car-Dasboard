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
      MARCA: "KIA",
      MODELO: "SPORTAGE",
      DATA: {
        BATTERY_STATUS:{
          DESCRIPTION:"BATTERY STATUS",
          VALUE:Math.random() >= 0.5?1:0
        },
        SECONDS_ON_BATTERY:{
          DESCRIPTION:"SECONDS ON BATTERY",
          VALUE:Math.random() >= 0.5?1:0
        },
        ESTIMATED_MINUTES_REMAINING:{
          DESCRIPTION:"ESTIMATED MINUTES REMAINING",
          VALUE: getRandomArbitrary(30, 100)
        },
        ESTIMATED_CHARGE_REMAINING:{
          DESCRIPTION:"ESTIMATED CHARGE REMAINING",
          VALUE: getRandomArbitrary(30, 100)
        },
        VELOCIDAD:{
          DESCRIPTION:"BATTERY VOLTAGE",
          VALUE: getRandomArbitrary(0, 150)
        },
        KILOMETRAJE000:{
          DESCRIPTION:"INPUT VOLTAGE",
          VALUE: getRandomArbitrary(0, 15000)
        },
        KILOMETRAJE:{
          DESCRIPTION:"INPUT VOLTAGE 2",
          VALUE:getRandomArbitrary(0, 15000)
        },
        INPUT_VOLTAGE_3:{
          DESCRIPTION:"INPUT VOLTAGE 3",
          VALUE:getRandomArbitrary(0, 15000)
        },
        INPUT_VOLTAGE_MIN:{
          DESCRIPTION:"INPUT VOLTAGE MIN",
          VALUE:getRandomArbitrary(220, 225)
        },
        INPUT_VOLTAGE_MAX:{
          DESCRIPTION:"INPUT VOLTAGE MAX",
          VALUE:getRandomArbitrary(220, 225)
        },
        RPM:{
          DESCRIPTION:"OUTPUT VOLTAGE",
          VALUE:getRandomArbitrary(0, 1000)
        },
        OUTPUT_VOLTAGE_2:{
          DESCRIPTION:"OUTPUT VOLTAGE 2",
          VALUE:getRandomArbitrary(0, 1000)
        },
        OUTPUT_VOLTAGE_3:
        {
          DESCRIPTION:"OUTPUT VOLTAGE 3",
          VALUE:getRandomArbitrary(0, 1000)
        },
        OUTPUT_CURRENT:{
          DESCRIPTION:"OUTPUT CURRENT",
          VALUE:getRandomArbitrary(90, 100)
        },
        OUTPUT_CURRENT_2:{
          DESCRIPTION:"OUTPUT CURRENT 2",
          VALUE:getRandomArbitrary(90, 100)
        },
        OUTPUT_CURRENT_3:{
          DESCRIPTION:"OUTPUT CURRENT 3",
          VALUE:getRandomArbitrary(90, 100)
        },
        OUTPUT_POWER:{
          DESCRIPTION:"OUTPUT POWER",
          VALUE:getRandomArbitrary(200, 300)
        },
        OUTPUT_POWER_2:{
          DESCRIPTION:"OUTPUT POWER 2",
          VALUE:getRandomArbitrary(200, 300)
        },
        OUTPUT_POWER_3:{
          DESCRIPTION:"OUTPUT POWER 3",
          VALUE:getRandomArbitrary(200, 300)
        },
        OUTPUT_PERCENT_LOAD:{
          DESCRIPTION:"UPS OUTPUT PERCENT LOAD",
          VALUE:getRandomArbitrary(80, 100)
        },
        OUTPUT_PERCENT_LOAD_2:{
          DESCRIPTION:"UPS OUTPUT PERCENT LOAD 2",
          VALUE:getRandomArbitrary(80, 100)
        },
        OUTPUT_PERCENT_LOAD_3:{
          DESCRIPTION:"UPS OUTPUT PERCENT LOAD 3",
          VALUE:getRandomArbitrary(80, 100)
        },
        ALARMS_PRESENT:{
          DESCRIPTION:"ALARMS PRESENT",
          VALUE:Math.random() >= 0.5?1:0
        },
        INVERTER_ON_OFF:{
          DESCRIPTION:"INVERTER ON OFF",
          VALUE:Math.random() >= 0.5?1:0
        },
        BYPASS_ON_OFF:{
          DESCRIPTION:"BYPASS ON OFF",
          VALUE:Math.random() >= 0.5?1:0
        },
        RECTIFIER_ON_OFF:{
          DESCRIPTION:"RECTIFIER ON OFF",
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
