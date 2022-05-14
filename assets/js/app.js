let element = document.getElementById('btn-obj');
let container_obj = document.getElementById('container-obj');

let btn_file = document.getElementById('btn-file');
let container_file = document.getElementById('container-file');
let container_select = document.getElementById('container-select');

element.addEventListener("click", myFunction);
btn_file.addEventListener('click', addFileInputFunction);

function myFunction() {
 
    const node = document.createElement("input");
    node.setAttribute('name','objectives[]');
    node.setAttribute('id', 'objectives[]');
    node.setAttribute('placeholder','Specific Objectives');
    node.setAttribute('type','text');
    container_obj.appendChild(node);
}

function addFileInputFunction() {
    const node = document.createElement("input");
    const selectNode = document.createElement("select");

    node.setAttribute('name','file[]');
    node.setAttribute('placeholder','File upload');
    node.setAttribute('type','file');
    node.classList.add('form-control');
    node.classList.add('mt-2');

    selectNode.classList.add('form-control');
    selectNode.classList.add('mt-2');
    selectNode.options.add(new Option('Rationale','1'))
    selectNode.options.add(new Option('Overview','2'))
    selectNode.options.add(new Option('Project details','3'))
    selectNode.options.add(new Option('Project Matrix','4'))


    container_file.appendChild(node);
    container_select.appendChild(selectNode);
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('.tt'))
console.log(tooltipTriggerList);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})