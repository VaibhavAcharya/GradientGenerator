var previewFrame = document.getElementById("preview-frame");
var slider = document.getElementById("direction");
var output = document.getElementById("direction-output");
var codeBox = document.getElementById("linear-gradient-code");
var getCodeBtn = document.getElementById("get-code-btn");
var getCodeBtnClipboard = new ClipboardJS('#get-code-btn');

function changeGradient(){
  color1 = pickr1.getColor().toHEXA().toString();
  color2 = pickr2.getColor().toHEXA().toString();
  direction = slider.value + "deg";

  code = "background-color: "+color1+";\n"+"background: -webkit-linear-gradient("+direction+", "+color1+" 0%, "+color2+" 100%);\n"+"background: -moz-linear-gradient("+direction+", "+color1+" 0%, "+color2+" 100%);\n"+"background: -ms-linear-gradient("+direction+", "+color1+" 0%, "+color2+" 100%);\n"+"background: -o-linear-gradient("+direction+", "+color1+" 0%, "+color2+" 100%);\n"+"background: linear-gradient("+direction+", "+color1+" 0%, "+color2+" 100%);\n"+"filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr="+color1+", endColorstr="+color2+");\n"+"-ms-filter: progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr"+color1+", endColorstr="+color2+");";

  getCodeBtn.setAttribute("data-clipboard-text", code);

  previewFrame.setAttribute("style", getCodeBtn.getAttribute("data-clipboard-text"));

  console.log([color1, color2, direction]);
}

const pickr1 = new Pickr({
  el: '#color-picker1',
  comparison: false,
  default: '667eea',
  components: {
    preview: false,
    opacity: false,
    hue: true,
    interaction: {
      hex: false,
      rgba: false,
      hsva: false,
      cmyk: false,
      input: true,
      clear: false,
      save: true
    }
  },
  theme: 'nano',
  strings: {
    save: 'OK'
 }
});
const pickr2 = new Pickr({
  el: '#color-picker2',
  comparison: false,
  default: '764ba2',
  components: {
    preview: false,
    opacity: false,
    hue: true,
    interaction: {
      hex: false,
      rgba: false,
      hsva: false,
      cmyk: false,
      input: true,
      clear: false,
      save: true
    }
  },
  theme: 'nano',
  strings: {
    save: 'OK'
 }
});

output.innerHTML = slider.value+" deg";
slider.oninput = function() {
  output.innerHTML = this.value+" deg";
  changeGradient();
}

pickr1.on('change', () => {
  changeGradient();
}).on('save', () => {
  changeGradient();
});
pickr2.on('change', () => {
  changeGradient();
}).on('save', () => {
  changeGradient();
});

getCodeBtnClipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

getCodeBtnClipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
