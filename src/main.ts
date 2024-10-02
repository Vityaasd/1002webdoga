
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const imageURLInput = document.getElementById('imageURL') as HTMLInputElement;
const imageWidthInput = document.getElementById('imageWidth') as HTMLInputElement;
const frameThicknessInput = document.getElementById('frameThickness') as HTMLInputElement;
const frameColorInput = document.getElementById('frameColor') as HTMLInputElement;
const framedImage = document.getElementById('framedImage') as HTMLImageElement;

imageURLInput.addEventListener('input', () => {
    framedImage.src = imageURLInput.value;
    framedImage.style.borderStyle = "solid"
});

imageWidthInput.addEventListener('input', () => {
    framedImage.style.width = `${imageWidthInput.value}px`;
});

frameThicknessInput.addEventListener('input', () => {
    framedImage.style.borderWidth = `${frameThicknessInput.value}px`;
});

frameColorInput.addEventListener('input', () => {
    framedImage.style.borderColor = frameColorInput.value;
});

const themeToggle = document.getElementById('dark-mode') as HTMLButtonElement;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
