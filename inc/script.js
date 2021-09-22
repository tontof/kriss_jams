var page = document.createElement('page');
page.setAttribute('size', 'A4');
document.body.appendChild(page);
var style = document.createElement('style');
document.head.appendChild(style);
var repeat = (n, cb) => {[...Array(n)].forEach(cb)};
var template = {};
var list = [];
var defaultImg = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjEyMCIKICAgaGVpZ2h0PSIxMjAiCiAgIGNsYXNzPSJiaSBiaS1pbWFnZSIKICAgdmlld0JveD0iMCAwIDEyMC4wMDAwMSAxMjAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzg2OSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iaW1hZ2Uuc3ZnIgogICBzdHlsZT0iZmlsbDpjdXJyZW50Q29sb3IiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNSAoMjA2MGVjMWY5ZiwgMjAyMC0wNC0wOCkiPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTg3NSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczg3MyIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyOCIKICAgICBpZD0ibmFtZWR2aWV3ODcxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSI0Ljk0OTc0NzUiCiAgICAgaW5rc2NhcGU6Y3g9IjI5LjIyOTg1IgogICAgIGlua3NjYXBlOmN5PSI1NC40NzEzNDYiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc4NjkiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiIC8+CiAgPGcKICAgICBpZD0iZzgxNyIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA0Mjg5MTMsLTAuMDU0NjYzKSI+CiAgICA8ZwogICAgICAgaWQ9Imc4MTMiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDg2NyIKICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi40MDAwMDAxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIGQ9Im0gMTguMTAwNTUsMS42NzE5NjYgYyAtOS4xMzM2MzYyLDAgLTE2LjUzNzkxMjYsNy40MDQyNzEgLTE2LjUzNzkxMjYsMTYuNTM3OTEzIHYgODMuNjg5NTcxIGMgMCw5LjEzMzY0IDcuNDA0Mjc2NCwxNi41Mzc5MSAxNi41Mzc5MTI2LDE2LjUzNzkxIGggODMuNzEzMTEgYyA5LjEzMzY0LDAgMTYuNTM3OTIsLTcuNDA0MjcgMTYuNTM3OTIsLTE2LjUzNzkxIFYgMTguMjA5ODc5IGMgMCwtOS4xMzM2NDIgLTcuNDA0MjgsLTE2LjUzNzkxMyAtMTYuNTM3OTIsLTE2LjUzNzkxMyBIIDY3LjcxNDI4NyBaIE0gMTE3LjY0MjgyLDc4Ljk0MzI1MyA5NC4zNjUxMjksNTYuODU4NDM5IEMgOTIuNzc0ODc2LDU2LjA2MjEzNiA5MC44NTMzNzYsNTYuMzcxMzkzIDg5LjU5Mzk0Nyw1Ny42Mjc0NSBMIDU4LjkxNjExOSw4OC4zMDUyODMgMzYuOTIwNjk2LDczLjY1MjY5IEMgMzUuMjgzMzUsNzIuNTYyNTkyIDMzLjEwNDY4Nyw3Mi43NzcwMDkgMzEuNzExMjUzLDc0LjE2NTM2NiAyMS4zNDkwNjgsODMuMTE3OTE3IDEuNDgzODg1NCwxMDEuODk5NDUgMS40ODM4ODU0LDEwMS44OTk0NSBNIDUxLjE3NjM3NywzOS44ODIyNyBjIDAsMTYuNTM3OTExIC0yNC44MDY4NywxNi41Mzc5MTEgLTI0LjgwNjg3LDAgMCwtMTYuNTM3OTEzIDI0LjgwNjg3LC0xNi41Mzc5MTMgMjQuODA2ODcsMCB6IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9InNzc3Nzc3NzY3NjY2NjY2Njc3NzIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==";
var jams_tpl = {
  'img': {
    'type': 'img',
    'style': {
      'left': '4%',
      'top': '0%',
      'width': '40%'
    }
  },
  'flavour': {
    'type': 'text',
    'style': {
      'font-size': '4.2rem',
      'color': '#000000',
      'left': '40%',
      'top': '0%',
      'height': '100%',
      'width': '60%'
    }
  },
  'date': {
    'type': 'date',
    'style': {
      'left': '6%',
      'top': '75%',
      'width': '34%',
      'font-size': '2.4rem'
    }
  }
};
var jams_list = [
  {
    'img': 'inc/img/abricots.png',
    'flavour': {
      "data": "Confiture d'Abricots",
      "style": {
        "color": "#ff9900"
      }
    }
  },
  {
    'img': 'inc/img/cerises.png',
    'flavour': {
      "data" : "Confiture de Cerises",
      "style": {
        "color": "#990000"
      }
    }
  },
  {
    'img': 'inc/img/fraises.png',
    'flavour': {
      "data": "Confiture de Fraises",
      "style": {
        "color": "#ff0000"
      }
    }
  },
  {
    'img': 'inc/img/fraises_rhubarbe.png',
    'flavour': {
      "data": "Confiture Fraises Rhubarbe",
      "style": {
        "color": "#ff3333"
      }
    }
  },
  {
    'img': 'inc/img/mures.png',
    'flavour': {
      "data": "Confiture de Mûres",
      "style": {
        "color": "#333333"
      }
    }
  },
  {
    'img': 'inc/img/myrtilles.png',
    'flavour': {
      "data": "Confiture de Myrtilles",
      "style": {
        "color": "#333399"
      }
    }
  },
  {
    'img': 'inc/img/prunes.png',
    'flavour': {
      "data": "Confiture de Prunes",
      "style": {
        "color": "#663366"
      }
    }
  },
  {
    'img': 'inc/img/rhubarbe.png',
    'flavour': {
      "data": "Confiture de Rhubarbe",
      "style": {
        "color": "#663333"
      }
    }
  },
  {
    'img': 'inc/img/cassis.png',
    'flavour': {
      "data": "Gelée de Cassis",
      "style": {
        "color": "#000033"
      }
    }
  },
  {
    'img': 'inc/img/fraises.png',
    'flavour': {
      "data": "Gelée de Fraises",
      "style": {
        "color": "#ff0000"
      }
    }
  },
  {
    'img': 'inc/img/framboises.png',
    'flavour': {
      "data": "Gelée de Framboises",
      "style": {
        "color": "#cc0000"
      }
    }
  },
  {
    'img': 'inc/img/groseilles.png',
    'flavour': {
      "data": "Gelée de Groseilles",
      "style": {
        "color": "#993333"
      }
    }
  },
  {
    'img': 'inc/img/mures.png',
    'flavour': {
      "data": "Gelée de Mûres",
      "style": {
        "color": "#333333"
      }
    }
  },
  {
    'img': 'inc/img/myrtilles.png',
    'flavour': {
      "data": "Gelée de Myrtilles",
      "style": {
        "color": "#333399"
      }
    }
  }
];

