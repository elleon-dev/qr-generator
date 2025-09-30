const btnGenerateElement = document.querySelector("#btn-generate");
const urlElement = document.querySelector("#url-item");
const btnDownloadElement = document.querySelector("#btn-download");

const qrGenerate = (url = undefined) => {
    if (!url) return alert("Please enter a valid URL");

    const canvasElement = document.querySelector("#canvas");
    canvasElement.innerHTML = "";


    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        type: "svg",
        data: url,
        dotsOptions: {
            color: "#191818ff",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#ffffffff",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 5
        }
    });

    qrCode.append(document.getElementById("canvas"));
    urlElement.innerHTML = `<p>${url}</p>`;

    if (qrCode) {
        btnDownloadElement.style.display = "block";
        btnDownloadElement.addEventListener("click", () => {
            qrCode.download({ name: "qr", extension: "png" });
        });
    }

};

btnGenerateElement.addEventListener("click", () => {
    const value = document.querySelector("#url-input").value;
    qrGenerate(value);
});