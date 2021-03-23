// const data = []
// async function getData() {
//     await fetch('https://6051b8b8fb49dc00175b6997.mockapi.io/api/quotes', {
//         method: 'post'
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data) 
//         data.push(data.quotes.product_quotes)
//     })
// }

const options = document.getElementById('select-block');

//response saved in an (api response is limited)
const data =  [
       {
           "model_id": 2,
           "name": "Pro Prestige 50 LeakGuar",
           "manufacturer_name": "Rheem",
           "base_price": 1500,
           "base_price_hpwh_fee": 0,
           "delivery_charge": 5,
           "est_annual_kwh_usage": 915,
           "est_annual_savings_cal": 160.29,
           "tree_planted_cal": 560,
           "volume": 50,
           "fuel_type_usage_rate": 277,
           "incentives": {
               "totalAppliedIncentives": 0
           },
           "netCost": 1500,
           "detail_highlight": [
               "ENERGY STAR Certified with an Energy Factor of 3.75 makes it one of the most efficient electric heaters",
               "Ideal hot water delivery for households with 3 to 5 people",
               "Provides up to $480 annual estimated energy cost savings, almost $5,000 in 10 years!",
               "Users can control water systems, customize temperature, set vacation settings, see energy savings at home or away with EcoNet™ WiFi connected technology and free mobile app"
           ],
           "est_highlight": [
               "4X more efficient as a standard model",
               "10-year manufacturer warranty",
               "Built-in leak prevention system ",
               "Control settings with a mobile app"
           ],
           "product_bullet_block": [
               {
                   "product_block": "Protect your home from water damage with this all-inclusive leak detection and prevention system that limits leaks to no more than 20 oz. of water",
                   "product_bullet": "Leakguard™ Leak detection & Auto Shut off"
               },
               {
                   "product_block": "Save up to $480 per year in energy costs—that’s almost $5,000 over 10 years!",
                   "product_bullet": "Save Money & Energy"
               },
               {
                   "product_block": "You can save up to $5,000 over the life of the heater with peak and off-peak energy rate scheduling with built-in demand response—letting your utility company shift the energy usage in response to the overall demand for energy at a given time",
                   "product_bullet": "Demand Response Scheduling"
               },
               {
                   "product_block": "The ProTerra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment—that’s 4X more efficient than a standard electric water heater",
                   "product_bullet": "Carbon Footprint Reduction"
               },
               {
                   "product_block": "The ProTerra Hybrid pulls heat energy from the air around it to heat your water, making it the most efficient water heater on the market with up to a 4.0 UEF",
                   "product_bullet": "Heat Pump Technology"
               },
               {
                   "product_block": "View weekly, monthly and yearly energy usage reports from your phone to help you better manage energy consumption",
                   "product_bullet": "Energy Use Tracking"
               },
               {
                   "product_block": "Schedule set point and choose from five operation modes to adjust to your lifestyle all from the EcoNet App: Energy Saver, Heat Pump, Electric, High Demand, Vacation",
                   "product_bullet": "Operation Modes and Scheduling"
               },
               {
                   "product_block": "Reduce water heating costs while you’re away for a week or just for the day—it’s easy to set from your phone even if you’ve already left home",
                   "product_bullet": "Set Vacation or Away Mode"
               },
               {
                   "product_block": "Plumbers can view detailed alerts and alarm codes while at the water heater via the Rheem Contractor App to expedite service",
                   "product_bullet": "Diagnostic Mode"
               }
           ]
       },
       {
           "model_id": 33,
           "name": "Voltex 80 gallon-FPTU-80",
           "manufacturer_name": "A.O. Smith",
           "base_price": 2200,
           "base_price_hpwh_fee": 0,
           "delivery_charge": 20,
           "est_annual_kwh_usage": 1591,
           "est_annual_savings_cal": 101.62,
           "tree_planted_cal": 585,
           "volume": 80,
           "fuel_type_usage_rate": 345,
           "incentives": {
               "totalAppliedIncentives": 0
           },
           "netCost": 2200,
           "detail_highlight": [
               "ENERGY STAR Certified with an Energy Factor of 3.45 makes it one of the most efficient electric heaters",
               "Ample hot water for households with 5+ people when sized appropriately",
               "Saves up to $4,500 over 10 years in standard operating expenses when compared to standard electric water heaters!",
               "Easy to use electronic interface allows you to change the temperature and select from 4 operating modes - efficiency, hybrid, electric, and vacation - for maximum efficiency and performance"
           ],
           "est_highlight": [
               "4X more efficient as a standard model",
               "10-year manufacturer warranty",
               "Built-in leak prevention system ",
               "Control settings with a mobile app"
           ],
           "product_bullet_block": [
               {
                   "product_block": "Improved efficiency designed to ensure available hot water at the lowest possible cost with up to a 3.45 Uniform Energy Factor (UEF) rating which conserves energy and meets ENERGY STAR® qualifications",
                   "product_bullet": "Increased Energy Efficiency"
               },
               {
                   "product_block": "Select from Efficiency, Hybrid or Electric modes to match heating requirements to environmental conditions",
                   "product_bullet": "Choice of Operating Modes"
               },
               {
                   "product_block": "User-friendly electronic interface allows easy control of temperature setting, operating modes and communicates diagnostics",
                   "product_bullet": "Electronic User Interface"
               },
               {
                   "product_block": "Protects the tank from the corrosive effects of hot water to ensure long tank life",
                   "product_bullet": "Protective Anode"
               },
               {
                   "product_block": "The Voltex Hybrid Electric Heat Pump Water Heater pulls environmental heat while dehumidifying and cooling the ambient air at the same time",
                   "product_bullet": "Heat Pump Technology"
               },
               {
                   "product_block": "Long-lasting backup heating elements help heat water according to environmental conditions, demand, and the chosen operating mode",
                   "product_bullet": "Backup Electric Elements"
               },
               {
                   "product_block": "Control system checks to ensure the tank is full of water during start up to prevent dry firing the heating elements",
                   "product_bullet": "Dry Fire Protection"
               },
               {
                   "product_block": "Permits installation in confined spaces",
                   "product_bullet": "Optional Air Duct Adapter Kit"
               },
               {
                   "product_block": "For complete information see the Warranty link under \"More Resources\"",
                   "product_bullet": "Six Year Limited Warranty"
               }
           ]
       },
       {
           "model_id": 1,
           "name": "Pro Prestige 40 LeakGuard",
           "manufacturer_name": "Rheem",
           "base_price": 1500,
           "base_price_hpwh_fee": 0,
           "delivery_charge": 0,
           "est_annual_kwh_usage": 866,
           "est_annual_savings_cal": 122.98,
           "tree_planted_cal": 467,
           "volume": 40,
           "fuel_type_usage_rate": 240,
           "incentives": {
               "totalAppliedIncentives": 0
           },
           "netCost": 1500,
           "detail_highlight": [
               "ENERGY STAR Certified with an Energy Factor of 3.75 makes it one of the most efficient electric heaters",
               "Ideal hot water delivery for households with 2 to 4 people",
               "Provides up to $480 annual estimated energy cost savings, almost $5,000 in 10 years!",
               "Users can control water systems, customize temperature, set vacation settings, see energy savings at home or away with EcoNet™ WiFi connected technology and free mobile app"
           ],
           "est_highlight": [
               "4X more efficient as a standard model",
               "10-year manufacturer warranty",
               "Built-in leak prevention system ",
               "Control settings with a mobile app"
           ],
           "product_bullet_block": [
               {
                   "product_block": "Protect your home from water damage with this all-inclusive leak detection and prevention system that limits leaks to no more than 20 oz. of water",
                   "product_bullet": "Leakguard™ Leak detection & Auto Shut off"
               },
               {
                   "product_block": "Save up to $480 per year in energy costs—that’s almost $5,000 over 10 years!",
                   "product_bullet": "Save Money & Energy"
               },
               {
                   "product_block": "You can save up to $5,000 over the life of the heater with peak and off-peak energy rate scheduling with built-in demand response—letting your utility company shift the energy usage in response to the overall demand for energy at a given time",
                   "product_bullet": "Demand Response Scheduling"
               },
               {
                   "product_block": "The ProTerra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment—that’s 4X more efficient than a standard electric water heater",
                   "product_bullet": "Carbon Footprint Reduction"
               },
               {
                   "product_block": "The ProTerra Hybrid pulls heat energy from the air around it to heat your water, making it the most efficient water heater on the market with up to a 4.0 UEF",
                   "product_bullet": "Heat Pump Technology"
               },
               {
                   "product_block": "View weekly, monthly and yearly energy usage reports from your phone to help you better manage energy consumption",
                   "product_bullet": "Energy Use Tracking"
               },
               {
                   "product_block": "Schedule set point and choose from five operation modes to adjust to your lifestyle all from the EcoNet App: Energy Saver, Heat Pump, Electric, High Demand, Vacation",
                   "product_bullet": "Operation Modes and Scheduling"
               },
               {
                   "product_block": "Reduce water heating costs while you’re away for a week or just for the day—it’s easy to set from your phone even if you’ve already left home",
                   "product_bullet": "Set Vacation or Away Mode"
               },
               {
                   "product_block": "Plumbers can view detailed alerts and alarm codes while at the water heater via the Rheem Contractor App to expedite service",
                   "product_bullet": "Diagnostic Mode"
               }
           ]
       },
       {
           "model_id": 9,
           "name": "Pro Prestige 40 15-amp",
           "manufacturer_name": "Rheem",
           "base_price": 1560,
           "base_price_hpwh_fee": 0,
           "delivery_charge": 10,
           "est_annual_kwh_usage": 651,
           "est_annual_savings_cal": 169.67,
           "tree_planted_cal": 520,
           "volume": 40,
           "fuel_type_usage_rate": 240,
           "incentives": {
               "totalAppliedIncentives": 0
           },
           "netCost": 1560,
           "detail_highlight": [
               "ENERGY STAR Certified with an Energy Factor of 3.45 makes it one of the most efficient electric heaters",
               "Ideal hot water delivery for households with 2 to 4 people",
               "Provides up to $480 annual estimated energy cost savings, almost $5,000 in 10 years!",
               "Users can control water systems, customize temperature, set vacation settings, see energy savings at home or away with EcoNet™ WiFi connected technology and free mobile app"
           ],
           "est_highlight": [
               "4X more efficient as a standard model",
               "10-year manufacturer warranty",
               "Delivers 60 gallons in the first hour",
               "Control settings with a mobile app"
           ],
           "product_bullet_block": [
               {
                   "product_block": "Program your water heater to match your needs throughout the day -higher production during high use times, like the morning, and lower production for energy savings when no one is home",
                   "product_bullet": "Energy Saving Scheduling"
               },
               {
                   "product_block": "Save up to $480 per year in energy costs—that’s almost $5,000 over 10 years!",
                   "product_bullet": "Save Money & Energy"
               },
               {
                   "product_block": "You can save up to $5,000 over the life of the heater with peak and off-peak energy rate scheduling with built-in demand response—letting your utility company shift the energy usage in response to the overall demand for energy at a given time",
                   "product_bullet": "Demand Response Scheduling"
               },
               {
                   "product_block": "The ProTerra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment—that’s 4X more efficient than a standard electric water heater",
                   "product_bullet": "Carbon Footprint Reduction"
               },
               {
                   "product_block": "The ProTerra Hybrid pulls heat energy from the air around it to heat your water, making it the most efficient water heater on the market with up to a 4.0 UEF",
                   "product_bullet": "Heat Pump Technology"
               },
               {
                   "product_block": "View weekly, monthly and yearly energy usage reports from your phone to help you better manage energy consumption",
                   "product_bullet": "Energy Use Tracking"
               },
               {
                   "product_block": "Schedule set point and choose from five operation modes to adjust to your lifestyle all from the EcoNet App: Energy Saver, Heat Pump, Electric, High Demand, Vacation",
                   "product_bullet": "Operation Modes and Scheduling"
               },
               {
                   "product_block": "Reduce water heating costs while you’re away for a week or just for the day—it’s easy to set from your phone even if you’ve already left home",
                   "product_bullet": "Set Vacation or Away Mode"
               },
               {
                   "product_block": "Plumbers can view detailed alerts and alarm codes while at the water heater via the Rheem Contractor App to expedite service",
                   "product_bullet": "Diagnostic Mode"
               }
           ]
       },
       {
           "model_id": 11,
           "name": "Pro Prestige 65 15-amp",
           "manufacturer_name": "Rheem",
           "base_price": 1500,
           "base_price_hpwh_fee": 0,
           "delivery_charge": 20,
           "est_annual_kwh_usage": 915,
           "est_annual_savings_cal": 155.11,
           "tree_planted_cal": 548,
           "volume": 65,
           "fuel_type_usage_rate": 273,
           "incentives": {
               "totalAppliedIncentives": 0
           },
           "netCost": 1500,
           "detail_highlight": [
               "ENERGY STAR Certified with an Energy Factor of 3.55 makes it one of the most efficient electric heaters",
               "Ideal hot water delivery for households with 3 to 5 people",
               "Provides up to $480 annual estimated energy cost savings, almost $5,000 in 10 years!",
               "Users can control water systems, customize temperature, set vacation settings, see energy savings at home or away with EcoNet™ WiFi connected technology and free mobile app"
           ],
           "est_highlight": [
               "4X more efficient as a standard model",
               "10-year manufacturer warranty",
               "Delivers 75 gallons in the first hour",
               "Control settings with a mobile app"
           ],
           "product_bullet_block": [
               {
                   "product_block": "Program your water heater to match your needs throughout the day -higher production during high use times, like the morning, and lower production for energy savings when no one is home",
                   "product_bullet": "Energy Saving Scheduling"
               },
               {
                   "product_block": "Save up to $480 per year in energy costs—that’s almost $5,000 over 10 years!",
                   "product_bullet": "Save Money & Energy"
               },
               {
                   "product_block": "You can save up to $5,000 over the life of the heater with peak and off-peak energy rate scheduling with built-in demand response—letting your utility company shift the energy usage in response to the overall demand for energy at a given time",
                   "product_bullet": "Demand Response Scheduling"
               },
               {
                   "product_block": "The ProTerra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment—that’s 4X more efficient than a standard electric water heater",
                   "product_bullet": "Carbon Footprint Reduction"
               },
               {
                   "product_block": "The ProTerra Hybrid pulls heat energy from the air around it to heat your water, making it the most efficient water heater on the market with up to a 4.0 UEF",
                   "product_bullet": "Heat Pump Technology"
               },
               {
                   "product_block": "View weekly, monthly and yearly energy usage reports from your phone to help you better manage energy consumption",
                   "product_bullet": "Energy Use Tracking"
               },
               {
                   "product_block": "Schedule set point and choose from five operation modes to adjust to your lifestyle all from the EcoNet App: Energy Saver, Heat Pump, Electric, High Demand, Vacation",
                   "product_bullet": "Operation Modes and Scheduling"
               },
               {
                   "product_block": "Reduce water heating costs while you’re away for a week or just for the day—it’s easy to set from your phone even if you’ve already left home",
                   "product_bullet": "Set Vacation or Away Mode"
               },
               {
                   "product_block": "Plumbers can view detailed alerts and alarm codes while at the water heater via the Rheem Contractor App to expedite service",
                   "product_bullet": "Diagnostic Mode"
               }
           ]
       }
]