function loadJam() {
  loadTemplate(template);
  if (document.getElementById('jams').value !== "") {
    loadData(list[document.getElementById('jams').value]);
  }
  unloadEditor();
}

function inputEvt(name, callback = (val) => val) {
  return function(evt) {
    var elt = getEditElt()
    if (elt) {
      var dataStyle = JSON.parse(elt.getAttribute('data-style'));
      dataStyle[name] = callback(evt.target.value);
      elt.setAttribute('data-style', JSON.stringify(dataStyle));
    }
  };
}
document.getElementById('jams').oninput = loadJam;
document.getElementById('cols').oninput = generatePage;
document.getElementById('rows').oninput = generatePage;
document.getElementById('gap').oninput = generatePage;
document.getElementById('padding').oninput = generatePage;
document.getElementById('border').oninput = generatePage;
document.getElementById('border-radius').oninput = generatePage;
document.getElementById('cols').oninput = generatePage;
document.getElementById('add-img').onclick = (evt) => { addImg(getName('img'), '', true); };
document.getElementById('add-text').onclick = (evt) => { addText(getName('text')); };
document.getElementById('add-date').onclick = (evt) => { addDate(getName('date')); };
document.getElementById('add-to-list').onclick = (evt) => { addToList(); };
document.getElementById('remove-from-list').onclick = (evt) => { removeFromList(); };
document.getElementById('move-down-list').onclick = (evt) => { moveDownList(); };
document.getElementById('move-up-list').onclick = (evt) => { moveUpList(); };
document.getElementById('edit').oninput = (evt) => { editElt(evt.target.value); };
document.getElementById('move').oninput = (evt) => { moveElt(evt.target.value); };
document.getElementById('delete').oninput = (evt) => { deleteElt(evt.target.value); };
document.getElementById('print').onclick = (evt) => { window.print(); };
document.getElementById('clear').onclick = (evt) => { if (confirm(evt.target.getAttribute('data-confirm'))) { window.location.href = '#'; window.location.reload(); }};
document.getElementById('img-selection').oninput = (evt) => {
  document.getElementById('img').value = evt.target.value;
  document.getElementById('img').dispatchEvent(new Event('input'));
};
document.getElementById('font-selection').oninput = (evt) => {
  document.getElementById('font-family').value = evt.target.value;
  document.getElementById('font-family').dispatchEvent(new Event('input'));
};
document.getElementById('color').oninput = inputEvt('color');
document.getElementById('font-family').oninput = inputEvt('font-family');
document.getElementById('font-size').oninput = inputEvt('font-size', (val) => (parseInt(val)/10)+"rem");
document.getElementById('height').oninput = inputEvt('height', (val) => val+"%");
document.getElementById('width').oninput = inputEvt('width', (val) => val+"%");

