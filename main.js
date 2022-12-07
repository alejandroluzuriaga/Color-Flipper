import './style.css';

const COLOR_PALETTE = {
    '#DEC5E3': 'Thistle',
    '#CDEDFD': 'Columbia Blue',
    '#B6DCFE': 'Uranian Blue',
    '#A9F8FB': 'Celeste',
    '#81F7E5': 'Turquoise Blue',
    '#DBD3AD': 'Dutch White',
    '#F6C5AF': 'Apricot',
    '#E0607E': 'Blush',
    '#D36060': 'Indian Red',
    '#C2714F': 'Cooper Red',
};

const addOptionsToColorPicker = () =>{

  const colorPickerSelect = document.querySelector('#color-picker');
  
  Object.keys(COLOR_PALETTE).forEach((color) => {
  
    const option = document.createElement('option');
  
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () =>{
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name')

  colorPickerSelect.addEventListener('change', (event) =>{
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : ` - `
    });
}

const addEventListenerToCustomPicker = () =>{
  const customColorPickerSelect = document.querySelector('#custom-color');
  const colorName = document.querySelector('#color-name')

  customColorPickerSelect.addEventListener('change', (event) =>{
    const newColor = event.target.value;
    
    document.body.style.backgroundColor = newColor;

    const colorNameText = `${newColor}`;
    colorName.innerText = colorNameText;
  })
  }

addEventListenerToCustomPicker();
addOptionsToColorPicker();
addEventListenerToColorPicker();