const initialValues = [];

data.forEach((item) => {
  initialValues.push(item.volume)
})

//remove duplicates
function removeDuplicates(arr) {
  let arrSet = new Set(arr);
  let arrVal = arrSet.values();
  return Array.from(arrVal);
}
const optionValue = removeDuplicates(initialValues)

optionValue.forEach(val => {
  const option = document.createElement('option');
  option.innerHTML = val;
  option.setAttribute('value', val);
  options.appendChild(option);
})

function mapData(arr) {
  let insertData = ""
  arr.forEach((item) => {
    let newProduct = `
    <div class="product-card">
      <div class="heading">
        <h3>${item.manufacturer_name}</h3>
        <h4>${item.name}</h4>
      </div>
      <div class="img-container">
        <div class="img-block">
          <img  class="main-img" src="./images/product_image.png" alt="image" />
        </div>
        <div class="helight-block">
          <p class="heights" id="items"></p>
        </div>
      </div>
      <div class="bestprice-block">
        <div><h2>Bese Price</h2><p>(Installation not included)<p></div> 
        <div><h2>$${item.base_price}<h2></div>
      </div>
      <div class="incentives">
        <div class="info-container">
          <p>Available incentives </p>
          <img src="./images/info-tooltip.svg" alt="info" />
        </div>
          <div><p>$${item.incentives.totalAppliedIncentives}</p></div>
      </div>
      <div class="equipment">
        <div class="info-second"><h2>Equipment Cost<h2><img src="./images/info-tooltip.svg" alt="info" /></div>
        <div><h2 class="netcost">$${item.netCost}<h2></div>
      </div>
      <div class="annual-savings">
        <h3>Your Est. Annual Savings is <h3 class="green">${item.est_annual_savings_cal}</h3> <img src="./images/info-tooltip.svg" alt="info" /></h3>
      </div>
      <div class="install">
        <button class="quote">Get Install Quote</button>
      </div>
      <div class="more-details">
        <button class="more" onclick="popup(${item.volume})">view more details</button>
      </div>
    </div>  
    `
    insertData += newProduct
  })
  document.getElementById("product").innerHTML = insertData  
}