document.getElementById('img').oninput = (evt) => {
  var elt = getEditElt()
  if (elt) {
    elt.querySelector('img').src = evt.target.value;
    generatePage();
  }  
}
document.getElementById('height-auto').onchange = (evt) => {
  var elt = getEditElt()
  if (elt) {
    var dataStyle = JSON.parse(elt.getAttribute('data-style'));
    if (evt.target.checked) {
      delete dataStyle['height'];
      document.getElementById('height').parentNode.style.display = 'none';
    } else {
      document.getElementById('height').parentNode.style.display = 'initial';
      document.getElementById('height').value = parseInt(100*elt.offsetHeight/document.getElementById('demo').offsetHeight);
    }
    elt.setAttribute('data-style', JSON.stringify(dataStyle));
  }
};
document.getElementById('width-auto').onchange = (evt) => {
  var elt = getEditElt()
  if (elt) {
    var dataStyle = JSON.parse(elt.getAttribute('data-style'));
    if (evt.target.checked) {
      delete dataStyle['width'];
      document.getElementById('width').parentNode.style.display = 'none';
    } else {
      document.getElementById('width').parentNode.style.display = 'initial';
      document.getElementById('width').value = parseInt(100*elt.offsetWidth/document.getElementById('demo').offsetWidth);
    }
    elt.setAttribute('data-style', JSON.stringify(dataStyle));
  }
};


function isText(elt) {
  if (elt.querySelector('img')) {
    return false;
  } else {
    return true;
  }
}

function isImg(elt) {
  if (elt.querySelector('img')) {
    return true;
  } else {
    return false;
  }
}

function getEditElt() {
  if (document.getElementById('edit').value.length != 0) {
    var name = document.getElementById('edit').value;
    var elt = document.querySelector('#demo > div > p.'+name);
    return elt;
  }
}

function uneditElt(name) {
  document.querySelectorAll('#demo > div > p[contenteditable]').forEach(elt => elt.removeAttribute('contenteditable'));
}

function editImg(name) {
  
}

function editText(name) {
  document.querySelectorAll('#demo > div > p[contenteditable]').forEach(elt => elt.removeAttribute('contenteditable'));
  document.querySelector('#demo > div > p.'+name).setAttribute('contenteditable', '');
  document.querySelector('#demo > div > p.'+name).focus();
}

