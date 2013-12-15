$(loadCy = function(){

  options = {
    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'content': 'data(name)',
          'color': '#000',
          'text-valign': 'center',
          'shape': 'octagon',
          'width': 150,
          'height': 150,

          'text-outline-color': '#ccc',
          'text-outline-width': 1,
          'background-color': '#333',
        })
      .selector(':selected')
        .css({
          'background-color': '#000',
          'line-color': '#000',
          'target-arrow-color': '#000',
          'source-arrow-color': '#000',
        })
      .selector('edge')
        .css({
          'width': 8,
          'target-arrow-shape': 'triangle',
          'source-arrow-shape': 'circle',
          'content':'data(env)',
          'color': 'data(type)',
          'line-color': 'data(type)',
          'target-arrow-color': 'data(type)',
          'source-arrow-color': 'data(type)',

          'text-outline-color': '#000',
          'text-outline-width': 4,
        })
      .selector('edge[evenwicht=1]')
        .css({
          'source-arrow-shape': 'triangle',
      }).selector('.faded')
        .css({
          'opacity': 0,
          'text-opacity': 0,
        }),
    elements: {},
    layout: {
          name: 'random',
          ready: undefined,
          stop: undefined,
          fit: true
    },

    ready: function(){
      cy = this;

      window.cy = this;

      cy.elements().unselectify();

      cy.on('tap', 'node', function(e){
        var node = e.cyTarget;
        var neighborhood = node.neighborhood().add(node);

        cy.elements().addClass('faded');
        neighborhood.removeClass('faded');
      });

      cy.on('tap', function(e){
        if( e.cyTarget === cy ){
          cy.elements().removeClass('faded');
        }
      });
    }
  };

  options.elements.edges = ochem.edges;
  options.elements.nodes = ochem.nodes;

  $('#cy').cytoscape(options);
});



var container = $('#mechanisms');
$.each(mechanisms, function(i, mechanism){
  container.append("<input type='button' class='btn-mechanism' id='"+mechanism.id+"' value='"+mechanism.name+"' style='background-color: "+mechanism.color+"'></input> ");
});

$('.btn-mechanism').click(function(e){
  cy.elements().addClass('faded');
  var id = $(this).attr('id');
  cy.edges('[typeid="'+id+'"]').connectedNodes().removeClass('faded');
  cy.edges('[typeid="'+id+'"]').removeClass('faded');
});