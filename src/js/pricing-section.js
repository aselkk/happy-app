async function getPlans() {
    const response = await fetch('../src/data/config.json')
    const data = await response.json()
    const [ standart, premium, lifetime ] = data.plans

    async function setPlan({ name, price, payment }) {
        document.querySelector(`.card-item__plan-type__${name}`).innerText = name
        document.querySelector(`.card-item__price__${name}`).innerText = `$${price}`
        document.querySelector(`.card-item__payment__${name}`).innerText = payment
    }
setPlan(standart)
setPlan(premium)
setPlan(lifetime)
}

getPlans()