function loadEditor(name) {
  var elt = document.querySelector('#demo > div > p.'+name);
  document.getElementById('editor').style.display = "block";
  document.querySelectorAll('#editor > *').forEach((elt) => elt.style.display = 'none');
  var dataStyle = JSON.parse(elt.getAttribute('data-style'));
  if (isImg(elt)) {
    document.getElementById('img').parentNode.style.display = 'block';
    document.getElementById('img-autoresize').parentNode.style.display = 'block';
    document.getElementById('img-selection').parentNode.style.display = 'block';
    document.getElementById('img').value = elt.querySelector('img').getAttribute('src');    
  }
  if (isText(elt)) {
    document.getElementById('font-family').parentNode.style.display = 'block';
    document.getElementById('font-selection').parentNode.style.display = 'block';
    document.getElementById('font-selection').value = "";
    document.getElementById('font-size').parentNode.style.display = 'block';
    document.getElementById('color').parentNode.style.display = 'block';
    if ("font-family" in dataStyle) {
      document.getElementById('font-family').value = dataStyle['font-family'];
    }
    if ("color" in dataStyle) {
      document.getElementById('color').value = dataStyle['color'];
    }
    if ("font-size" in dataStyle) {
      document.getElementById('font-size').value = parseInt(parseFloat(dataStyle['font-size'])*10);
    } else {
      document.getElementById('font-size').value = parseInt(window.getComputedStyle(elt).fontSize);
    }
  }
  document.getElementById('height').parentNode.style.display = 'block';
  document.getElementById('height-auto').parentNode.style.display = 'block';
  document.getElementById('width').parentNode.style.display = 'block';
  document.getElementById('width-auto').parentNode.style.display = 'block';
  if ("height" in dataStyle) {
    document.getElementById('height').value = dataStyle['height'];
  } else {
    document.getElementById('height').parentNode.style.display = 'none';
    document.getElementById('height-auto').checked = true;
  }
  if ("width" in dataStyle) {
    document.getElementById('width').value = dataStyle['width'];
  } else {
    document.getElementById('width').parentNode.style.display = 'none';
    document.getElementById('width-auto').checked = true;
  }
}

function unloadEditor() {
  document.getElementById('editor').style.display = "none";
}

function editElt(name) {
  if (name == "") {
    document.getElementById('edit').value = '';
    uneditElt();
    unloadEditor();
  } else {
    moveElt('');
    loadEditor(name);
    var elt = document.querySelector('#demo > div > p.'+name);
    if (elt.querySelector('img')) {
      editImg(name);
    } else {
      editText(name);
    }
  }
}

function addTemplate(name, type) {
  template[name] = {'type':type};
}

function getList() {
  return list;
}

function moveUpList() {
  if (document.getElementById('jams').selectedIndex > 1) {
    var x = document.getElementById('jams').selectedIndex - 1;
    list[x] = list.splice(x - 1, 1, list[x])[0];
    loadList(list);
    document.getElementById('jams').selectedIndex = x;
    updateHash();
  }
}

function moveDownList() {
  if (document.getElementById('jams').selectedIndex < document.getElementById('jams').length - 1 && document.getElementById('jams').selectedIndex > 0) {
    var x = document.getElementById('jams').selectedIndex - 1;
    list[x] = list.splice(x + 1, 1, list[x])[0];
    loadList(list);
    document.getElementById('jams').selectedIndex = x + 2;
    updateHash();
  }
}

function removeFromList() {
  var idx = document.getElementById('jams').selectedIndex;
  if (idx > 0) {
    list.splice(idx - 1, 1);
    loadList(list);
    document.getElementById('jams').selectedIndex = idx - 1;
  }
  updateHash();
}

function addToList() {
  list.push(getData());
  loadList(list);
  document.getElementById('jams').selectedIndex = document.getElementById('jams').options.length-1;
  updateHash();
}

function getData() {
  var data = {};
  Object.keys(template).forEach((key) => {
    switch(template[key]['type']) {
      case 'img':
      data[key] = document.querySelector('#demo > div > p.'+key+' > img').src;
      break;
      case 'text':
      data[key] = document.querySelector('#demo > div > p.'+key).innerHTML;
      break;
    }
  });
  return data;
}

function getTemplate() {
  Object.keys(template).forEach((key) => {
    template[key]['style'] = JSON.parse(document.querySelector('#demo > div > p.'+key).getAttribute('data-style'));
  });
  return template;
}

