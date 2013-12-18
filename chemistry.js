function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};
function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
}

var chemie = function(){
  this.nodes = [];
  this.edges = [];
};
chemie.prototype.addReaction = function(reagentia, producten, type, page, environment, katalysator, evenwicht){
  var text = [(environment ? environment : null), (katalysator ? ('kat: '+katalysator) : null), (evenwicht ? 'evenwicht (afhankelijkheid): ' + evenwicht : null)].filter(function(n){return n}).join(', ');
  this.edges.push({'data': {
    'source': reagentia.id,
    'target': producten.id,
    'env': text + ' (p'+page+')',
    'type': type.color,
    'typeid': type.id,
    'evenwicht': evenwicht ? 1 : 0
  }});
};
chemie.prototype.addOClass = function(name, formula){
  var oclassObject = new oclass(name, formula);

  this.nodes.push({'data': {
    'id': oclassObject.id,
    'name': oclassObject.name+' ('+oclassObject.formula+')',
  }});
  return oclassObject;
}

var mechanism = function(id, name, color){
  this.id = id;
  this.name = name;
  this.color = color;
}

var oclass = function(name, formula){
  this.name = name;
  this.formula = formula;
  this.id = guid();
}