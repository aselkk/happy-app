function setTestimonials(testimonials) {
    document.querySelectorAll(`.testimonials-section__testimonials_cards__card-item`)
    .forEach((node, index) => {
        node.querySelector('.card-item__testimonial').innerHTML = testimonials[index].text;
        node.querySelector('.card-item__author').innerHTML = testimonials[index].name;
        node.querySelector('.card-item__position').innerHTML = testimonials[index].job;
    })
}
    async function getTestimonials() {
    const response = await fetch('../src/data/config.json')
    const data = await response.json()
    setTestimonials(data.testimonials)
    }
    
getTestimonials()