function highlights(arr) {
  let str = ""
  arr.forEach(item => {
    item.est_highlight.forEach(i => {
     let newStr =`<div class="eachone"><div class="circle"></div><h3>${i}</h3></div>`
     str += newStr
    })
    document.getElementById('items').innerHTML = str;
  })
}

let selectedValue;
function selectOption(e) {
  selectedValue = Number(e.value);
  let foundValue = data.find(item => item.volume === selectedValue)
  mapData([foundValue])
  highlights([foundValue])
}

window.addEventListener('load', function() {
  const onloadValue = options.value;
  let val = Number(onloadValue);
  let foundValue = data.filter(item => item.volume === val)
  mapData(foundValue)
  highlights(foundValue)
})

async function popup(getId) {

    document.getElementById("hidden-block").style.display = "block";

    const res = await data.find(id => id.volume === getId);
 
    let empty = `
    <div class="separate">
        <div class="bestprice-block">
            <div>
                <h2>Bese Price</h2>
                <p>(Installation not included)<p>
            </div> 
            <div>
                <h2>$${res.base_price}<h2>
            </div>
        </div>
        <div class="incentives">
        <div class="info-container">
            <p>Available incentives </p>
            <img src="./images/info-tooltip.svg" alt="info" />
        </div>
            <div><p>$${res.incentives.totalAppliedIncentives}</p></div>
        </div>
        <div class="equipment">
            <div class="info-second">
                <h2>Equipment Cost<h2>
                <img src="./images/info-tooltip.svg" alt="info" />
            </div>
            <div>
                <h2 class="netcost">$${res.netCost}<h2>
            </div>
        </div>
        <div class="annual-savings">
            <h3>Your Est. Annual Savings is <h3 class="green">${res.est_annual_savings_cal}</h3> 
            <img src="./images/info-tooltip.svg" alt="info" /></h3>
        </div>
    </div>`
    res.product_bullet_block.forEach(item => {
        let newdata = `
        <div class="pop-block">
            <div class="bullet">
            <img src="./images/right-check.svg" alt="tick"/>${item.product_bullet}</div>
            <div class="block">${item.product_block}</div>
        </div>
        `
        empty += newdata
        document.getElementById('pop').innerHTML = empty;
        
    })
    
}

function closePopUp() {
    document.getElementById('hidden-block').style.display = "none"
}