function loadData(data) {
  var content;
  var d;
  Object.keys(data).forEach((key) => {
    if (key in template) {
      d = data[key];
      if (typeof d !== 'string') {
        content = data[key]['data'];
      } else {
        content = d;
      }
      switch(template[key]['type']) {
        case 'img':
        document.querySelector('#demo > div > p.'+key+' > img').src = content;
        break;
        case 'text':
        document.querySelector('#demo > div > p.'+key).innerHTML = content;
        break;
      }
      if (typeof d['style'] !== 'undefined') {
        var dataStyle = JSON.parse(document.querySelector('#demo > div > p.'+key).getAttribute('data-style'));
        Object.keys(d['style']).forEach((k) => {
          dataStyle[k] = d['style'][k];
        });
        document.querySelector('#demo > div > p.'+key).setAttribute('data-style', JSON.stringify(dataStyle));
      }
    }
  });
  generatePage();
}

function getHash() {
  return btoa(JSON.stringify({
    'template': getTemplate(),
    'list': getList(),
    'data': getData(),
    'options': getOptions()
  }));
}

function toString(data) {
  var str = '';
  Object.keys(template).forEach(key => {
    if (template[key].type == 'text') {
      if (typeof data[key] === 'string') {
        str = data[key];
      } else if (typeof data[key] !== 'undefined') {
        str = data[key]['data'];
      }
    }
  });

  return str;
}

function loadList(l) {
  list = l;
  document.getElementById('jams').innerHTML = '';
  document.getElementById('jams').innerHTML += '<option value=""></option>';
  l.forEach((elt, key) => {
    document.getElementById('jams').innerHTML += '<option value="'+key+'">'+toString(elt)+'</option>';
  });
}

function loadHash() {
  if (window.location.href.indexOf('#') !== -1) {
    var hash = window.location.hash.substring(1);
    if (hash) {
      template = {};
      hash = JSON.parse(atob(hash));
      if ('options' in hash) {
        loadOptions(hash.options);
      }
      if ('template' in hash) {
        loadTemplate(hash.template);
        if ('list' in hash) {
          loadList(hash.list);
        }
        if ('data' in hash) {
          loadData(hash.data);
        }
      }
    }
  } else {
    loadTemplate(jams_tpl);
    loadList(jams_list);
    document.getElementById('jams').value = 0;
    loadJam();
  }
}

function getName(type) {
  var name = document.getElementById('item-name').value;
  if (name.length === 0) { name = type+'-'+(demo.querySelector('#demo > div').childNodes.length+1); }
  else { document.getElementById('item-name').value = ''; }
  addTemplate(name, type);
  return name;
}

function addToForm(key) {
  document.querySelector('#move').options.add(new Option(key, key));
  document.querySelector('#edit').options.add(new Option(key, key));
  document.querySelector('#delete').options.add(new Option(key, key));
}

function createElt(name) {
  var elt = document.createElement('p');
  elt.className = name;
  elt.setAttribute('data-style', '{}');
  return elt;
}

function resizeImg(evt) {
  var img = evt.target;
  var dataStyle = JSON.parse(img.parentNode.getAttribute('data-style'));
  if (document.getElementById('img-autoresize').checked) {
    if (img.naturalWidth > document.getElementById('demo').offsetWidth) {
      dataStyle.width = '100%';
      dataStyle.height = document.getElementById('demo').offsetWidth/document.getElementById('demo').offsetHeight * 100*img.naturalHeight/img.naturalWidth + '%';
    }
    if (img.naturalHeight > document.getElementById('demo').offsetHeight) {
      dataStyle.height = '100%';
      dataStyle.width =  document.getElementById('demo').offsetHeight/document.getElementById('demo').offsetWidth * 100*img.naturalWidth/img.naturalHeight + '%';
    }
    generatePage();
  }
  if (img.getAttribute('center')) {
    dataStyle.left = ((document.querySelector('#demo').offsetWidth-img.naturalWidth)/2)*100/document.querySelector('#demo').offsetWidth + '%';
    dataStyle.top = ((document.querySelector('#demo').offsetHeight-img.naturalHeight)/2)*100/document.querySelector('#demo').offsetHeight + '%';
  }
  img.parentNode.setAttribute('data-style', JSON.stringify(dataStyle));
}

