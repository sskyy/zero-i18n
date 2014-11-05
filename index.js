var _ = require('lodash')

var i18nModule = {
  dict : {},
  expand : function( module ){
    if( !module.i18n ) return

    var root = this
    _.forEach( module.i18n, function( trans, lang){
      var transWithNamespace = _.zipObject( [module.name], [trans])
      root.dict[lang] = _.merge(root.dict[lang] || {} , transWithNamespace )
    })
    console.log( root.dict, module.i18n)
  },
  route : {
    "GET /i18n/dict/:lang" : function(req, res){

      if( i18nModule.dict[req.param("lang")]){
        res.json( i18nModule.dict[req.param("lang")] )
      }else{
        res.status(404).end()
      }
    }
  }

}

  module.exports = i18nModule