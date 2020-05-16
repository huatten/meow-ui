export const  loadImage = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    const msg = `Could not load image at ${url}`
    img.onerror = err => reject(err || new Error(msg));
    img.src = url;
  });
}