function addImg(name, src = "", center = false) {
  var elt = createElt(name);
  var img = document.createElement('img');
  if (center) img.setAttribute('center', true);
  elt.appendChild(img);
  img.onload = resizeImg;
  img.onerror = (evt) => {
    evt.target.src = defaultImg;
    dataStyle = {'width':'50%'};
    img.parentNode.setAttribute('data-style', JSON.stringify(dataStyle));
  };
  if (src.length > 0) { img.src = src; }
  else { img.src = defaultImg; }
  demo.querySelector('#demo > div').appendChild(elt);
  addToForm(name);
  template[name] = {
    'type': 'img'
  };
  generatePage();
  return elt;  
}

function addDate(name) {
  template[name] = {
    'type': 'date'
  };
  return addText(name, (new Date()).getFullYear());
}
function addText(name, text = "Text") {
  var elt = createElt(name);
  elt.className = name;
  elt.appendChild(document.createTextNode(text));
  document.querySelector('#demo > div').appendChild(elt);
  addToForm(name);
  if (!(name in template)) {
    template[name] = {
      'type': 'text'
    };
  }
  generatePage();
  return elt;  
}

function loadElementStyle(ratio = 1) {
  var output_style = "";
  document.querySelectorAll('#demo > div > p').forEach(elt => {
    var element_style = JSON.parse(elt.getAttribute('data-style'));
    output_style += '.label > div > p.'+elt.className+' {'+"\n";
    Object.keys(element_style).forEach(key => {
      if (element_style[key].endsWith('px') || element_style[key].endsWith('rem')) {
        output_style += '  '+key+': calc('+element_style[key]+' * '+ratio+');'+"\n";
      } else {
        output_style += '  '+key+': '+ element_style[key]+';'+"\n";
      }
    });
    output_style += '}'+"\n";
  });

  return output_style;
}

function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;

  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
  evt.originalTarget.dispatchEvent(newEvt);
}

function deleteElt(name) {
  document.getElementById('delete').value = "";
  if (confirm()) {
    var elt = document.querySelector('#demo > div > p.'+name);
    elt.parentNode.removeChild(elt);
    delete template[name];
    document.querySelectorAll('option[value="'+name+'"]').forEach((elt) => elt.parentNode.removeChild(elt));
    generatePage();
  }
}

function updateHash() {
  document.getElementById('share').href = '#'+getHash();
}

