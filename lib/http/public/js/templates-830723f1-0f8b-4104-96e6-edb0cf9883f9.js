Ember.TEMPLATES["_joblist"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n  <div class=\"job\">\n    <div class=\"block contents\">\n      <h2 class=\"id\"></h2><a class=\"remove\">x</a>\n      <canvas width=\"50\" height=\"50\" class=\"progress\"></canvas>\n      <table class=\"meta\">\n        <tbody>\n          <tr>\n            <td>Type:</td>\n            <td class=\"type\"></td>\n          </tr>\n          <tr>\n            <td>Title:</td>\n            <td class=\"title\"></td>\n          </tr>\n          <tr>\n            <td>Error:</td>\n            <td class=\"errorMessage\"></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"details\">\n      <div class=\"data\">\n        <table class=\"data\">\n          <tbody>\n            <tr>\n              <td>State:</td>\n              <td class=\"state\"></td>\n            </tr>\n            <tr>\n              <td>Priority:</td>\n              <td class=\"priority\"></td>\n            </tr>\n            <tr>\n              <td>Attempts:</td>\n              <td class=\"attempts\"></td>\n            </tr>\n            <tr class=\"time\">\n              <td>Duration:</td>\n              <td class=\"duration\"></td>\n            </tr>\n            <tr class=\"time\">\n              <td>Created:</td>\n              <td class=\"created_at\"></td>\n            </tr>\n            <tr class=\"time\">\n              <td>Updated:</td>\n              <td class=\"updated_at\"></td>\n            </tr>\n            <tr class=\"time\">\n              <td>Failed:</td>\n              <td class=\"failed_at\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"error\">\n        <pre></pre>\n      </div>\n      <ul class=\"log\"></ul>\n    </div>\n  </div>\n");
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["active"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h3>Active</h3>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "_joblist", options) : helperMissing.call(depth0, "partial", "_joblist", options))));
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<ul id=\"menu\">\n	  <li class=\"inactive\">\n	  	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "inactive", options) : helperMissing.call(depth0, "link-to", "inactive", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	  </li>\n	  <li class=\"active\">\n	  	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "active", options) : helperMissing.call(depth0, "link-to", "active", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	  </li>\n	  <li class=\"failed\">\n	  	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "failed", options) : helperMissing.call(depth0, "link-to", "failed", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	  </li>\n	  <li class=\"complete\">\n	  	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "complete", options) : helperMissing.call(depth0, "link-to", "complete", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	  </li>\n	  <li class=\"delayed\">\n	  	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "delayed", options) : helperMissing.call(depth0, "link-to", "delayed", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	  </li>\n	</ul>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	  		<div class=\"count\">");
  stack1 = helpers._triageMustache.call(depth0, "inactiveCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>Queued\n	  	");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	  		<div class=\"count\">");
  stack1 = helpers._triageMustache.call(depth0, "activeCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>Active\n	  	");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	  		<div class=\"count\">");
  stack1 = helpers._triageMustache.call(depth0, "failedCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>Failed\n	  	");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	  		<div class=\"count\">");
  stack1 = helpers._triageMustache.call(depth0, "completeCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>Complete\n	  	");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	  		<div class=\"count\">");
  stack1 = helpers._triageMustache.call(depth0, "delayedCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>Delayed\n	  	");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"container\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n </div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["complete"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h3>Complete</h3>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "_joblist", options) : helperMissing.call(depth0, "partial", "_joblist", options))));
  return buffer;
  
});

Ember.TEMPLATES["delayed"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h3>Delayed</h3>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "_joblist", options) : helperMissing.call(depth0, "partial", "_joblist", options))));
  return buffer;
  
});

Ember.TEMPLATES["failed"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h3>Failed</h3>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "_joblist", options) : helperMissing.call(depth0, "partial", "_joblist", options))));
  return buffer;
  
});

Ember.TEMPLATES["inactive"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h3>Inactive</h3>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "_joblist", options) : helperMissing.call(depth0, "partial", "_joblist", options))));
  return buffer;
  
});