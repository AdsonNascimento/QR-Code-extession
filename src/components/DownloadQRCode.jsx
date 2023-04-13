export default function DownloadQRCode(urlLink) {
    // Cria um elemento canvas
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;
  
    QRCode.toCanvas(urlLink, urlLink, { width: 177 }, (error) => {
        console.log(error)
    })

    // Desenha uma imagem no canvas
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Converte o canvas para um blob de imagem
    canvas.toBlob((blob) => {
      // Cria um elemento <a> para iniciar o download
      const element = document.createElement("a");
      element.href = URL.createObjectURL(blob);
      element.download = "imagem.png"; // Nome do arquivo que será baixado
  
      // Adiciona o elemento ao DOM e o clica
      document.body.appendChild(element);
      element.click();
  
      // Remove o elemento do DOM após o download ser iniciado
      document.body.removeChild(element);
    }, "image/png");
  
    return (
      <a href="" id='baixa'> baixa aqui</a>
    )
  }