function moveElt(name) {
  var posLeft = 0, posTop = 0, posX = 0, posY = 0;
  if (name === '') {
    document.getElementById('move').value = '';
    document.getElementById('demo').onmousedown = null;
    document.getElementById('demo').ontouchstart = null;
    document.getElementById('demo').ontouchmove = null;
    document.getElementById('demo').ontouchend = null;
    unloadEditor();
  } else {
    editElt('');
    var elt = document.querySelector('#demo > div > p.'+name);
    document.getElementById('demo').onmousedown = dragMouseDown;
    document.getElementById('demo').ontouchstart = onTouch;
    document.getElementById('demo').ontouchmove = onTouch;
    document.getElementById('demo').ontouchend = onTouch;
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      var style = JSON.parse(elt.getAttribute('data-style'));
      style.left = ((e.clientX - document.querySelector('#demo').offsetLeft)*100/document.querySelector('#demo').offsetWidth) - ((elt.offsetWidth*100)/(2*document.querySelector('#demo').offsetWidth)) + "%";
      style.top = ((e.clientY - document.querySelector('#demo').offsetTop)*100/document.querySelector('#demo').offsetHeight) - ((elt.offsetHeight*100)/(2*document.querySelector('#demo').offsetHeight)) + "%";
      
      elt.setAttribute('data-style', JSON.stringify(style));
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}


function generatePage() {
  var cols = parseInt(document.getElementById('cols').value);
  var rows = parseInt(document.getElementById('rows').value);
  var number = cols * rows;
  var ratio = document.querySelector('page').offsetWidth / (21/* cm */ * 96/* dpi */ / /* 1 inch = 2.54 cm */2.54);

  // generate label
  page.innerHTML = '';
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
                  + '  clip-path: inset(0 0 0 0 round '+(document.getElementById('border-radius').value*ratio)+'px);'
                  + '  border-radius: '+(document.getElementById('border-radius').value*ratio)+'px;'
                  + '  width: '+(document.getElementById('border').checked?'calc(100% - 2px)':'100%')+';'
                  + '  height: '+(document.getElementById('border').checked?'calc(100% - 2px)':'100%')+';'
                  + '}'
                  + loadElementStyle(ratio) 
                  + '@media print {'
                  + '  page[size="A4"] {'
                  + '    grid-template-columns: '+Array(cols).fill("auto").join(" ")+';'
                  + '    grid-gap: '+document.getElementById('gap').value+'px;'
                  + '    padding: '+document.getElementById('padding').value+'px;'
                  + '    height: calc(29.7cm  - '+(2*parseInt(document.getElementById('padding').value))+'px);'
                  + '    width: calc(21cm  - '+(2*parseInt(document.getElementById('padding').value))+'px);'
                  + '  }'
                  + loadElementStyle() 
                  + '}';


  document.getElementById('demo').style.width = page.querySelector('.label').offsetWidth + 'px';
  document.getElementById('demo').style.height = page.querySelector('.label').offsetHeight + 'px';
  updateHash();
}

const resizeObserver = new ResizeObserver(entries => generatePage());
resizeObserver.observe(document.querySelector('page'));

const observer = new MutationObserver((mutationRecords) => generatePage());
observer.observe(document.getElementById('demo'), {
  characterData: true,
  attributes: true,
  attributeFilter: [ "data-style" ],
  subtree: true,
})

function loadImgSelection() {
  var selection = {
    '':'',
    'abricots':'inc/img/abricots.png',
    'cassis':'inc/img/cassis.png',
    'cerises':'inc/img/cerises.png',
    'fraises':'inc/img/fraises.png',
    'fraises_rhubarbe':'inc/img/fraises_rhubarbe.png',
    'framboises':'inc/img/framboises.png',
    'groseilles':'inc/img/groseilles.png',
    'mures':'inc/img/mures.png',
    'myrtilles':'inc/img/myrtilles.png',
    'prunes':'inc/img/prunes.png',
    'rhubarbe':'inc/img/rhubarbe.png'
  }
  Object.keys(selection).forEach(key => {
    document.getElementById('img-selection').options.add(new Option(key, selection[key]));
  });
}

loadImgSelection();

function loadFontSelection() {
  var selection = {
    '':'',
    'Dancing Script':'Dancing Script',
    'Indie Flower':'Indie Flower'
  }
  Object.keys(selection).forEach(key => {
    document.getElementById('font-selection').options.add(new Option(key, selection[key]));
  });
}

loadFontSelection();

function clearTemplate() {
  template = {};
  document.querySelector('#demo > div').innerHTML = "";
  document.querySelector('#move').innerHTML = '<option value=""></option>';
  document.querySelector('#edit').innerHTML = '<option value=""></option>';
  document.querySelector('#delete').innerHTML = '<option value=""></option>';
}

function getOptions() {
  return {
    'rows': document.getElementById('rows').value,
    'cols': document.getElementById('cols').value,
    'gap': document.getElementById('gap').value,
    'margin': document.getElementById('padding').value,
    'border': document.getElementById('border').checked,
    'border-radius': document.getElementById('border-radius').value
  };
}

function loadOptions(opts) {
  if ('cols' in opts) {
    document.getElementById('cols').value = opts['cols'];
  }
  if ('rows' in opts) {
    document.getElementById('rows').value = opts['rows'];
  }
  if ('gap' in opts) {
    document.getElementById('gap').value = opts['gap'];
  }
  if ('border' in opts) {
    document.getElementById('border').checked = !!opts['border'];
  }
  if ('border-radius' in opts) {
    document.getElementById('border-radius').value = opts['border-radiusx'];
  }
}

function loadTemplate(tpl) {
  template = tpl;
  clearTemplate();
  Object.keys(tpl).forEach(key => {
    var elt;
    switch(tpl[key]['type']) {
      case 'date':
        elt = addDate(key);
        break;
      case 'img':
        elt = addImg(key);
        break;
      case 'text':
        elt = addText(key);
        break;
    }
    elt.setAttribute('data-style', JSON.stringify(tpl[key]['style']));
  });
  generatePage();
}

loadHash();
generatePage();
