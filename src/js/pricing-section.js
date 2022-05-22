
async function getPlans() {
    const response = await fetch('../config.json');
    let plans = await response.json();
    console.log(plans.plans[0].name)
    document.querySelector('.card-item__plan-type__standart').innerText = plans.plans[0].name
    document.querySelector('.card-item__price__standart').innerText =  `$${plans.plans[0].price}`
    document.querySelector('.card-item__payment__standart').innerText = plans.plans[0].payment
    document.querySelector('.card-item__plan-type__premium').innerText = plans.plans[1].name
    document.querySelector('.card-item__price__premium').innerText =  `$${plans.plans[1].price}`
    document.querySelector('.card-item__payment__premium').innerText = plans.plans[1].payment
    document.querySelector('.card-item__plan-type__lifetime').innerText = plans.plans[2].name
    document.querySelector('.card-item__price__lifetime').innerText =  `$${plans.plans[2].price}`
    document.querySelector('.card-item__payment__lifetime').innerText = plans.plans[2].payment
}

getPlans()