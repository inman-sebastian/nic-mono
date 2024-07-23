export const ColorFromImage = (imageElement: HTMLImageElement) => {
    const blockSize: number = 5
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    let data: ImageData
    let count = 0
    let i = -4

    const rgb = { r: 0, g: 0, b: 0 }

    if (!context) {
        return rgb
    }

    const height = (canvas.height = imageElement.naturalHeight || imageElement.offsetHeight || imageElement.height)
    const width = (canvas.width = imageElement.naturalWidth || imageElement.offsetWidth || imageElement.width)

    context.drawImage(imageElement, 0, 0)

    try {
        data = context.getImageData(0, 0, width, height)
    } catch (e) {
        return rgb
    }

    const length = data.data.length

    while ((i += blockSize * 4) < length) {
        ++count
        rgb.r += data.data[i]
        rgb.g += data.data[i + 1]
        rgb.b += data.data[i + 2]
    }

    rgb.r = ~~(rgb.r / count)
    rgb.g = ~~(rgb.g / count)
    rgb.b = ~~(rgb.b / count)

    return rgb
}
