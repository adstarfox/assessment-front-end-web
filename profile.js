const form = document.querySelector(`form`)

const giveFavorite = evt => {
    evt.preventDefault()
    if(evt.target.id.includes(`color`)){
        alert(`My favorite color is blue`)
    }else if (evt.target.id.includes(`place`)){
        alert(`My favorite place is Peru`)
    }else if (evt.target.id.includes(`ritual`)){
        alert(`My favorite ritual is going for a drive through the canyon with my family`)
    }
}

for (let i = 0; i < form.length; i++){
    form[i].addEventListener(`click`, giveFavorite)
}




