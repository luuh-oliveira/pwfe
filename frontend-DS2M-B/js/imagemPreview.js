'use strict';

const imagemPreview = (idFile, idImagem) => {
    const file = document.getElementById(idFile).files[0];
    const preview = document.getElementById(idImagem);
    const fileReader = new FileReader();

    if (file) {
        fileReader.readAsDataURL(file)
    } else{
        preview.src = "./img/foto.png"
    }

    fileReader.onloadend = () => (preview.src = fileReader.result)

}

export { imagemPreview }