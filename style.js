let array = [
    ['HOME', 'PROFILE'],
    ['SETTING'],
    ['LOGOUT']
]

let asideElement = document.getElementsByTagName("aside")[0]

array.map((baris, index) => {
    if (index > 0) {
        let hr = document.createElement("hr")
        asideElement.appendChild(hr)
    }

    baris.map((kolom) => {
        let paragraph = document.createElement('p')
        let valueMenu = document.createTextNode(kolom)

        paragraph.appendChild(valueMenu)

        asideElement.appendChild(paragraph)
    })
})