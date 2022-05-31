function setTestimonials(testimonials) {
    document.querySelectorAll(`.testimonials-section__testimonials_cards__card-item`)
    .forEach((node, index) => {
        node.querySelector('.card-item__testimonial').innerText = testimonials[index].text;
        node.querySelector('.card-item__author').innerText = testimonials[index].name;
        node.querySelector('.card-item__position').innerText = testimonials[index].job;
    })
}
    async function getTestimonials() {
    const response = await fetch('../src/data/config.json')
    const data = await response.json()
    setTestimonials(data.testimonials)
    console.log(data.testimonials)
    }

getTestimonials()