export const renderLink = () => {

        const getlink = async () => {
        const get = await fetch("../config.json");
        const config = await get.json();
        let link = config.appStoreLink
        let link__config = document.querySelectorAll(".link-config")

        link__config.forEach((a_link) => a_link.onclick = () => {
            a_link.setAttribute("href", link);
        })

    };
    getlink();
    }