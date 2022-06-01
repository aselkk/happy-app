export const renderPlans = () => {

    async function getPlans() {
        const response = await fetch('../config.json')
        const plans = await response.json()
        const [standart, premium, lifetime] = plans.plans

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
}