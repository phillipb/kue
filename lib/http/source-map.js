{"version":3,"file":"aa750486-f785-47ae-953b-61d837fccd83.js","sources":["client/app.js","client/controllers/application.js","client/controllers/home.js","client/data.js","client/helpers/arrayify.js","client/helpers/toAgo.js","client/models/job.js","client/models/provider.js","client/models/reservation.js","client/models/user.js","client/router.js","client/runtime.js"],"names":["App","Ember","Application","create","rootElement","LOG_TRANSITIONS","LOG_TRANSITIONS_INTERNAL","initializer","name","initialize","register","Session","singleton","inject","Object","extend","currentUser","isAuthenticated","localStorage","getItem","property","token","setToken","setItem","this","removeToken","removeItem","ApplicationController","ObjectController","HomeController","actions","removeFirstItem","objectAtContent","destroyRecord","total","get","DS","RESTAdapter","reopen","namespace","ApplicationSerializer","RESTSerializer","primaryKey","headers","x-auth-token","RawTransform","Transform","deserialize","serialized","serialize","deserialized","Handlebars","helper","value","escaped","Utils","escapeExpression","SafeString","moment","fromNow","attr","Job","Model","created_at","duration","priority","progress","state","typ","updated_at","data","JobAdapter","Adapter","findQuery","store","type","query","dfd","jQuery","Deferred","$","getJSON","map","val","i","job","resolve","jobs","Provider","price","loc","Reservation","eta","createdOn","carImage","claimed","license","longitude","latitude","address","provider","belongsTo","User","phone","email","Router","location","route","path","HomeRoute","Route","model","InactiveRoute","CompleteRoute","FailedRoute","DelayedRoute","find","ActiveRoute","IndexRoute","jade","exports","nulls","Array","isArray","arr","prototype","toString","call","keys","obj","key","hasOwnProperty","push","merge","a","b","ac","bc","filter","concat","join","attrs","buf","terse","len","length","indexOf","JSON","stringify","escape","html","String","replace","rethrow","err","filename","lineno","context","str","require","readFileSync","lines","split","start","Math","max","end","min","slice","line","curr","message"],"mappings":"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","sourcesContent":["App = Ember.Application.create({\n  rootElement: '#body',\n  LOG_TRANSITIONS: true, // basic logging of successful transitions\n  LOG_TRANSITIONS_INTERNAL: true // detailed logging of all routing steps\n});\n\nEmber.Application.initializer({\n  name: 'Dependency-Injection',\n\n  initialize: function(container, application) {\n    App.register('session:current', App.Session, {singleton: true});\n    App.inject('controller', 'session', 'session:current');\n    App.inject('route', 'session', 'session:current');\n  }\n});\n\nApp.Session = Ember.Object.extend({\n  currentUser: '',\n\n  isAuthenticated: function() {\n    return !!localStorage.getItem('token');\n  }.property('isAuthenticated'),\n\n  token: function() {\n    return localStorage.getItem('token');\n  }.property('token'),\n\n  setToken: function(token) {\n    localStorage.setItem('token', token);\n    this.isAuthenticated = true;\n  },\n\n  removeToken: function() {\n    localStorage.removeItem('token');\n    this.isAuthenticated = false;\n  }\n});\n\n","App.ApplicationController = Ember.ObjectController.extend({\n\n\n});\n","App.HomeController = Ember.ObjectController.extend({\n\n  actions: {\n    removeFirstItem: function() {\n      this.objectAtContent(0).destroyRecord();\n    }\n  },\n\n  total: function (argument) {\n    return this.get('length');\n  }.property('@each')\n\n});\n","DS.RESTAdapter.reopen({\n  namespace: 'api'\n});\n\nApp.ApplicationSerializer = DS.RESTSerializer.extend({\n  primaryKey: '_id'\n});\n\nDS.RESTAdapter.reopen({\n  headers: {\n    'x-auth-token': localStorage.getItem('token') || ''\n  }\n});\n\nApp.RawTransform = DS.Transform.extend({\n  deserialize: function(serialized) {\n    return serialized;\n  },\n  serialize: function(deserialized) {\n    return deserialized;\n  }\n});\n","Ember.Handlebars.helper('arrayify', function(value, options) {\n  var escaped = Handlebars.Utils.escapeExpression(value);\n  return new Handlebars.SafeString('<span class=\"highlight\">' + escaped + '</span>');\n});\n","Ember.Handlebars.helper('toAgo', function(value, options) {\n  return moment(value).fromNow();\n});\n","var attr = DS.attr;\n\nApp.Job = DS.Model.extend({\n  created_at: attr('string'),\n  duration: attr('string'),\n  priority: attr('string'),\n  progress: attr('string'),\n  state: attr('string'),\n  typ: attr('string'),\n  updated_at: attr('string'),\n  data: attr('raw')\n});\n\n\nApp.JobAdapter =  DS.Adapter.extend({\n\n  findQuery: function(store, type, query) {\n    debugger;\n    var dfd = new jQuery.Deferred();\n    return $.getJSON('/jobs/' + query.type + '/0..10/asc', function(data) {\n      data = $.map(data, function(val, i) { return {job: data[i]} })\n      return dfd.resolve({jobs: data });\n    });\n  }\n});","var attr = DS.attr;\n\nApp.Provider = DS.Model.extend({\n  name: attr('string'),\n  price: attr('number'),\n  //user: DS.belongsTo('user'),\n  loc: attr('raw')\n});\n","var attr = DS.attr;\n\nApp.Reservation = DS.Model.extend({\n  eta: attr('date'),\n  price: attr('number'),\n  createdOn: attr('date'),\n  carImage: attr('string'),\n  claimed: attr('boolean'),\n  license: attr('string'),\n  longitude: attr('string'),\n  latitude: attr('string'),\n  address: attr('string'),\n  provider: DS.belongsTo('provider'),\n  loc: attr('raw')\n});\n","var attr = DS.attr;\n\nApp.User = DS.Model.extend({\n  name: attr('string'),\n  phone: attr('string'),\n  email: attr('string')\n});\n","(function () {\n  'use strict';\n\n  App.Router.reopen({\n    location: 'auto'\n  });\n\n  App.Router.map(function () {\n    this.route('home', {path: '/'});\n    this.route('inactive', {path: '/inactive'});\n    this.route('complete', {path: '/complete'});\n    this.route('failed', {path: '/failed'});\n    this.route('delayed', {path: '/delayed'});\n    this.route('active', {path: '/active'});\n  });\n\n\n  App.HomeRoute = Ember.Route.extend({\n    model: function() {\n      return {};\n    }\n  });\n\n  App.InactiveRoute = Ember.Route.extend({\n    model: function() {\n      return {};\n    }\n  });\n\n  App.CompleteRoute = Ember.Route.extend({\n    model: function() {\n      return {};\n    }\n  });\n\n  App.FailedRoute = Ember.Route.extend({\n    model: function() {\n      return {};\n    }\n  });\n\n  App.DelayedRoute = Ember.Route.extend({\n    model: function() {\n      return this.store.find('job', {type: 'delayed'});\n    }\n  });\n\n  App.ActiveRoute = Ember.Route.extend({\n    model: function() {\n      var self = this;\n      return [];\n    }\n  });\n\n  App.IndexRoute = Ember.Route.extend({\n    model: function() {\n      return {name : 'Phillip Burch'};\n    }\n  });\n\n})();\n","jade=function(exports){Array.isArray||(Array.isArray=function(arr){return\"[object Array]\"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a[\"class\"],bc=b[\"class\"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a[\"class\"]=ac.concat(bc).join(\" \");for(var key in b)key!=\"class\"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push(\"\");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];\"boolean\"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'=\"'+key+'\"')):0==key.indexOf(\"data\")&&\"string\"!=typeof val?buf.push(key+\"='\"+JSON.stringify(val)+\"'\"):\"class\"==key&&Array.isArray(val)?buf.push(key+'=\"'+exports.escape(val.join(\" \"))+'\"'):escaped&&escaped[key]?buf.push(key+'=\"'+exports.escape(val)+'\"'):buf.push(key+'=\"'+val+'\"')}}return buf.join(\" \")},exports.escape=function escape(html){return String(html).replace(/&(?!(\\w+|\\#\\d+);)/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\").replace(/\"/g,\"&quot;\")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require(\"fs\").readFileSync(filename,\"utf8\"),lines=str.split(\"\\n\"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?\"  > \":\"    \")+curr+\"| \"+line}).join(\"\\n\");throw err.path=filename,err.message=(filename||\"Jade\")+\":\"+lineno+\"\\n\"+context+\"\\n\\n\"+err.message,err},exports}({});"]}