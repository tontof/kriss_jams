var page = document.createElement('page');
page.setAttribute('size', 'A4');
document.body.appendChild(page);
var style = document.createElement('style');
document.head.appendChild(style);
document.querySelector('#demo .date').innerHTML = (new Date()).getFullYear();
var jams = {
  'c_abricots': {
    'img': 'img/abricots.png',
    'flavour': "Confiture<br> d'Abricots"
  },
  'c_cerises': {
    'img': 'img/cerises.png',
    'flavour': "Confiture<br> de Cerises"
  },
  'c_fraises': {
    'img': 'img/fraises.png',
    'flavour': "Confiture<br> de Fraises"
  },
  'c_fraises_rhubarbe': {
    'img': 'img/fraises_rhubarbe.png',
    'flavour': "Confiture<br> Fraises Rhubarbe"
  },
  'c_mures': {
    'img': 'img/mures.png',
    'flavour': "Confiture<br> de Mûres"
  },
  'c_myrtilles': {
    'img': 'img/myrtilles.png',
    'flavour': "Confiture<br> de Myrtilles"
  },
  'c_prunes': {
    'img': 'img/prunes.png',
    'flavour': "Confiture<br> de Prunes"
  },
  'c_rhubarbe': {
    'img': 'img/rhubarbe.png',
    'flavour': "Confiture<br> de Rhubarbe"
  },
  'g_cassis': {
    'img': 'img/cassis.png',
    'flavour': "Gelée<br> de Cassis"
  },
  'g_fraises': {
    'img': 'img/fraises.png',
    'flavour': "Gelée<br> de Fraises"
  },
  'g_framboises': {
    'img': 'img/framboises.png',
    'flavour': "Gelée de<br> Framboises"
  },
  'g_groseilles': {
    'img': 'img/groseilles.png',
    'flavour': "Gelée<br> de Groseilles"
  },
  'g_mures': {
    'img': 'img/mures.png',
    'flavour': "Gelée<br> de Mûres"
  },
  'g_myrtilles': {
    'img': 'img/myrtilles.png',
    'flavour': "Gelée<br> de Myrtilles"
  }
};
Object.keys(jams).forEach(key => {
  document.getElementById('jams').innerHTML += '<option value="'+key+'">'+jams[key].flavour+'</option>';
});

var repeat = (n, cb) => {[...Array(n)].forEach(cb)};

function generatePage() {
  var cols = parseInt(document.getElementById('cols').value);
  var rows = parseInt(document.getElementById('rows').value);
  var number = cols * rows;
  var ratio = (window.screen.width - 24) / 793;
  if (ratio > 1) ratio = 1;
  page.innerHTML = "";
  // load img
  document.querySelector('#demo img').src = document.getElementById('img').value;
  // load font
  var font = new FontFace('KrISS font', 'url('+document.getElementById('font-family').value+')');
  font.load().then((loaded) => document.fonts.add(loaded));
  // generate label
  repeat(number, _=> {page.innerHTML += '<div class="label">'+document.getElementById('demo').innerHTML+'</div>';});
  // generate style
  style.innerHTML = 'page[size="A4"] {'
                  + '  grid-template-columns: '+Array(cols).fill("auto").join(" ")+';'
                  + '  grid-gap: '+document.getElementById('gap').value*ratio+'px;'
                  + '  padding: '+document.getElementById('padding').value*ratio+'px;'
                  + '  height: calc(141.4vw - 24px - '+(2*parseInt(document.getElementById('padding').value)*ratio)+'px);'
                  + '  width: calc(100vw - 24px - '+(2*parseInt(document.getElementById('padding').value)*ratio)+'px);'
                  + '  max-height: calc(29.7cm - '+(2*parseInt(document.getElementById('padding').value)*ratio)+'px);'
                  + '  max-width: calc(21cm - '+(2*parseInt(document.getElementById('padding').value)*ratio)+'px);'
                  + '}'
                  + '.label > div {'
                  + (document.getElementById('border').checked?'  border: 1px solid black;':'')
                  + '  border-radius: '+(document.getElementById('border-radius').value*ratio)+'px;'
                  + '  width: '+(document.getElementById('border').checked?'calc(100% - 2px)':'100%')+';'
                  + '  height: '+(document.getElementById('border').checked?'calc(100% - 2px)':'100%')+';'
                  + '}'
                  + '.label > div > .flavour {'
                  + '  font-size: '+(parseInt(document.getElementById('font-size-flavour').value) * ratio) +'px;'
                  + '}'
                  + '.label > div > div > .date {'
                  + '  font-size: '+ (parseInt(document.getElementById('font-size-date').value) * ratio) +'px;'
                  + '}'
                  + '@media print {'
                  + '  page[size="A4"] {'
                  + '    grid-template-columns: '+Array(cols).fill("auto").join(" ")+';'
                  + '    grid-gap: '+document.getElementById('gap').value+'px;'
                  + '    padding: '+document.getElementById('padding').value+'px;'
                  + '    height: calc(29.7cm  - '+(2*parseInt(document.getElementById('padding').value))+'px);'
                  + '    width: calc(21cm  - '+(2*parseInt(document.getElementById('padding').value))+'px);'
                  + '  }'
                  + '  .label > div {'
                  + '    border-radius: '+(document.getElementById('border-radius').value)+'px;'
                  + '  }'
                  + '  .label > div > .flavour {'
                  + '    font-size: '+(parseInt(document.getElementById('font-size-flavour').value)) +'px;'
                  + '  }'
                  + '  .label > div > div > .date {'
                  + '    font-size: '+ (parseInt(document.getElementById('font-size-date').value)) +'px;'
                  + '  }'
                  + '}'
  // generate config demo
  document.getElementById('demo').style.width = page.querySelector('.label').offsetWidth + 'px';
  document.getElementById('demo').style.height = page.querySelector('.label').offsetHeight + 'px';
}

document.querySelectorAll('input').forEach((input) => {input.oninput = generatePage});
document.getElementById('demo').onkeydown = function(evt) {
  if (evt.which === 13 && evt.shiftKey === false) {
    document.execCommand('insertHTML', false, '<br/>');
    return false;
  }
};

generatePage();

const resizeObserver = new ResizeObserver(entries => generatePage());
resizeObserver.observe(document.querySelector('page'));

const observer = new MutationObserver((mutationRecords) => generatePage());
observer.observe(document.getElementById('demo'), {
  characterData: true,
  subtree: true,
})

function loadJam() {
  var jam = jams[document.getElementById('jams').value];
  document.getElementById('img').value = jam.img;
  document.querySelector('#demo .flavour').innerHTML = jam.flavour;
  generatePage();
}
document.getElementById('jams').oninput = loadJam;
document.getElementById('print').onclick = _ => window.print();
loadJam();
