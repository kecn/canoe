(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.upperhand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AABATIARAAIAAglIgjAJ");
	this.shape.setTransform(1.75,1.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AABATIgKAAIgIgcIAjgJIAAAlg");
	this.shape_1.setTransform(1.75,1.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upperhand, new cjs.Rectangle(-1,-1,5.5,5.8), null);


(lib.upperarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag6AjIBgghAAzgiIhPAVIgCAAIgcAIAAqABIARgF");
	this.shape.setTransform(5.9,3.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("Ag+gFIAdgHIABAAIBPgVIAJgCIAHAdIgIADIgRAEIARgEIgRAEIgEAAIAAACIhgAhg");
	this.shape_1.setTransform(6.3,3.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upperarm, new cjs.Rectangle(-1,-0.8,13.8,8.9), null);


(lib.staticbody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA9i6IAlAWQgIgfgOgXQgRgegcgRQgNgKgUAKIgUAOIgUANIAAA7QgMAQgKAJQgDABgCADQgkAegZAxQgqBPAKBdIAAAcIAAAbIA3A8IAAAyIBkAAIAAhBIBiAAIAcBBIAuAFIgfiWIiRAAIAAhBIAGAAAA9i6IhJg9IgKgEAAAADIAXg9IAEAAAhAiaQAVgMBMAmQAUgIAIgyAgLB5IiXAI");
	this.shape.setTransform(16.5038,27.1375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AB2BGIgchBIhiAAIAABBIhkAAIAAgyIg3g7IAAgcICXgHICRAAIAfCVg");
	this.shape_1.setTransform(16.6,46.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("Ag+AjQALgJALgQIAAg5IAUgOIAKAEIBJA8QgIAygTAJQhMgngWAMg");
	this.shape_2.setTransform(16.3,8.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003333").s().p("AhgB0QgKheAqhOQAZgyAkgeIAEgEQAVgMBNAnIgGAAIAABGIgEAAIgYA8IgFAAIAAA2IgGAAIAABBIiWAHg");
	this.shape_3.setTransform(9.9288,25.6574);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAfIhJg8IgJgEIAUgOQAUgKANAKQAbARASAeQAOAWAHAfg");
	this.shape_4.setTransform(20.275,5.3375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.staticbody, new cjs.Rectangle(-1,-1,35,56.3), null);


(lib.shoulder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAogKIgEABQgYgCgQgEQgEgBgEgBQgFgCgEgCQgBgBgCgBQgBAAAAgBQgCgBgBgBQgEgEgBgEAgnAjIBAAAIAPgF");
	this.shape.setTransform(4,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("AgnAjIAAhFIAGAAQABAEAEAEIADADIABABIAEACIAIADIAIADQAQADAYACIAEgBIAAAoIgPAFg");
	this.shape_1.setTransform(4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoulder, new cjs.Rectangle(-1,-1,10,9), null);


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#CC9933","#FFFFFF"],[0.576,1],0,0,0,0,0,72.7).s().p("An5H6QjRjSAAkoQAAknDRjSQDSjREnAAQEoAADRDRQDSDSAAEnQAAEojSDSQjRDRkoAAQknAAjSjRg");
	this.shape.setTransform(23.55,36.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgsXgh0MBYvAAAMAAABDpMhYvAAAg");
	this.shape.setTransform(271.975,216.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FFFF","#FFFFFF"],[0.02,1],-34.9,-186.4,0,-34.9,-186.4,513.9).s().p("EgsXAh1MAAAhDpMBYvAAAMAAABDpg");
	this.shape_1.setTransform(271.975,216.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],-161.9,-60.7,0,-161.9,-60.7,566.5).s().p("EA5QATqMhzMAAAIAAvTINKhNQEajAE4pSQBHiHBhhwQFJl6J0hpQFhANDkHWQBRCnBCDiQBJD7CEBRQCFBRCdBYQB9BGBbAFQAaABAWgEQBqgRDZhjQC1hTBwhfQAUgRASgSQB0hzFelWQBohnB4hNQCFhWCYg4QEMhiEPgDQEMgEEOBZIBmBaIFcM1IAABZIBmDhIAABaIBvPcQgsgygBgGg");
	this.shape.setTransform(269.05,187.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.paddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABCh1IiDDr");
	this.shape.setTransform(5.175,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paddle, new cjs.Rectangle(-2.4,-3.5,15.200000000000001,25.5), null);


(lib.ocean = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("EhGKAKLIAAxUQCEhlCFgwQGMiPGeFCIAcAdQHal9HEDxQBtA6BsBSQCEigCFgwQGMiPGdFCIAdAdQHZl9HEDxQBuA6BqBeQCEisCFgwQGMiPGeFCIAcAdQHal9HEDxQBtA6BrBSQCFigCFgwQGMiPGdFCIAdAdQHZl9HEDxQBtA6BsBeIAAQNg");
	this.shape.setTransform(449.1,65.1262);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("EhGKAKLIAAxVIAVgNQAdgTAegHIADAAQAjgZAigKIATgEQAMgKAMgGQAfgOAggEIADAAQAmgWAlgFIAUgCIAHgFIASgIQAigLAhABIADgBQAngQAnABIAVABQANgFAOgCQAigHAiAHIAEAAQAZgGAYAAQENAEETDWIAdAcQHPl0G6DrQBrA5BqBRQCBidCDguQGDiMGVE6IAcAdQHPl0G7DrQBqA6BoBcQCCipCCgvQFAhzFKDCQBHAqBHA3IAdAdQHOl1G8DtQBrA4BoBRQCCidCCgvQGEiLGUE7IAcAdQHQl1G6DtQBrA5BpBbIAAQOMiMVAAAg");
	this.shape_1.setTransform(449.1,65.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQANgKANgHQAmgVAnAAIADABQAugiAsgDIAYgBQAOgNAOgHQAogSApAEIADAAQAxgeAuABQANAAANABIAIgFQALgIALgEQAqgOArAIIADABQAxgZAxAGIAZAEQAQgIAQgEQArgJAsANIADACQAggMAeAAQEHADENDSIAcAcQHFlsGyDmQBoA4BnBPQB/iZB/guQF7iIGMEzIAcAcQHElrGyDnQBnA3BoBaQB+ikCAguQE4hwFDC9QBFApBGA2IAcAcQHFlrGxDnQBpA4BnBPQB+iZCAguQF7iIGLE1IAcAbQHElqGxDnQBpA3BnBaIAAQOMiMVAAAg");
	this.shape_2.setTransform(449.1,65.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQAQgMAQgIQAugYAxAIIADABQA4gqA2ADQAOAAANACQASgQARgIQAxgVAxALIAEABQA7gmA4AGQAPABAPAEIAKgHQAMgKANgEQAzgSA0AQIADABQA7ghA7AMQAPACAPAFQASgMAUgFQAzgNA0AVIAFACQAlgRAkABQEBADEIDMIAbAbQG7liGoDhQBmA2BlBNQB8iWB9gsQFziFGDEtIAbAbQG6ljGoDiQBlA2BlBYQB8igB9gtQExhtE8C5QBEAoBEA1IAbAbQG7liGoDiQBmA2BkBOQB8iWB+gsQFyiEGDEtIAbAbQG6lhGoDiQBmA2BkBYIAAQOMiMVAAAg");
	this.shape_3.setTransform(449.1,65.1993);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQATgOATgKQA3gbA4AQIAFACQBBgyBBAJQAQABAQAEQAUgUAUgJQA5gYA7AUIAEABQBEgvBDANQARACARAGIALgJQAPgMAQgFQA6gWA8AYIAFACQBGgqBEASQAQAEASAGQAVgPAVgHQA8gPA+AcIAFADQArgWArAAQD7ADEBDHIAbAbQGylaGeDbQBjA1BjBLQB5iRB7gsQFqiBF6EmIAbAaQGwlaGdDdQBkA0BjBWQB5icB6gqQErhrE0C0QBCAnBDA0IAbAbQGxlZGdDcQBkA2BiBMQB5iSB6grQFriAF6EmIAaAaQGwlZGeDeQBjA1BjBWIAAQNMiMVAAAg");
	this.shape_4.setTransform(449.1,65.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQAWgRAVgKQBAgeBCAYIAEACQBNg6BJAOQATADASAGQAXgXAXgKQBBgbBEAaIAFADQBOg4BNATQATADATAJIAMgMQASgNARgHQBEgXBEAeIAGADQBPgyBNAXQAUAFAUAJQAYgUAYgHQBEgTBGAkIAGADQAxgbAyAAQD0ADD8DDIAaAZQGnlRGVDWQBiA0BhBJQB2iOB3gqQFjh+FwEeIAaAaQGolRGTDYQBiAzBgBUQB2iYB3gqQEkhnEtCwQBBAmBBAzIAaAaQGnlQGUDXQBiA0BgBKQB1iOB4gpQFih9FwEfIAaAaQGmlPGUDYQBiA0BgBUIAAQNMiMVAAAg");
	this.shape_5.setTransform(449.1,65.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("EhGKAKKIAAxVQAZgSAYgMQBIggBLAfIAGADQBVhCBUATQAVAFAUAIQAagbAagLQBKgeBMAjIAGACQBYg/BWAYQAWAFAWAKIANgNQATgQAUgHQBLgaBOAmIAGADQBag6BXAcQAWAHAWAKQAbgYAbgHQBMgWBPArIAHAEQA3ghA3AAQDwADD2C+IAZAZQGdlJGLDRQBfAyBeBIQB0iKB1gpQFah7FoEXIAaAZQGclIGKDTQBfAyBeBSQB0iUB0gpQEdhkEmCsQBAAkA/AyIAZAZQGdlGGKDSQBfAyBfBJQBziKB1goQFYh6FoEZIAaAZQGclGGKDTQBfAyBeBSIAAQOMiMVAAAg");
	this.shape_6.setTransform(449.1,65.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("EhGKAKKIAAxVQAbgUAcgNQBQgjBUAnIAGADQBhhLBdAaQAWAGAYAKQAcgeAdgMQBSghBWApIAFAEQBjhIBgAeQAXAGAYANIAQgPQAVgSAWgIQBUgeBXAuIAGAEQBkhDBgAiQAYAIAYAMQAegbAegJQBVgZBXAzIAHAEQA+gmA+AAQDpADDwC5IAZAYQGTlAGCDMQBdAxBbBGQByiHBygoQFRh3FfEQIAaAYQGRk+GBDMQBeAyBbBPQBxiQBygnQEVhiEfCoQA+AkA+AxIAZAYQGSk+GBDOQBdAxBbBGQBxiGBygnQFRh2FfESIAZAZQGRk9GBDOQBcAxBcBQIAAQOMiMVAAAg");
	this.shape_7.setTransform(449.1,65.2611);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("EhGKAKKIAAxVQAegXAegNQBagnBcAvIAHAFQBrhUBmAgQAaAHAZAMQAfgiAggNQBagkBfAyIAGAEQBthQBpAjQAbAIAaAPIARgRQAXgUAXgJQBdghBgA1IAHAFQBthMBrAoQAaAKAaAOQAggfAigKQBdgcBgA6IAIAFQBEgsBDABQDkACDqC0IAYAYQGJk3F4DGQBbAwBaBDQBuiCBvgnQFJh0FXEJIAYAYQGIk2F4DIQBaAwBaBNQBuiMBvgmQEPhfEXCkQA9AjA8AvIAYAYQGIk1F4DJQBaAwBaBEQBuiCBugmQFIhyFXELIAYAYQGIk0F3DJQBaAwBZBOIAAQOMiMVAAAg");
	this.shape_8.setTransform(449.1,65.2555);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("EhGKAKKIAAxVQAhgZAhgOQBigqBlA3IAIAFQB0hcBwAmQAcAIAcAOQAiglAjgOQBjgnBnA5IAHAFQB3hYBzApQAdAJAcARIASgSQAagXAZgKQBlgkBoA9IAIAFQB4hUB0AuQAdAKAcAQQAjgiAkgLQBmgfBoBBIAJAGQBKgxBKAAQDdADDlCvIAXAXQGAkvFuDBQBZAvBXBBQBsh/BsglQFAhxFPECIAXAXQF+ktFuDDQBZAvBWBLQBsiIBsglQEHhcESCfQA6AjA7AuIAXAXQF+ksFvDEQBYAvBWBCQBrh+BtglQE/huFOEDIAXAYQF+krFtDEQBYAvBXBMIAAQOMiMVAAAg");
	this.shape_9.setTransform(449.1,65.2609);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("EhGKAKKIAAxVQAkgbAkgPQBqgtBvA+IAHAGQB/hkB6AsQAfAKAeAPQAlgoAkgPQBtgqBvBAIAIAGQCBhhB8AvQAgALAeATIATgUQAcgaAcgKQBtgnBxBEIAIAGQCDhcB9AzQAfAMAfASQAmgmAmgMQBugjBzBJIAJAGQBQg2BPAAQDZADDdCqIAYAXQF0kmFmC7QBWAtBVBAQBph7BpglQE5htFED7IAXAXQF0kkFmC9QBWAtBVBKQBoiEBpgkQEBhZEJCbQA5AiA6AsIAXAXQF0kjFkC+QBWAuBUBBQBph6BpgkQE4hrFED9IAXAXQFzkiFkC/QBWAuBUBKIAAQOMiMVAAAg");
	this.shape_10.setTransform(449.1,65.2552);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("EhGKAKKIAAxVQAmgdAngQQB0gwB2BGIAJAHQCJhsCEAxQAhALAfASQAogtAogPQB1gtB4BIIAJAGQCLhpCGA0QAiANAgAVIAVgWQAegcAegKQB2grB6BMIAJAHQCLhlCHA4QAiAOAgATQApgpAqgNQB3gmB6BQIAJAHQBXg8BWABQDSADDYClIAXAVQFrkdFbC2QBVAsBSA+QBmh3BngkQEwhpE8DzIAWAWQFrkbFbC4QBUAsBSBIQBmiABmgjQD6hWEDCXQA3AhA4ArIAXAWQFpkaFaC5QBUAtBTA/QBlh3BmgiQEvhnE8D2IAXAWQFokZFaC6QBUAtBSBIIAAQOMiMVAAAg");
	this.shape_11.setTransform(449.1,65.2605);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQAqggAqgRQB6gyCBBNIAJAHQCTh0COA3QAiANAjATQArgvAqgRQB9gwCBBQIAKAHQCVhyCQA6QAjAOAjAXIAWgXQAggeAggMQB/gtCDBTIAJAHQCWhtCRA+QAkAPAiAVQAsgsAsgPQB/gpCEBXIAJAIQBehBBbABQDNACDSCgIAWAVQFhkUFTCxQBRAqBRA9QBjh0BjgiQEohnEzDtIAVAVQFikSFRCzQBSArBQBFQBjh8BjghQDzhUD7CTQA3AgA2AqIAWAVQFgkQFQC0QBSArBQA+QBihzBkghQEmhkEzDvIAVAWQFgkQFQC1QBRAsBQBGIAAQNMiMVAAAg");
	this.shape_12.setTransform(449.1,65.2434);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQAtgiAsgSQCEg1CIBVIAKAIQCeh9CYA9QAkAOAlAWQAug0AtgRQCFg0CKBYIAKAIQCgh6CZA/QAmAQAlAZQAMgOAMgLQAighAjgMQCGgwCLBbIAKAHQCgh1CbBDQAmAQAlAYQAvgwAvgQQCHgsCMBeIALAJQBjhGBhAAQDIADDMCbIAVAUQFXkLFJCrQBQApBOA7QBghxBhghQEfhiEqDlIAWAVQFWkKFICuQBPAqBPBDQBgh4BhggQDrhRD1CPQA0AfA1ApIAVAUQFVkHFICvQBPAqBNA8QBghwBigfQEdhgEqDoIAVAVQFVkHFGCwQBPArBOBEIAAQNMiMVAAAg");
	this.shape_13.setTransform(449.1,65.2377);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQAvgkAvgTQCNg4CSBcIAKAJQCoiFChBDQAnAPAnAYQAxg3AwgTQCOg2CTBfIAKAJQCqiDCjBGQAoAQAnAcQANgPANgMQAkgjAkgNQCPgzCUBiIALAJQCqh/ClBKQAoARAnAaQAyg1AxgQQCQgvCVBlIALAKQBqhMBnABQDBACDHCWIAUAUQFOkDE/CmQBMAoBNA5QBehtBeggQEWhfEiDeIAUAUQFNkAE+CoQBOApBLBBQBdh0BfgfQDlhODtCLQAzAeAzAnIAVAUQFLj+E+CqQBMApBMA5QBdhrBegeQEWhdEgDhIAVAVQFLj+E8CrQBMAqBMBCIAAQNMiMVAAAg");
	this.shape_14.setTransform(449.1,65.2429);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQAygmAzgUQCUg7CbBkIALAJQCyiNCqBIQAqASAqAZQAzg6AzgUQCWg5CcBnIALAJQC0iLCsBLQArASAqAeQANgQAOgNQAlglAngOQCXg2CdBqIAMAJQC0iHCuBPQAqATAqAbQA0g4A1gRQCYgzCdBtIANAKQBvhRBtABQC8ACDBCSIAUATQFDj7E1ChQBLAnBKA3QBbhpBbgfQEOhcEZDXIAUAUQFDj4E1CjQBLAoBJA/QBahwBcgeQDehLDlCGQAyAdAyAnIAUATQFBj1E0ClQBLAnBIA4QBbhnBbgdQENhZEYDaIAUAUQFBj1EyCnQBLAoBJBAIAAQNMiMVAAAg");
	this.shape_15.setTransform(449.1,65.2372);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQA1goA1gVQCdg+CkBsIAMAJQC7iVC1BOQAsATAsAbQA1g+A3gUQCfg8ClBuIALAKQC9iTC3BRQAtATAsAgQAOgRAOgOQAognAogOQCgg6CnBxIAMAKQC9iPC4BUQAtAUAsAeQA3g8A3gSQChg2CmB0IAMALQB2hWB0AAQC2ADC6CMIATASQE6jxEsCbQBIAmBHA1QBYhmBZgdQEHhZEQDQIAUATQE4jvErCeQBJAmBHA+QBYhsBYgdQDXhIDfCCQAvAcAxAmIATASQE3jsEqCfQBJAnBGA2QBYhjBZgcQEEhWEQDUIASATQE3jrEpChQBIAnBHA+IAAQNMiMVAAAg");
	this.shape_16.setTransform(449.1,65.2307);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQA3grA5gWQCmhACsBzIANALQDFieC/BUQAuAUAuAdQA5hBA5gWQCng/CuB2IAMALQDHicDBBXQAuAVAvAiQAPgSAPgPQAqgpArgPQCng9CwB5IAMAKQDJiYDBBaQAuAWAvAfQA5g/A6gTQCqg5CvB8IANALQB9hcB4ABQCwACC1CHIATASQEvjpEiCWQBGAkBFA0QBWhiBWgcQD9hWEIDJIATASQEujlEjCYQBFAlBFA7QBWhnBVgcQDRhFDWB+QAvAbAvAkIATASQEsjjEhCaQBGAmBFA0QBVhgBVgaQD8hSEHDNIASASQEsjiEfCcQBGAmBFA8IAAQNMiMVAAAg");
	this.shape_17.setTransform(449.1,65.2275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQA6gtA8gXQCuhDC1B7IAOALQDPimDJBaQAwAVAxAgQA6hFA9gXQCvhCC3B9IAMAMQDTikDJBcQAyAWAwAlQAPgTAQgQQAsgrAtgQQCxhAC3CAIAOALQDSigDKBgQAyAXAwAhQA9hDA9gUQCxg9C5CEIANALQCChhCAABQCqACCvCDIASARQEmjgEXCQQBEAjBDAyQBTheBUgcQD1hRD/DBIASASQEljdEYCUQBEAjBDA5QBShjBTgbQDJhCDQB6QAsAaAuAjIASARQEjjaEXCVQBDAkBCAzQBShcBTgZQD0hOD+DFIASASQEhjZEXCXQBDAlBCA6IAAQNMiMVAAAg");
	this.shape_18.setTransform(449.1,65.2218);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQA+gvA9gYQC3hGC/CCIANAMQDbiuDRBgQAzAXAyAhQA/hJA/gXQC4hFC/CFIANAMQDcisDTBiQA1AXAyAnQARgUAQgQQAuguAvgRQC5hDDACIIAOAMQDdipDUBlQA0AYAyAjQA/hGBAgVQC6hADBCLIAOAMQCJhmCGABQCkACCoB9IASARQEajYEQCLQBCAiBAAwQBQhbBRgaQDthOD3C6IARARQEbjUEOCPQBBAiBBA3QBQhgBQgZQDCg/DIB1QAsAaAsAhIARARQEZjREOCQQBBAjA/AxQBQhYBQgYQDrhLD0C/IASARQEYjQEMCSQBBAkBAA4IAAQNMiMVAAAg");
	this.shape_19.setTransform(449.1,65.2269);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQBAgxBBgZQDAhJDGCKIAPANQDki3DcBmQA1AYA1AjQBBhMBCgYQDAhIDICMIAOANQDni1DcBoQA2AZA1ApQASgVARgRQAwgwAxgSQDBhGDKCPIAOANQDnixDdBqQA2AaA1AlQBChKBCgXQDDhCDJCSIAQANQCOhsCMABQCfACCjB4IARAQQEQjOEGCGQA/AgA+AuQBOhXBOgZQDkhLDuC0IARAQQERjLEECJQA/AhA/A1QBMhcBOgYQC7g8DCBxQAqAZAqAgIARAQQEOjIEECLQA+AiA/AvQBMhUBOgXQDihHDsC4IARAQQENjHEDCOQA+AiA+A2IAAQNMiMVAAAg");
	this.shape_20.setTransform(449.1,65.2095);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQBDgzBDgaQDIhMDRCSIAOANQDvi/DlBrQA4AaA3AlQBDhPBFgaQDJhLDRCUIAPAOQDwi9DnBtQA4AbA4ArQARgWASgSQAygzAzgSQDKhJDTCXIAOANQDyi6DnBxQA4AbA3AmQBFhNBFgYQDKhFDUCZIAPAOQCVhxCSABQCZABCbB0IARAPQEHjGD9CBQA8AfA9AsQBKhTBMgYQDchIDlCtIAQAPQEGjCD7CEQA9AgA9AzQBJhYBLgXQC1g5C5BtQApAXAoAgIARAPQEEi/D7CGQA8AhA8AtQBJhRBLgVQDahEDjCxIAQAQQEDi9D5CIQA9AhA7A0IAAQNMiMVAAAg");
	this.shape_21.setTransform(449.1,65.2146);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQBGg1BGgbQDRhPDZCZIAPAOQD6jHDuBxQA6AbA5AoQBHhTBHgbQDShODZCcIAQAOQD6jFDxBzQA6AbA6AuQASgXATgTQA1g1A0gTQDShLDbCdIAQAOQD7jCDxB2QA6AcA6ApQBIhRBHgZQDThJDcChIAQAOQCch2CYABQCRACCXBuIAQAPQD9i9DzB7QA7AeA6AqQBIhPBJgXQDThEDcClIAQAPQD8i6DyB/QA6AfA7AxQBHhUBHgVQCug3CzBpQAmAWAnAeIAQAPQD7i2DxCBQA5AfA5AsQBIhNBHgUQDShADaCqIAPAQQD6i1DvCDQA6AgA5AyIAAQNMiMVAAAg");
	this.shape_22.setTransform(449.1,65.2089);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQBIg4BKgbQDZhTDiCiIAQAPQEDjQD4B3QA9AcA7AqQBKhXBKgbQDahRDiCjIARAPQEEjOD6B5QA9AdA8AwQATgYATgUQA3g3A3gUQDahODkClIAQAOQEFjKD8B7QA8AeA8ArQBKhVBLgaQDchMDkCoIAQAPQCih8CdABQCNACCRBqIAPANQD0i0DpB2QA4AcA4AoQBFhLBGgVQDLhBDTCeIAPAOQDziwDpB5QA4AeA3AvQBEhQBFgUQCng0CsBkQAlAWAlAdIAPAOQDxiuDnB9QA4AeA3AqQBEhJBFgUQDJg7DRCjIAPAPQDvisDlB+QA4AfA3AwIAAQNMiMVAAAg");
	this.shape_23.setTransform(449.1,65.2032);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("EhGKAKKIAAxUQBMg6BLgdQDihVDrCpIAQAQQEOjYEDB9QA+AeA+ArQBMhaBNgdQDihTDsCqIAQAQQEPjWEEB+QA/AfA+AyQAUgZAUgVQA5g5A5gVQDjhRDsCsIARAQQEQjUEDCCQA/AfA/AsQBNhYBNgbQDkhPDtCvIAQAQQCoiBClABQCHABCKBlIAPANQDpisDhBxQA2AbA2AmQBChHBDgVQDDg9DLCXIANAOQDpioDfB1QA2AcA1AsQBChLBCgTQCfgxClBgQAkAVAjAbIAOAOQDnilDdB4QA2AdA0AoQBChGBCgSQDBg4DICcIAPAPQDlijDbB5QA1AeA1AuIAAQNMiMVAAAg");
	this.shape_24.setTransform(449.1,65.2083);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBOg8BPgdQDqhYD0CxIARAQQEYjgEMCCQBBAfBAAuQBPheBQgdQDqhXD1CyIARAQQEZjeENCEQBBAgBBA0QAVgaAUgVQA7g8A7gVQDshVD2C0IARAQQEZjbEOCGQBBAhBBAuQBQhcBQgcQDshSD1C2IASARQCuiGCqABQCBABCGBgIAOAMQDfijDWBsQA0AZA0AlQA/hEBAgTQC7g6DCCQIAOANQDdifDWBvQAzAbAzArQA/hIBAgSQCYgtCeBbQAiAUAjAbIANANQDcicDUByQAzAcAyAmQA/hBA/gRQC5g1C/CWIAOANQDbiZDRB0QAzAcAzAsIAAQOMiMVAAAg");
	this.shape_25.setTransform(449.1,65.1908);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBRg+BSgeQDyhbD+C4IARARQEijoEWCIQBDAhBCAvQBShhBTgfQDzhZD9C6IASAQQEjjmEXCKQBDAhBDA2QAWgbAVgWQA9g+A9gWQD0hYD/C8IASARQEjjlEXCNQBEAhBDAxQBShgBTgdQD0hVD+C9IATASQC1iMCwABQB7ACB/BaIAOAMQDViaDNBmQAyAYAxAjQA8hAA+gSQCyg3C6CJIAMAMQDViWDLBqQAxAaAxApQA8hEA9gRQCSgqCWBXQAgATAiAZIAMANQDTiTDKBtQAwAbAxAkQA7g+A9gPQCwgxC3COIAMANQDRiQDIBvQAxAbAwAqIAAQOMiMVAAAg");
	this.shape_26.setTransform(449.1,65.1959);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBUhABUgfQD8heEFDAIATARQEsjwEfCOQBGAiBFAxQBUhlBWgfQD7hcEHDBIASARQEtjvEgCQQBHAiBFA5QAWgcAWgXQA+hABAgXQD9hbEGDDIATASQEtjtEiCSQBFAjBFAyQBWhjBVgeQD9hZEHDFIATASQC7iRC2ACQB2ABB5BWIANALQDMiSDCBhQAwAXAvAhQA6g9A6gRQCqgzCxCCIAMAMQDLiODBBmQAwAYAuAnQA5hAA7gQQCKgnCPBTQAfASAgAYIALAMQDJiKDBBoQAuAZAuAjQA4g6A7gOQCngtCuCHIAMAMQDGiHC/BqQAuAaAuAoIAAQOMiMVAAAg");
	this.shape_27.setTransform(449.1,65.1902);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBWhCBZghQEDhgEPDHIATATQE2j5EpCUQBHAjBHAzQBYhoBYggQEFhgEPDJIATASQE3j3EqCVQBIAkBIA7QAWgdAYgYQBAhCBBgYQEFheEQDLIATASQE5j1EqCXQBIAlBHA0QBYhnBYgfQEFhcERDNIATASQDCiWC8ABQBwABBzBRIAMALQDCiJC5BbQAuAWAsAfQA3g5A4gQQCigwCnB7IAMALQDAiEC5BgQAsAXAsAkQA3g7A4gPQCDgkCIBOQAdASAeAWIAMAMQC+iBC3BjQAsAYArAhQA3g2A3gNQCfgqCkCBIANALQC7h+C2BmQAsAYArAmIAAQOMiMVAAAg");
	this.shape_28.setTransform(449.1,65.187);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBahEBagiQENhjEWDPIAVATQE/kBEzCaQBLAkBJA2QBahsBbghQENhjEYDQIAUATQFBj/E0CbQBKAlBKA9QAYgeAXgYQBDhFBDgYQEOhiEZDSIAUATQFBj9E0CdQBKAlBJA2QBbhqBbggQEOhfEaDUIAUATQDHicDCABQBqACBuBLIAMAKQC2iACxBWQArAVAqAdQA1g1A1gPQCZgsCfBzIALAKQC2h7CvBbQAqAWArAiQAzg3A1gNQB9giCABKQAcARAcAVIALALQC1h4CsBeQAqAXAqAfQAzgyA0gMQCXgmCbB5IAMAMQCyh1CrBgQAqAXApAkIAAQOMiMVAAAg");
	this.shape_29.setTransform(449.1,65.1801);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBdhGBdgjQEUhmEhDXIAUATQFKkJE9CfQBMAnBMA3QBdhvBegjQEVhlEhDYIAVATQFLkIE9ChQBNAnBMA/QAZgfAXgZQBFhHBGgZQEWhlEiDaIAUATQFMkGE8CjQBOAnBLA4QBehuBeghQEWhjEiDcIAVATQDNigDJABQBkABBnBHIALAJQCuh3CnBQQAoATAoAcQAygyAygNQCRgpCWBsIALAKQCshzCmBWQAoAVAnAgQAxg0AygLQB2gfB5BGQAbAPAaAVIAKAKQCrhvCjBZQAoAVAmAeQAygvAxgKQCNgjCTBzIALALQCohsCiBbQAnAWAnAiIAAQOMiMVAAAg");
	this.shape_30.setTransform(449.1,65.1745);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBfhJBhgjQEdhpEpDeIAVAUQFVkRFGClQBPAoBNA5QBghzBhgjQEdhoErDfIAVAUQFUkQFICnQBPAnBOBCQAZggAZgaQBIhJBHgaQEehnErDgIAUAVQFXkPFGCoQBPApBOA6QBghyBigiQEehmErDjIAVAUQDTimDPABQBfABBhBCIALAJQCjhvCeBLQAlASAmAaQAwguAvgMQCJgmCNBlIAKAJQCihpCcBQQAmAUAlAeQAvgwAugKQBvgcByBCQAZAOAZATIAKAKQCghmCZBUQAmAUAkAcQAvgrAugJQCGgfCKBsIAKAKQCehjCXBWQAmAVAkAgIAAQOMiMVAAAg");
	this.shape_31.setTransform(449.1,65.1795);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBihLBjgkQEmhsEyDmIAVAVQFfkaFRCrQBRApBQA7QBih2BkgkQEmhsEyDnIAWAVQFfkZFRCtQBSApBQBEQAaghAagbQBJhMBJgaQEnhqEzDoIAWAVQFfkXFRCuQBSApBQA8QBjh1BkgjQEnhpEzDqIAXAVQDZisDUACQBZABBcA9IAKAIQCZhnCUBGQAkARAjAYQAtgqAtgMQCAgiCFBeIAJAJQCYhhCSBLQAjATAkAcQArgsAtgJQBngZBrA9QAXAOAYASIAJAJQCWhdCQBPQAjATAjAaQArgnArgIQB9gbCCBkIAKAKQCThaCOBRQAiAUAjAeIAAQOMiMVAAAg");
	this.shape_32.setTransform(449.1,65.1739);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBlhNBmglQEuhvE7DuIAWAVQFqkiFZCxQBTArBTA8QBlh5BngmQEvhuE7DvIAWAVQFpkhFbCyQBUArBTBGQAagiAbgcQBKhOBNgbQEuhtE8DwIAXAVQFpkgFbC0QBUArBSA+QBlh5BogkQEvhsE8DxIAWAWQDhixDaABQBTABBWA4IAJAHQCQhdCKBAQAhAQAiAWQApgnAqgKQB4gfB8BXIAIAIQCPhXCIBGQAiARAhAaQApgoApgIQBhgWBjA5QAWANAWARIAJAIQCLhUCHBKQAhASAfAYQApgjApgHQB0gYB5BeIAJAJQCJhRCEBNQAhASAgAcIAAQOMiMVAAAg");
	this.shape_33.setTransform(449.1,65.1789);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBohPBpgmQE3hyFDD1IAXAWQF0kqFiC3QBXAsBUA/QBoh+BqgmQE3hxFED2IAXAWQFzkpFlC4QBVAsBWBIQAbgjAbgdQBOhQBNgcQE3hwFGD3IAWAWQFzkoFlC5QBWAtBUA/QBph8BpgmQE5hvFED5IAYAWQDmi2DgACQBOAABQAzIAJAHQCFhVCBA7QAfAPAfAUQAngjAngJQBvgbB0BPIAIAIQCDhPB/BBQAfAQAfAYQAmgkAngHQBagUBcA2QAUAMAVAPIAIAHQCBhKB+BFQAeAQAdAXQAmggAngFQBrgUBwBXIAIAIQB/hIB7BIQAeARAeAaIAAQOMiMVAAAg");
	this.shape_34.setTransform(449.1,65.1614);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBqhRBsgoQE/h0FOD9IAXAXQF9kzFtC9QBYAtBYBBQBqiBBsgnQFAh1FND+IAYAXQF9kyFuC+QBZAuBWBKQAcgkAdgeQBPhSBQgdQFAhzFND/IAXAWQF+kwFuC+QBZAuBWBCQBsiABsgnQFAhyFPEAIAXAXQDsi8DnACQBIABBJAuIAIAGQB8hMB3A1QAdANAdATQAkgfAlgIQBmgYBrBIIAIAHQB5hGB2A8QAcAOAdAWQAjgfAkgGQBTgRBVAyQATALATAOIAHAGQB4hBBzA/QAcAQAcAVQAigcAjgEQBlgRBmBRIAIAHQB0g+BxBCQAcAQAcAYIAAQOMiMVAAAg");
	this.shape_35.setTransform(449.1,65.1557);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBthTBvgpQFIh3FVEEIAYAYQGIk7F3DDQBbAuBYBDQBuiEBvgoQFIh4FWEGIAZAXQGIk6F3DDQBaAvBaBNQAdglAcgeQBRhVBTgeQFIh2FVEGIAZAYQGIk5F3DEQBbAvBZBDQBuiDBwgoQFIh1FXEHIAYAYQDzjBDsABQBDABBDApIAIAFQBxhDBuAxQAaALAbARQAigcAhgGQBfgVBhBCIAHAGQBwg9BsA2QAaANAaAUQAhgbAhgFQBMgOBOAtQASALARAMIAHAGQBtg4BpA6QAaAPAaATQAfgYAhgDQBbgNBfBJIAGAHQBrg1BnA9QAZAPAaAWIAAQOMiMVAAAg");
	this.shape_36.setTransform(449.1,65.1608);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("EhGKAKLIAAxVQBwhWBygpQFQh7FfENIAZAYQGRlDGADIQBdAxBcBEQBwiIBygpQFQh6FfENIAaAYQGSlCGADJQBdAwBcBPQAdgmAegfQBUhXBUgfQFQh5FeEOIAZAYQGSlCGCDKQBcAxBcBFQBxiHBygpQFRh5FgEPIAZAYQD5jGDyACQA9AAA9AlIAHAEQBog6BjArQAZAKAZAOQAegXAfgFQBWgSBZA7IAGAFQBmg0BjAxQAYAMAXASQAegXAegEQBFgLBHApQAQAJAQAMIAGAFQBjgvBgA1QAYANAWASQAegUAegCQBSgJBWBCIAFAGQBhgsBeA4QAXAOAXAUIAAQOMiMVAAAg");
	this.shape_37.setTransform(449.1,65.1551);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("EhGKAKLIAAxUQBzhYB0gqQFZh+FnEUIAaAZQGclLGKDOQBfAxBeBHQBziLB1grQFZh9FoEVIAZAZQGdlLGKDPQBfAxBeBRQAegnAeggQBWhZBWgfQFYh9FpEWIAZAZQGclLGLDQQBgAyBdBHQBziLB2gqQFZh7FoEVIAZAaQEAjMD4ACQA3AAA3AfIAHAEQBdgxBcAlQAWAJAVANQAdgUAcgEQBNgOBQAzIAGAFQBcgrBZAsQAVALAWAQQAbgUAcgCQA9gIBBAkIAcATIAGAFQBYgnBXAxQAVAMAVAPQAagQAbgBQBLgFBLA7IAGAGQBXgjBUAzQAUANAVASIAAQNMiMVAAAg");
	this.shape_38.setTransform(449.1,65.1482);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0000FF").s().p("EhGKAKLIAAxUQB2haB3gsQFiiAFwEcIAaAZQGmlTGUDUQBhAzBgBIQB3iPB3grQFiiAFwEcIAaAaQGmlTGVDUQBhAzBgBTQAfgoAfggQBXhcBZggQFgiAFyEdIAaAaQGmlTGVDVQBhAzBgBJQB2iOB4grQFih/FxEeIAaAZQEGjRD+ACQAxABAxAaIAHADQBTgpBRAgQAUAIATALQAagQAagDQBFgLBHAsIAFAEQBSgiBPAnQATAKAUANQAYgPAZgBQA3gFA4AgIAZARIAGAEQBPgeBNAsQASAKASAOQAZgMAXAAQBCgCBDA1IAGAFQBMgaBKAuQATAMASAQIAAQNMiMVAAAg");
	this.shape_39.setTransform(449.1,65.145);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("EhGKAKLIAAxUQB4hdB6gsQFqiDF6EjIAbAbQGwlcGeDZQBjA1BjBKQB5iSB6gsQFpiDF6EjIAbAbQGwlcGeDaQBkA1BjBVQAfgpAgghQBZheBbghQFpiCF6EkIAaAaQGwlbGeDbQBkA0BjBLQB5iSB6gsQFqiCF6ElIAbAaQEMjWEFACQAqAAAtAVIAEADQBKghBHAbQASAHASAJQAWgMAXgDQA9gHA+AlIAFAEQBHgaBGAiQARAJARALQAWgLAWAAQAwgCAyAcIAVAOIAFAEQBFgVBDAnQAQAJAQAMQAWgJAVACQA5ACA7AtIAEAFQBCgRBBApQAQALAQAOIAAQNMiMVAAAg");
	this.shape_40.setTransform(449.1,65.1393);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("EhGKAKLIAAxUQB8hfB8gtQFziGGCErIAbAbQG7lkGnDfQBmA2BlBNQB8iWB9gtQFyiHGDEsIAbAbQG6lkGoDgQBmA2BkBXQAhgqAggiQBchgBcgiQFyiFGCErIAbAbQG8ljGnDgQBmA2BlBNQB7iWB+gtQFziFGCEsIAcAbQERjcELACQAlAAAmARIAFACQA/gYA/AVQAPAGAPAHQAUgJAUgBQA0gDA2AdIAEADQA+gQA7AcQAPAHAQAKQASgHATABQApABAqAYIATAMIAFADQA6gMA6AhIAcATQASgFASADQAxAFAyAnIADAEQA4gIA3AlQAOAJAOAMIAAQNMiMVAAAg");
	this.shape_41.setTransform(449.1,65.1444);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("EhGKAKLIAAxUQB+hhCAguQF7iJGLEzIAcAbQHFlsGwDlQBpA3BnBPQB+iaCBguQF6iJGMEzIAcAcQHEltGxDmQBoA3BnBaQAigrAhgjQBehiBdgiQF7iJGLEzIAdAbQHElsGxDmQBpA3BmBPQB/iZCAguQF8iJGKE0IAcAbQEZjhERACQAfABAgALIAEABQA2gPA0ARIAaAJQARgFARAAQAsAAAuAXIACACQA0gIAzAXQANAGAMAIQAQgDAQACQAjAEAjATIAPALIAEACQAxgDAvAcIAYAQQAPgBAPAEQApAJApAgIADADQAuABAtAgQALAIAMAKIAAQNMiMVAAAg");
	this.shape_42.setTransform(449.1,65.1268);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0000FF").s().p("EhGKAKLIAAxUQCBhjCDgvQGEiMGTE6IAdAcQHOl0G7DrQBrA5BqBQQCAidCDgvQGEiMGUE6IAcAdQHPl1G7DrQBrA5BpBcQAigsAhgkQBfhlBhgiQGEiMGUE6IAcAdQHPl1G6DrQBrA5BqBRQCBidCDgvQGDiMGVE7IAcAcQEejmEXACQAaAAAaAGIADABQAsgGArALIAVAGQAPgBAOABQAkADAkAQIACABQAqABApATIAVAKQANAAAOAEQAbAHAcAPIAMAIIADACQAnAGAmAXIASANQANADANAFQAgANAgAZIADACQAjALAjAaIATAPIAAQNMiMVAAAg");
	this.shape_43.setTransform(449.1,65.1318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,898.2,130.3);


(lib.lowerhand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAMgMIgXAZ");
	this.shape.setTransform(1.15,1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgYAGIAbANIATghIACgDIABgBIgUAA");
	this.shape_1.setTransform(2.525,1.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AgYAGIAXgZIAGABIAUAAIgBABIgCADIgTAhgAAWgOIACgDIgBADgAAYgRg");
	this.shape_2.setTransform(2.525,1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lowerhand, new cjs.Rectangle(-1,-1,7.1,5.9), null);


(lib.lowerarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA5AZIgGAAIAAgBIhmhJIAAAAAg4ADIASAAIBCAv");
	this.shape.setTransform(5.7,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("AgjADIgSAAIAAg0IAFAAIAAABIBlBIIABABIgXAZg");
	this.shape_1.setTransform(5.4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lowerarm, new cjs.Rectangle(-1,-1,13.4,12), null);


(lib.Canoe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AaTi5QgmAHglAGQlAA4k7AjQjAAVi+ANQiSAKiRAGQiVAGiUABQigABiggEQiXgEiWgJQgLgBgKgBQgBAAgBAAQitgLisgSQi6gUi4gbQivgaitghQCqAXCyASQC1ASC9AMQC/AMDIAGQAKAAAKAAQB/AECDABQCeACCigCQCSgCCXgFQCQgECTgHQC7gKDBgNQE3gVFGghQAlgDAmgEQCaBOAMBWA84AAQACA8BLA4QB+AiEhARUAM3AAyAhdgBRQBNgDBOgDQBfhPgJhIA84AAQDyAYD6ARQVfBbY1iEQB4gJB5gMA6oixQiUBcAEBV");
	this.shape.setTransform(184.9351,18.6152);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E7C5E").s().p("A1MCnQkhgRh+giQhLg4gCg8QDyAYD6ARQIxAlJUAAIAAAAIABAAQNVAAOfhMIAHgBIATgBIDxgVIjxAVIgTABIgHABQufBMtVAAIgBAAIAAAAQpUAAoxglQj6gRjygYQgEhVCUhcQCqAXCyASQC1ASC9AMQC/AMDIAGIAUAAQB/AECDABQCeACCigCQCSgCCXgFQCQgECTgHQC7gKDBgNQE3gVFGghIBLgHIhLANQlAA4k7AjQjAAVi+ANQiSAKiRAGQiVAGiUABIgJAAIgxABIAAAAIgBAAQhqAAhpgDIgYAAIgNgBIgNAAQiXgEiWgJIgVgCIgCAAQitgLisgSQi6gUi4gbQivgaitghQCtAhCvAaQC4AbC6AUQCsASCtALIACAAIAVACQCWAJCXAEIANAAIANABIAYAAQBpADBqAAIABAAIAAAAIAxgBIAJAAQCUgBCVgGQCRgGCSgKQC+gNDAgVQE7gjFAg4IBLgNQCaBOAMBWQAJBIhfBPIibAGQ0xAys1AAQn2AAk4gTg");
	this.shape_1.setTransform(184.9351,18.6152);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AaOi+QABAAABgBQAJAEAIAEQA/AhAlAjIAtBAQAEALACALQAAAAAAABQh4AMh4ALQqJA4plAUQgXABgXABQI5gQJXgxQC7gODBgVIABACQAAAHAAAIQAAAJgCAHIgXA1QgBACgBABQgCACgCADQgBABgBACQgBACgBABIgmAoQgFAEgGAFQgJABgJABQhFADhDADQrIAeo2AQQxpAeolgeQgEAAgDAAQgCAAgBAAQgFAAgEgBImQgvQgDAAgDgBQgngdgUgeQgPgXgDgXQgBgFAAgFIAAgBIHdAlAaOi+QAAAAgBAAQgDABgEAAQAEgBAEAAIABgBAZ9i9QAKgBAKgBQgBAAgBAAQACAAABAAQAIAEAHAEAZdi1IAVgEQAKgCAKgCAZ9i9QAJAAAIgBAZQi4IAtgFAcygzQAFALABAMIAAAAQAAAAAAABAc5gZQABAQgDAPAZdi1QgLACgKABQgUAEgTAEQATgEAUgDQAKgCALgCgAbwBxQgGAFgGAFQifAKiJAHQ/sBRsYgtQgGAAgGgBAPMhUQACAAACAAQgBAAgCAAgAOkhPQAUgCAUgDQgBAAgCAAQgSADgTACgAJXhmQABAAABgBQC2gKC6gNQAGgBAGAAQExgXE/ghQAGgBAFAAAJXhmQC3gKC9gOIAAAAQE3gXFFgiQAFgBAEAAAJOgwQAFAAAFAAQgEAAgEAAQgBAAgBAAQgBAAgCAAQh5AKh4AGQABAAABAAQB5gGB5gKgAEuhZQAagBAagBQB1gFB3gGQACAAABAAQADAAADAAAEuhZQAEAAADAAQAagBAagBQBxgFBzgGQAFAAAFAAAJYgwIFMgfAYhiqIl3A6IjaAcAAVhRIEWgIQABAAACAAAE2gfIAdgBQABAAABAAQADAAACAAAE2gfQgFABgFAAQgBAAgCAAAp4gkIAEAAQAFABAFAAIAAAAQCVAICVADIABAAQABAAABAAQBUADBTAAQBMAABKgBIABAAQABAAABAAQCTgCCSgGIABAAQAGAAAHgBAo3hTID4AEQABAAAAAAQCjABCcgDIABAAQACAAACAAIADAAQACAAABAAQAFAAAEAAAAJhRQAGAAAGAAA0Rh6IE3AWQDCAMDDAFQABAAAAAAIAHAAQALAAALAAApNhTQAJAAAEAAQAEABAFgBAqEglQADAAACAAQAEABADAAQgDAAgEgBIAAAAQgBAAgBAAQgBAAgBAAQAAAAgBAAIgBAAQgxgDgxgEIjUgRQgPgCgPgCQgDAAgCAAQiqgRingYQgOgCgOgCQgDAAgDAAQADAAACAAQARADAQACQCmAXCoARQARACARACA6oinQCqAXCyAQQAHABAIABIALABQAGABAHAAQAKABAKABA0yh9QAFAAAGABQALABALABA0SA1QgQgBgQgBQgNgBgNgBQgHAAgIgBQAJABAKAAQAbACAbACIDcALIViAJA1RhuIlXg5A84ALQgEhVCUhd");
	this.shape_2.setTransform(184.9133,18.4068);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E7C5E").s().p("A1BCxIgHAAIgMgBImQgvIgGgBQgngdgUgeQgOgXgEgYIgBgJIAAgBQgEhVCUhdQCqAWCyARIAPABIALABIANACIAUACIE3AWQDCAMDDAEIABAAIAHABIANAAIAJAAID4AEIABAAQCjAACcgDIABAAIAEAAIADAAIADAAIAJAAIEWgIIADAAIAHAAIA0gCIDkgKIAKgBQC3gKC9gOIAAAAQE3gWFFgjIAJAAIAtgFIARgCIgIACIAHgCIABAAIACAAIARAHQA/AiAlAjIAtBAQAEALACAKIAAABIAAABIABADIAAAOIgCARIgXA1IgCACIgEAGIgCACIgCAEIgmAnIgLAKIgSACIiIAGQrIAeo2AQQo0AOmkAAQmjAAkTgOgA1MAyIAaACIAgABIDcAMIViAJI1igJIjcgMIg2gDIgTgBIAPABgAZIgEQqJA4plAUIguACQI5gQJXgyQC7gNDBgWQjBAWi7ANQpXAyo5AQIAugCQJlgUKJg4IDwgYIjwAYgA1bAxIndglgAhlgUIAygBIAzAAIABAAIACAAQCTgCCSgGIABAAIADAAIAKgBIAdgBIACAAIAFAAIgFAAIgCAAIgdABIgNABIgBAAQiSAGiTACIgCAAIgBAAIgzAAIgyABIgBAAIAAAAIgXAAIgZgBQhTAAhUgCIgBAAIgBAAIgBAAQiVgDiVgJIAAAAIgKAAIgEgBIgHAAIgCgBIgCAAIgBAAIgBAAIhigGIjUgSIgegDIgFgBQiqgQingYIgcgEIgGgBIAFABIAhAFQCmAXCoARIAiADIDUASIBiAGIABAAIABAAIACAAIACABIgFgBIAFABIAAAAIAHAAIAEABIAKAAIAAAAQCVAJCVADIABAAIABAAIABAAQBUACBTAAIAZABIAXAAIAAAAIABAAgAFbgfIABAAQB5gHB5gJIACAAIAIgBIgKABIgDAAQh5AJh4AHQB4gHB5gJIADAAQh5AJh5AHIgBAAIgBAAIABAAgAJYgwIFMgfgAOkhPIAogEIgDAAIglAEIAAAAgAPNhTIADgBIgEABgASqhvIjaAbIDagbIF3g7gA1RhuIlXg4gAZyi4IgVADIgVAEIgnAHIAngGIAVgFIgVAFIgnAGIAngHIAVgEIAVgDIAUgEIgUAEgA0yA0IgagCIgPgBIATABIA2ADIgggBgAEpgdIANgBIgKABIgDAAgAEpgdIAAAAgAp/gkIAAAAIAHAAIgHAAgAp/gkIAAAAgAJOgvIAKgBIgIABIgCAAgAJOgvIAAAAgAu7g9IAAAAgAvdhAQiogRimgXIghgFIgFgBIAGABIAcAEQCnAYCqAQIAFABIAeADIgigDgAOkhPIAAAAgAPJhTIADAAIgoAEIAlgEgAPMhTIAEgBIgDABgAPMhTgAEuhZIA0gCQB1gEB3gHIADAAIAGAAIgKABIjkAKIg0ACIgHAAgAJXhmIAAAAgAahi3IAAAAgAaQi+IgCAAIABAAIgBAAIgRACIAUgDIgCABIADgBIAPAIIgRgHgAaOi+IgBAAIgHACIAIgCg");
	this.shape_3.setTransform(184.9033,18.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AZSi5IAKgCQAPgDAQgCIAIgCAY1i0QAJgBAJgCQAFgBAGgBQgFABgFABQgKACgJABgAaNjEQAJADAIADQCLBJAOBPQAAACABACIAAAAQABAIAAAHQgBBAhRBFQgJACgJACQjmAQi/AMQ96BPr7goQgDAAgCAAQgHgBgHAAIi8gOQiJgNhNgTQhLg4gDg7QAAAAAAgBQgEhVCThdQABAAABAAQgBAAAAAAIgBAAAaLjEQABAAABAAAaLjEQABAAABAAQACgBACAAQCaBNANBWIAAAAQh5ANh3ALQqJA7plAXQgzABgzAEQIQgPIsgtQD+gTEKggIAAAAQAKBIheBPQgHABgIAAQhEADhDAEQrIAho3ASQxnAkongbQgDAAgDAAQgKgBgJAAAaNjEQAAAAABAAQgBAAAAAAQgFABgFABQAEgBAEgBAY4i7QAGgBAHAAQAkgEAkgEAY4i7QAFAAAFgBQAkgEAlgEAPThXIBbgLQDGgaDHgiIB6gWAPMhWQADAAAEgBQgDABgDAAQgBAAAAAAQgCAAgBAAQi9AXi8APQgDAAgCAAQh5AKh4AHQABAAABAAQB5gHB5gKQC/gPC/gXgAJHhmQACAAADAAQAGgBAGAAQC1gLC6gOQAGgBAGAAQAOgCAOAAIJJg4AJHhmQADAAAEAAQABAAACAAQC5gMDAgOQAAAAABAAQASgCASgBAgjhOQASAAARAAQAFgBAGAAQCNgDCQgGQAGAAAFAAQAagBAbgBQANgBANgBIDFgKAgjhOQASgBASAAQACAAACAAQCRgDCUgGQACAAABAAQAagBAagBQAQgBARgBAE2geIAcgBQACAAACAAQACAAACAAAE2geQgFAAgFABQgBAAgCAAAp/gfQABAAABAAIAMABQACAAACAAQABAAAAAAQAAAAABAAQABAAAAAAQCVAICVACQABAAAAAAQABAAABAAQA3ABA2ABQBpAABngBQABAAAAAAQABAAABAAQBJgCBJgCQBKgDBJgDQABAAAAAAQAGgBAHAAAo2hOICvACQAjABAkAAQAAAAABAAQAOAAANAAIEBgDApJhOQAJAAAKAAApJhOQAEAAADAAQAGAAAGAAAz+hwIEjAUQDBAKDEAEQABAAAAAAIAMAAAqFggQABAAAAAAQADAAACABQgBAAgBAAQgBAAgBAAQgBgBgBAAgAu8g2IDLAQQA2ADA2ADAu8g2QgPgCgOgBQgDgBgCAAQipgQiogXQgOgCgOgCQgFgBgFAAQAEAAAFABQARADAQACQCmAWCoARQAQABARACgA02h1QAIABAIABQAUABAUACA02h1QAHABAHAAQAVACAVACA6nicQCpAVCxAQIAAAAQAFABAEAAIAOABA6nicQAQADAQADQCEAXCFATIApAGA0YA9QgNgBgMAAQgNgBgNgBQgPgBgPgBQASABASABQAWABAXACIBLAEIXBAMA1pA4IjSgNQh/gKh+gL");
	this.shape_4.setTransform(184.9371,18.1973);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E7C5E").s().p("A0/C5IgGAAIgTAAIi8gOQiJgNhNgUQhLg3gDg7IAAgBQB+ALB/AJIDSAOIjSgOQh/gJh+gLQgEhVCTheIABAAIABABIgCgBIACABIAgAFQCEAXCFAUIApAFIgpgFQiFgUiEgXIgggFQCpAVCxAQIAAAAIAJABIAOABIAQABIAoAEIEjATQDBAKDEAFIABAAIAMAAIATAAICvACIBHAAIABAAIAbAAIEBgCIAjgBIALAAQCNgDCQgGIALgBIA1gCIAagBIgaABIg1ACIgLABQiQAGiNADIgLAAIgjABIAkgBIAEAAQCRgECUgGIADAAIA0gCIAhgBIDFgKIAHgBIADAAQC5gLDAgPIABAAIAkgDIJJg3IAKgBIBJgIIhJAIIgKABIANgCIBIgHIgCAAIACAAIgKACIAIgCIgIACIAKgCIARAGQCLBIAOBQIABADIgBgDQgOhQiLhIIgRgGIABAAIgBAAIAEgBQCaBNANBVIAAAAIjwAZQqJA7plAWIhmAFIBmgFQJlgWKJg7IDwgZIAAABIABAPQgBBAhRBFIgSAEIASgEQBRhFABhAIgBgPIAAAAQAKBIheBPIgPABIiHAGQrIAio3ASQp/AUnGAAQlaAAjvgMgA1LA7IAaABIAZACIBLAEIXBALI3BgLIhLgEIgtgDIgkgCIAeACgAUwARQosAtoQAPQIQgPIsgtQD+gSEKggQkKAgj+ASgAiWgSIBMAAIBKgBIABAAIACAAICSgEICTgGIABAAIADAAIAKAAIAcgBIAEAAIAEgBIgEABIgEAAIgcABIgNAAIgBAAIiTAGIiSAEIgCAAIgBAAIhKABIhMAAIAAAAIAAAAIgyAAIgIAAIhtgBIgCAAIgBAAQiVgDiVgHIgBAAIgBAAIgBAAIgEgBIgMAAIgCgBIACABIAMAAIAEABIABAAIABAAIABAAQCVAHCVADIABAAIACAAIBtABIAIAAIAyAAIAAAAIAAAAgAFagfIACAAQB5gHB5gJQC/gQC/gWIABAAIAGgBIgHABIgDAAQi9AWi8APIgFABQh5AJh4AHIAAAAgArxgmIBsAHIACAAIACAAIACAAIgFAAIgBAAIABAAIAFAAIgCAAIgCAAIgCAAIhsgHIjLgQgAu8g2IgdgDIgFgBQipgQiogWIgcgEIgKgCIAJACIAhAFQCmAWCoAQIAhADIAAAAgAZHi2IgSADIh6AWQjHAijGAaIhbALIBbgLQDGgaDHgiIB6gWIATgDIAKgCIgLACgAZ7jAIgfAGIgKACIAKgCIAfgGIAIgBgA0xA8IgagBIgegCIAkACIAtADIgZgCgAEpgdIANAAIgKAAIgDAAgAEpgdIAAAAgAFagfQB4gHB5gJIAFgBQC8gPC9gWIADAAQi/AWi/AQQh5AJh5AHIgBAAIgBAAgAu8g2IAAAAgAvdg5QiogQimgWIghgFIgJgCIAKACIAcAEQCoAWCpAQIAFABIAdADIghgDgAPMhVIAHgBIgGABIgBAAgAPMhVIAAAAgAPMhVIAAAAgAZHi2IALgCIgKACIgTADIASgDgAaNjDIABAAIgBAAIgCAAIACAAgAaNjDIAAAAgAaNjDIAAAAg");
	this.shape_5.setTransform(184.9371,18.1205);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AY1i6QAJgBAIgCQAJgBAJgCQgIABgJACQgJACgJABIkBAtIlcAzAPyiHIDqgVQCvgRC0gVQADAAACAAQAjgEAjgEIAAAAIABAAQAIADAIACQCLBHAQBPQABADAAACQAAABABAAQAAAHAAAGQABBAhQBGQgIADgJACQhEAEhDADQrJAmo3AUQxmApongYQgCAAgDAAQgEAAgFAAQgNgBgMgBIkzgbQgwgIgjgJQgpgegUgfQgQgagCgbIAAAAQgEhVCShfQAGABAFABQgEAAgDgBQgBAAgCgBIgBAAQACABACAAQCpAVCvAOIABAAQADABADAAIAPABQAJABAIABQAVACAUABIEhASQABAAAAAAQDCAJDDADQABAAABAAQAQABARAAIDbABQAMAAALAAQACAAABAAQAQAAAQAAID7gEQASAAARgBQAFAAAFAAQAGAAAFgBAaNjKQAAAAAAAAQAAAAgBAAQgBAAAAAAAaNjKQABgBACAAQCaBMAOBVIgBAAQh4AOh3AMQqIA+plAaQhlAEhlAFQH9gOIWgrQFCgYFSgpIAAAAQAKBIhdBQQk+AXkDAQQ8IBOrdgjQgRgBgRgBAaKjKQABAAACAAAaKjKQABAAACAAAZYjAIAygKAPLhZQAGAAAHgBQgGABgGAAQAAAAgBAAgAOthVQAPgCAPgCQgBAAgBAAQgOACgOACgAJQhoQADAAADAAQC1gMC7gPQAFgBAGAAQARgBAQgCAJQhoQC5gMDAgPIABAAQAUgCAUgCAEshYQAagBAbgCQB1gFB3gIQABAAACAAAEshYQADAAADAAQAagBAagCQBxgFBzgHQADAAADgBAJjgzQgJABgKABQgBAAgBAAQgBAAgCAAQh4AKh4AHAJOgxQALgBAKgBIFKgiAEghXQADAAAEgBQABAAABAAQACAAABAAAEghXQAFAAAEgBAE6geIAOAAQAKgBAJgBQAAABABgBQB5gHB5gKAE6geQgGABgHAAQgCAAgCAAAp3gaIAIAAQADABACAAIABAAQCUAHCWABIAAAAQACAAABAAQA7ABA7AAQBkABBjgDIAAAAQACAAABAAQCTgDCSgIIAAAAQAJAAAIgBAgkhMQATgBARAAQACAAACAAQAIAAAIgBIEMgJApXhKQAPABAFAAQAIAAAHAAAp3gaQgEAAgDAAQgBAAAAAAQgBgBAAAAQgBAAgBAAAu6gwIDUAQQAxADAxACIAAAAQABAAABAAQABABACAAQAEAAAEAAAu6gwQgQgCgPgBQgCAAgDgBQgIAAgJgBQAJABAKABQARACARABgA0rhYQgBAAgCgBQgKgBgKgBQgEgBgEAAQgIgBgJgCQAIABAHABQAFABAFABQAMACALABQBgAMBgALIB8AMA04htQAIABAIAAQAVACAVACA0TBFQgPAAgOgBQgOgBgNgBQgQAAgPgCQAUABAVABQAXACAXABIBYAEIVMAIA84AhIHOAfA1bhfIlEgy");
	this.shape_6.setTransform(184.9168,18.0027);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E7C5E").s().p("A07DCIgFAAIgjgCIkzgbQgvgIgjgJQgqgegUgfQgQgagBgbIAAAAIHNAfInNgfQgFhVCThfIADABIAHABIgKgCIAKACIgHgBQCpAVCwAOIAAAAIAGABIAQABIARACIAoADIEiASIABAAQDBAJDDADIAVABIAOAAIDcABIAXAAIACAAIAgAAID7gEIAkgBIAKAAIALgBIELgJIAKgBIADAAIAFAAIA0gDIDkgMIAGgBQC6gMDAgPIAAAAIApgEIDpgVQCvgRC1gVIAEAAIBGgIIABAAIAAAAIACAAIABAAIgBAAIADgBQCbBMANBVIAAAAIAAABIABANQABBAhQBGIgSAFIiGAHQrKAmo3AUQrAAangAAQkfAAjNgJgA0TBGIBYAEIVNAIQH8gOIXgrQFBgYFSgpQlSAplBAYQoXArn8AOI1NgIIhYgEIgtgDIgqgCIAfACIAbACIAdABIAAAAgAZIgPQqIA+plAaIjJAJIDJgJQJlgaKIg+IDwgaIjwAagAi2gPQBZAABYgBIAGgBIABAAIACAAQCTgDCSgIIABAAIADAAIAOgBIANAAIATgCIABAAQB5gHB5gKQh5AKh5AHIgBAAIgTACIgNAAIgRABIgBAAQiSAIiTADIgCAAIgBAAIgGABQhYABhZAAIgBAAIgHAAIgIAAIh2gBIgBAAIgBAAIgBAAQiVgBiVgHIAAAAIgGgBIgIAAIgIAAIgBgBIgCAAIACAAIABABIABAAIAHAAIAIAAIAGABIAAAAQCVAHCVABIABAAIABAAIABAAIB2ABIAIAAIAHAAIABAAgAp/gZIgDgBIgBAAIAAAAIgBAAIhigFIjUgQIgegDIgFgBIgSgBIATACIAiADIDUAQIBiAFIABAAIAAAAIABAAIADABgAFbgfQB4gHB5gKIACAAIADAAIATgCIgTACIgDAAIgCAAQh5AKh4AHgAacjEQCKBHARBPIABAFIgBgFQgRhPiKhHIgRgFIARAFgAOthUIlJAiIgWACIAWgCIFJgiIAfgEIgDAAIgcAEIAAAAgA0qhXQBfAMBhALIB7AMIh7gMQhhgLhfgMIgEgBIgUgCIAYADIAAAAgAPNhYIALgBIgMABIABAAgAY1i5IkAAtIldAzIFdgzIEAgtIASgDIARgDIgQADIgTADIAAAAgA1KhbIAIABIgJgCIgPgCIAQADgA1aheIlFgygAZYi/IAzgKgA0wBFIgbgCIgfgCIAqACIAtADIgdgBgAp3gZIAAAAgAp+gZIgBAAIAIAAIgHAAgAp/gZIAAAAgAEqgcIARgBIgOABIgDAAgAEqgcIAAAAgAu6gvIAAAAgAvcgyIgTgCIASABIAFABIAeADIgigDgApChIIgVgBIACAAIAhABIgHAAIgHAAgAOthUIAAAAgAPJhYIADAAIgfAEIAcgEgA1ChaIAUACIAEABIgYgDgAPMhYIAMgBIgLABIgBAAgAPMhYIAAAAgA1ChaIAAAAgA1KhbIgQgDIAPACIAJACIgIgBgA6miRIAAAAgA6piSIABAAIACABIgDgBgAY1i5IAAAAgAZIi8IAQgDIgRADIgSADIATgDgAaLjJIACAAIgCAAIgBAAIADAAIABAAIgBAAIgCAAgAaLjJg");
	this.shape_7.setTransform(184.8939,17.9082);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AJOhoQADAAADgBQC1gMC7gRQAFAAAGgBQEvgaE+gmQAHgBAHgBIAvgFQAJgBAJgBQABgBAAAAQAAAAAAABQgCAAgCABQgKABgKACQAJgCAKgCIAAAAQAAAAABABQAIABAIACQCLBGASBOQABAEABAEIAAAAQABAGAAAFQADBAhQBHQgIADgJAEQhDAEhDADQrKApo3AYQxlAuongWQgCAAgCAAQgGAAgGAAQgNAAgMgBIidgKQiXgMhSgUQhHgzgIg3QAAgEAAgEIAAAAQgFhVCShgQATAEAUADQgQgDgQgDIFPAhQADABADAAQADAAADAAAJOhoQAAAAABAAQC6gNDAgRIAAAAQE1gbFEgnQAEAAAEgBAY+jBQADAAAEgBQAEgBAFgBQgEABgDAAQgFABgEABInNBPIibAVAaMjRIABAAQABAAABAAQCbBLAOBWQgBAAAAAAQh5AOh2AMQqIBCplAcQhlAFhjAGQG5gOHMgkQGEgdGbg0QAAAAABAAQAKBIhdBQQmOAfk/AUQ6WBNq/gfQgTAAgSgBAaHjQQACAAACAAAZ5jOQAHgBAHgBAZOjEIAmgIAPLhbQAFgBAGgBQgFABgFABQgBAAAAAAQgBAAgBAAQi9AYi7ARQgDAAgCAAQgIABgHABQAIgBAJgBQC+gRC/gYgAgjhKQASgBARAAQACAAACAAQCQgFCVgHQABAAACAAQAagCAagBQB1gGB3gIQABAAABAAAgjhKQAQAAARgBQAEAAAGAAQCMgFCRgHQAGAAAFAAQAagCAagBQBxgGBzgIQADAAADAAAE6gdIAOgBQAJgBAKAAQAAAAABAAIDhgRAE6gdQgHAAgGABQgCAAgCAAQAJgBAIAAgAAKgQQgDAAgDAAQgCAAgBAAAp3gVIAIAAQADABADAAIAAAAQAlABAlACQBwADBwABIAAAAQABAAACAAQAjAAAiAAQB9AAB7gDIAAAAQAFAAAEAAIEfgMAomhEIDcgBQADAAAEAAQABAAACAAQAZAAAZAAIDrgFApZhFQACAAABAAQAZAAAXABApZhFQAPABAGAAQAPAAAPAAAp3gVQgDAAgEAAQAAAAgBAAQAAgBgBAAQgBAAgBAAAvGgqIEXASQAWABAVABIABAAQAAAAABAAQACAAABABQAFAAADAAA0jhjIAQABQCYAMCdAHQABAAAAAAQDBAIDDACAvGgqQgJgBgJgBQgDgBgCAAQipgOiogVQgLgCgLgBQAMACANABQCnAVCoAPQALABALABgA0vhkQAEABADAAQADAAACAAA0vhkQADABADAAQADAAADAAA1EhTQgDAAgDgBQgMgBgMgCQALABALACQAEAAAEABgA1UhnQACABADAAQADAAAEAAIAZACA0ABOQgYgBgXgBQgOgBgOAAQgQgBgQgBQAXABAXABQAeABAfACIBQAEIVDABA6qiJQACABADAAQABAAABAAA6liIQgCAAgCgBIgBAAA83AsIHMAdA1ihXIkhgr");
	this.shape_8.setTransform(184.9405,17.8179);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E7C5E").s().p("A05DKIgEAAIgkgBIiegKQiWgMhTgUQhHgzgHg3IgBgIIAAAAQgFhVCShgIAnAHIgggGIFPAhIAHABIAFAAIgGAAIgGgBIAGABIAGAAIAaACIAGABIAGAAIAQABQCXAMCeAHIABAAQDBAIDDACIAUABIAfAAIDbgBIAHAAIAEAAIAyAAIDqgFIAhgBIAKAAQCNgFCRgHIALAAIA0gDIDjgOIAGAAIABAAQC6gNDAgRIABAAQE1gbFEgnIAHgBIAvgFIAOgCIgTAEIAUgDIARADQCLBGASBOIABAIIjvAaQqIBCplAcIjIALIDIgLQJlgcKIhCIDvgaIAAAAIABALQADBAhPBHIgRAHIiGAHQrKApo4AYQr+Afn0AAQjqAAiwgHgA1LBMIAcABIAwACIBPAEIVDABQG5gOHNgkQGEgdGag0QmaA0mEAdQnNAkm5AOI1DgBIhPgEIg+gDIgtgCIAfACgA1qBKInNgdgAjugMQB0AABzgCIAIgBIABAAIAJAAIEfgMIkfAMIgJAAIgBAAIgIABQhzACh0AAIgBAAIgHAAIhGAAIgBAAIgBAAIgBAAQhwgBhvgDIhKgDIgBAAIgGgBIgHAAIgIAAIgBgBIgCAAIACAAIABABIABAAIAHAAIAHAAIAGABIABAAIBKADQBvADBwABIABAAIABAAIABAAIBGAAIAHAAIABAAgAAEgPIAHAAIgHAAIgCAAIACAAgAp+gUIgDgBIgBAAIgBAAIAAAAIgrgCIkXgSIgTgCIgFgBQipgOingVIgXgDIAaADQCmAVCoAPIAXACIEXASIArACIAAAAIABAAIABAAIADABgAEqgbIADAAIAOgBIANgBIATgBIABAAIDhgRIjhARIgBAAIgTABIgNABIgRABIAAAAgAI9gvIARgCQC/gRC+gYIACAAIAKgCIgMACIgCAAQi9AYi7ARIgFAAIgPACIAAAAgA1JhTIAFABIgHgBIgWgDIAYADgA1hhWIkigrgAY+jAInNBPIiaAVICagVIHNhPIAIgBIAIgCIgGABIgKACIAAAAgAZOjDIAmgIgA0vBNIgcgBIgfgCIAtACIA+ADIgwgCgAp2gUIAAAAgAp9gUIgBAAIAIAAIgHAAgAp+gUIAAAAgAEqgbIARgBIgOABIgDAAgAvFgpIAAAAgAvcgrQiogPimgVIgagDIAXADQCnAVCpAOIAFABIATACIgXgCgAc3gvIgBgIQgShOiLhGIgRgDIAEgBIABgBIAAAAIACAAQCbBLAOBWIAAAAIgBAAgAc3gvgAJMgxIAFAAQC7gRC9gYIACAAQi+AYi/ARIgRACIAPgCgApEhDIgUgBIADAAIAwABIgQAAIgPAAgAolhDIAAAAgA1JhTIgYgDIAWADIAHABIgFgBgAPLhaIAMgCIgKACIgCAAgAPLhaIAAAAgA6qiIIAFABIACAAIAgAGIgngHgA6qiIIACAAIADABIgFgBgA6qiIgAZIjCIAGgBIgIACIgIABIAKgCgAaHjPIAAAAIABABIgUADIATgEgAaMjPIgFAAIAAAAIgOACIATgCgAaIjOIAAAAgAaIjOIgBgBIAFAAIABgBIgBABIgEABIAAAAgAaHjPIAAAAg");
	this.shape_9.setTransform(184.8972,17.7174);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AaFjWQgfAHgfAGQgFABgEABQADgBAEgBQAggGAhgGQACgBADgBQAAABABgBIAAAAQABAAABAAQCbBKAOBWQAAAAAAAAIAAAAQAAAFABAEQABAQgEARIhHBnQgJAEgIAEQhEAEhCAEQrKAso5AaQxjA0ongTQgCAAgCAAQgHAAgHAAQkhgLh+geQhNg2gDg8IAAAAQgGhVCShgQCvAdCwAWQAQACARACQCnAUCoAOQAOABAOABQgMgBgMgBQgDAAgCgBQipgNingUQgOgCgOgCQivgViugdIFRAfQADABADAAQATABAUACQChALCoAHQABAAABAAQDBAHDCACIAUAAQBVAABXAAQArgBArAAQACAAABAAQAdAAAcgBIDkgGQAQAAAQgBQAEAAADAAQCRgGCUgIQABAAACAAQAagCAagBQB1gHB3gJQABAAAAAAQADAAADAAQAJgBAKAAIFBgbQAOgBAOgBQAGgBAFAAQEvgdE+gnQAUgCAVgDIAhgEQAAAAABAAQAAABABAAQAIABAIABQCLBEAUBOQABAFABAFQh5AOh2ANQqIBEplAgQhtAGhsAGQF+gNGMgfQHIghHjg+QAAAAAAAAQADAVgFAVAOmiGQARgBARgCIAAAAQE1gdFEgoQARgCARgCAaMjXIAAAAQgCAAgCABAaHjWIABAAQABAAACgBQAAAAABAAAaHjWQgBAAgBAAAaEjWQACAAABAAAbuBaQgEAEgFADQndAml8AYQ4lBMqhgaAPLhfQAHgBAHgBQgGACgHAAQgBAAAAAAQgBAAgBAAQi9Aai7ARQgDABgCAAQh5ALh4AJQgCAAgCAAQADAAACAAQB5gJB5gLQC+gSC/gagAJMhqQABAAABAAQALAAAMgBAADhJQABAAACAAQCNgGCQgIQAGAAAFAAQAagCAbgBQBwgHBzgIQADAAADgBAY+jHImfBJIjGAdAE1gdQgEABgEAAQgBAAgCAAIgBAAIkbAOQgFAAgFAAQgBAAgBAAAEqgcQAFAAAGgBIAigCAgkhIQASAAASgBQABAAACAAAp0gQIAJAAQABAAABAAIAAAAQCVAGCVAAIABAAQABAAABAAQAPAAAPAAQCQABCPgFIABAAQAGAAAGAAAp0gQQgFAAgFgBQgBAAgBAAQgBAAgBAAQAAAAgBAAIgBAAQgqgCgqgCIjogPAqDgRQAIAAAHABA1VhfQAEABADAAQASABATABQCjAMCpAHACCBUI2xAAQgFAAgGgBIgNAAQgCAAgCgBQgEAAgFAAQAHAAAGABA1UBSIkagPQhlgGhkgHA6rh/QADABACAAQgCAAgBgBg");
	this.shape_10.setTransform(184.9223,17.6548);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5E7C5E").s().p("A02DSIgEAAIgOAAQkhgLh+geQhNg2gDg8IAAAAQgGhVCShgIACAAIADABIgFgBQCvAdCwAWIAhAEQCnAUCoAOIAcACIgYgCIgFgBQipgNingUIgcgEQivgWiugcIFRAfIAGABIAnADQChALCoAHIACAAQDBAHDCACIAUAAICsgBIBWAAIADAAIA5gBIDkgGIAggBIAHAAIADAAQCNgGCQgIIALAAIA1gDQBwgHBzgIIAGgBIACAAIAXgCIFBgaIAcgCIALgBQEvgdE+gnIApgFIAhgEIABAAIg+ANIgJABIAHgBIBBgNIhBANIgHABIAJgBIA+gNIABAAIgBAAIACAAIABAAIADgBIABAAIgBAAIgDABIAEgBIAAAAIAAAAIgBAAIABAAIAAAAIACAAQCbBKAOBWIAAAAIgCgKQgUhOiLhEIgQgDIAFgBIgFABIAQADQCLBEAUBOIACAKIjvAbQqIBEplAgIjZAMI2xAAIgLgBIgNgBIgEAAIgJAAIkagPIjJgNIDJANIEaAPIANAAIANABIALABIWxAAIDZgMQJlggKIhEIDvgbIAAAAIABAJIAAAGQAAAOgDANQADgNAAgOIAAgGIgBgJIAAAAQADAVgFAVIhHBnIgRAIIiGAIQrKAso5AaQs2AmoEAAQi9AAiTgFgAOMApQmMAfl+ANQF+gNGMgfQHIghHjg+QnjA+nIAhgAkegJIAEAAIABAAQB8AAB8gDIADAAIAfgBIABAAIACAAIAKAAIgMAAIgBAAIgfABIgDAAQh8ADh8AAIgBAAIgEAAIgeAAIgCAAIgBAAQiVAAiVgGIAAAAIgCAAIgJgBIAJABIACAAIAAAAQCVAGCVAAIABAAIACAAIAeAAgAAOgNIEbgOIABAAIADAAIAIgBIAigCIAFAAQB5gJB5gLQC+gSC/gaQi/Aai+ASQh5ALh5AJIgFAAIgiACIgLABIgBAAgAp0gQIgPAAIgBAAIhUgEIjogPIDoAPIBUAEIABAAIABAAIACAAIACAAIAKAAIAAAAgAJRgzIgFABQh5ALh4AJIgEAAIAEAAQB4gJB5gLIAFgBQC7gRC9gaIACAAIABAAIANgCIgOACIgCAAQi9Aai7ARgASfh9IjGAdIDGgdIGfhKgA1UBTIAJAAIAEAAIgNAAgAACgNIAMAAIgKAAIgCAAgAACgNIAAAAgAp+gQIgCAAIgCAAIgBAAIAPAAIgKAAgAqDgQIAAAAgAEqgbIALgBIgIABIgDAAgAEqgbIAAAAgAvcglQiogOingUIghgEQiwgWivgdIAFABQCuAcCvAWIAcAEQCnAUCpANIAFABIAYACIgcgCgAc3g2gAPLheIAOgCIgNACIgBAAgAJMhpIAGAAIATgCIgXACIgCAAgA6rh+IAAAAgAaEjVIADAAIgCAAIgBAAIAAAAgAaFjVIAAAAg");
	this.shape_11.setTransform(184.9223,17.5792);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AY9jLQADAAAEgBQAGgBAHgCQgFABgFABQgFABgFABgAaLjbQAAAAAAAAQgCAAgCABQACAAABgBIABAAQAAAAACAAQCcBKAOBVQAAABgBgBIAAABQABADAAADQACAZgJAZIhABXQgIAEgIAFIhEAFQghACghACQrLAwo5AdQkZAOjzAMIx+APQgBAAgBAAQgJAAgIgBQkhgJh/geQgBAAAAAAQgBgBAAAAQgCgBgBgBQAAAAgBgBQgBAAgBgBQgBgBgBgBQhDgzgDg3IAAAAQgGhVCShhQCvAcCwAWQAQACARACQCnATCoANQASABASABQgQgBgQgBQgCgBgDAAQiogNiogTQgOgBgOgCQivgVitgcQADABAEAAIFHAdQAEAAAEAAQAEABADAAIAVABQAEABAFAAIABAAQChALCoAGQABAAABAAQDAAGDDABIAUAAQB2AAB6gCIARgBQAGAAAHAAIEcgIQAMAAALgBQAFAAADAAQABAAABAAQCNgGCRgJQAFAAAGgBQAagBAagCQAHAAAHgBIDVgPQADAAADAAQACAAABAAQAPgBAQgCIFBgcQAJgBAKgBQAGAAAFgBQEvgeE9goQAlgFAlgEQAAAAABAAIAAAAQAIABAJAAQCLBDAWBNQABAHABAFQh4AQh2ANQqIBHplAiQhrAGhqAHQE4gMFCgYQILglIrhJQABAAAAgBQAEAcgLAdAZ7jYQAEAAADgBQAEgBAEgBAaCjZQgDABgEAAAaHjaQgDAAgCABAOtiHQANgBANgCIABAAQE0geFEgqQAjgEAkgEAZRjPIAqgJAPchhIBsgRQDigiDjgtIAwgKAbwBUQgFAEgFAFQgDAAgDAAAPKhfQgBAAAAAAQi9Aai7ASQgCABgDAAQh4AMh5AJQgCABgCAAQADAAACgBQB5gJB5gMQC+gTC+gaQAJgBAJgBQgIABgIABQgBAAgBAAgAJKhoQADAAADgBQAOgBAOgBAAChFQCRgHCUgJQACAAABAAQAagBAagCQAJAAAIgBAE1gaQgEAAgEAAQgCAAgBAAIgBAAIkcAQQgEAAgFAAQgBAAgBAAQAFAAAGAAAEqgaQAFAAAGAAIAigCAgdhEQAOAAAOgBQABAAACAAAp0gJIAJAAQABAAABAAIABAAQApABApABQBrADBsAAIABAAQABAAABAAQCGAACEgEQAagBAZgBIABAAAacBiQoBAqmbAaQoRAbmlAMAlGg8QACABADgBQAEAAAEAAAp0gJQgFAAgEgBQgBAAgBAAQgBAAgBAAQgBAAgBAAIAAAAQgrgCgrgCIjfgNAqDgKQAIABAHAAA1XhUQADAAAEAAQAEABAEAAA0uBeQgHAAgHAAQADAAADAAQAEAAAEAAgACGBXI2wAIQgCAAgCgBA1TBdQAGAAAGAAQgCAAgCAAQgEAAgEAAgA08BeIgLgBA6mhyQAEAAAEABA6mhyQgCAAgBgBIgCAAIACABQABAAACAAgA6lhyQgBAAAAAAA6phyQACAAACAAA83BDIHkAa");
	this.shape_12.setTransform(184.9456,17.251);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5E7C5E").s().p("A02DcIgRgBQkhgJh/geIgBAAIgBgBIgDgCIgBgBIgCgBIgCgCQhDgzgDg3IAAAAQgGhVCShhIACAAIADABIAIABIFHAdIAHAAIAIABIAVABIAJABIABAAQChALCoAGIACAAQDAAGDDABIAUAAQB2AAB6gCIARgBIANAAIEcgIIAXgBIAIAAIACAAQCNgGCRgJIALgBIA0gDIAOgBIDVgPIAGAAIAGgBIAcgCIgfADIgDAAIADAAIAfgDIFBgcIATgCIALgBQEvgeE9goIBKgJIABAAIAFgBIADgBIABAAIgBAAIgDABIAEgBIAAAAIACAAQCcBKAOBVIgBAAIgCgMQgWhNiLhDIgRgBIAIgCIgIACIAAAAIgHABIAHgBIAAAAIARABQCLBDAWBNIACAMIjuAdQqIBHplAiIjVANIDVgNQJlgiKIhHIDugdIAAABIABAGIAAAKQAAAUgHAUIhABXIgQAJIAQgJIgKAJIgGAAIhEAFIhCAEQrLAwo5AdIoMAaIx+APIgBAAIgBAAgA0uBeIAEABIWwgIQE4gMFCgYQILglIrhJQorBJoLAlQlCAYk4AMI2wAIIgEgBIgIAAIgGAAIAOAAIAAAAgA08BeIgLgBgA1HBdIgEAAIgIAAIAMAAIAAAAgA1TBdInkgagAp0gJIAJAAIACAAIABAAIBSACQBrADBsAAIABAAIACAAQCGAACEgEIAzgCIABAAIACAAIAJAAIgLAAIgBAAIgzACQiEAEiGAAIgCAAIgBAAQhsAAhrgDIhSgCIgBAAIgCAAIgJAAIgPgBIAAAAIhWgEIjfgNIDfANIBWAEIAAAAIACAAIACAAIACAAIAJABIAAAAgAANgKIEcgQIABAAIADAAIAIAAIAigCIAFgBQB5gJB5gMQC+gTC+gaQi+Aai+ATQh5AMh5AJIgFABIgiACIgLAAIgBAAgA1MhBIAhAEQCnATCoANIAkACIgggCIgFgBQiogNiogTIgcgDQivgVitgcIAHABIgHgBIgBAAIgDAAIADAAIABAAIgEAAIAEAAQCtAcCvAVIAcADQCoATCoANIAFABIAgACIgkgCQiogNingTIghgEQiwgWivgcIACABIgCgBQCvAcCwAWgAJRgzIgFABQh4AMh5AJIgEABIAEgBQB5gJB4gMIAFgBQC7gSC9gaIABAAIgBAAQi9Aai7ASgAlBg8IAIAAIgIAAIgDABIgCgBIACABIADgBgAPMhfIAQgCIBsgRQDigiDjgtIAwgKIAKgCIAKgCIgNADIgHABIgwAKQjjAtjiAiIhsARIgSACIACAAgAZ7jYIgqAJIAqgJIAHgBIgHABgA08BeIAGAAIAIAAIgOAAgA1TBdIAIAAIAEAAIgMAAgA1TBdIAAAAgAcwgDIAAAAgAc3grIAAgKIgBgGIABgBQAEAcgLAdQAHgUAAgUgAp9gKIgCAAIgCAAIgCAAIAPABIgJgBgAACgKIALAAIgJAAIgCAAgAACgKIAAAAgAqDgKIAAAAgAEqgaIALAAIgIAAIgDAAgAEqgaIAAAAgAc2g8IABAAIgBABgAc2g8IAAAAgA1QhUIgHAAIAIAAIAHABIgIgBgAPKhfIASgCIgQACIgCAAgAPKhfIAAAAgAZEjMIANgDIgKACIgKACIAHgBgAaCjZIAAAAg");
	this.shape_13.setTransform(184.9456,17.251);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AO1iMQAJAAAJgBQE0ggFDgrQAIgBAIgBIAwgGQABAAACAAQABAAAAAAQAHAAAHAAQCLBCAYBNQACAGABAHIAAABQABACAAACQACARgDAQIhEBpQgIAFgIAGQhDAFhCAEQrMA0o5AfQkYAQj0ANIx9AUQgBAAAAAAQgLAAgKAAQkggIh/geQhNg1gEg7QgGhVCRhiQAEABADAAQgCAAgDgBIgCAAQAZAEAZAEIEuAoQACAAACABQAKABAKABIAEAAQACABADAAQAFAAAFABQgGgBgFAAQgCAAgCgBAaIjiQAAAAABAAQABAAABAAQgCAAgBAAgAaCjgQAFgBAFgBQCcBJAPBVQgBAAAAAAQh4AQh3AOQqHBKpkAmQhpAGhoAHQDygLD3gSQJOgqJ0hTQAAAAABAAQADASgEATAZ+jgQAFgBAFgBQgDABgEABQgeAGgdAGQgNADgNADQAMgCALgDQAfgHAggGAO1iMQAFAAAEAAQAGgBAFAAQEugfE9grQANgBANgCAbyBLQgGAFgGAGQp9Azn1AgQm8AZlsANAYsjOIlaBBIj2AoQgIABgIABQgBAAgBAAQAJgBAJgBAO9hhQAGgBAHgBQgBAAAAAAQgGABgGABgAJbhsIBdgIQBSgHBTgIIBYgJAEphVQAagCAbgCQB1gHB2gKQACAAABAAQAIgBAHgBAJNg0IAAAAQACAAADAAQgDAAgCAAgAEphVQABAAABAAQAagCAagCQBxgHBygJQAGgBAGAAQAHgBAGgBAJSg0IFrgtAEYhUQAEAAAEAAQAFgBAEAAAEYhUQAHAAAHgBQACAAABAAAE5gbIAjgDIAAAAQB4gJB5gNAE5gbQgGABgFAAQgCAAgCAAQAIAAAHgBgAAHhFIA/gDQA/gDBAgEIBTgFAgahDQAJAAAKgBQAFAAAFAAQACAAACgBAgahDQAMgBAMAAQACAAABAAQADAAADgBAAOgJQgFAAgEAAQgCAAgBAAQAGAAAGAAIEcgRAlOg5QAEAAADAAQAGAAAHgBIEggJAlOg5QAGAAAGAAQAEAAAEgBApzgFIAKAAQABAAAAAAQB6ADB5AAQAXAAAWAAQAFAAAFAAQABAAACAAQCggBCdgGApdg2QADAAACAAQAlAAAkAAApdg2QAPABAGAAQAcAAAdgBIDBgDAqDgGQADAAACAAQAGABAFAAQgFAAgFAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgBAAgBAAgAvcgYIAAAAIlFgdAvCgWQgLgBgKgBQgDAAgCAAQANABANABIE/AQAvng7QAEAAAEAAQADAAADAAIF8AFAvng7QADAAADAAQAEAAAEAAA1IhMIAUABQAFABAFAAIFDAPA1ZhNQAFAAAFABQADAAAEAAA1ZhNQAEAAAEABQAEAAAFAAA0/BlIAGAAIADAAA0eBmQgHAAgIAAQgEgBgFAAQACAAACAAQAKABAKAAIWpgPA1RBkQAJAAAJABQgGgBgGAAQgDAAgDAAIhvgEQi9gHi6gMA56hiQgVgEgWgDIFMAc");
	this.shape_14.setTransform(184.9262,17.1755);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E7C5E").s().p("A0yDjIgVAAQkggIh/geQhNg1gEg7QC6AMC9AHIBvAEIASABIgMgBIgGAAIhvgEQi9gHi6gMQgGhVCRhiIACAAIAFABIgHgBIAHABIFMAcIAIABIAJAAIAUABIAKABIFDAPIAIAAIAGAAIF8AFIAFAAIBJAAIg5ABIgVgBIAVABIA5gBIDBgDIAMAAIAIgBIEggJIAYgBIADAAIAGgBIgEABIgKAAIgTABIATgBIAKAAIAEgBIA/gDIB/gHIBTgFIAOgBIADAAIgJABIgIAAIAIAAIAJgBIACAAIA0gEIDjgQIAMgBIANgCIBdgIIClgPIBYgJIAJAAIALgBQEugfE9grIAagDIAwgGIAKgCIgHACIABAAIg/ANIgXAFIAagGIA7gMIg7AMIgaAGIlaBBIj2AoID2goIFahBIAXgFIA/gNIAOAAQCLBCAYBNIADANIjvAeQqHBKpkAmIjRANIDRgNQJkgmKHhKIDvgeIAAABIABAEIABAOQAAAJgCAKQACgKAAgJIgBgOIgBgEIABAAQADASgEATIhEBpIgQALIiFAJQrMA0o5AfIoMAdIx9AUIgBAAIAAAAgA0eBmIWpgPI2pAPIgUgBIgEAAIAJABIAPAAIAAAAgA05BlIADAAIgDAAIgGAAgAJ0A6Qj3ASjyALQDygLD3gSQJOgqJ0hTQp0BTpOAqgAl1gCIAtAAIAKAAIADAAQCggBCdgGQidAGigABIgDAAIgKAAIgtAAQh5AAh6gDIAAAAIgBAAIgKAAIgLgBIgBAAIgCAAIgCAAIACAAIACAAIABAAIgFAAIk/gQIgVgCIgFAAIAaACIE/AQIAFAAIABABIAKAAIAKAAIABAAIAAAAQB6ADB5AAgAACgJIADAAIAJAAIEcgRIkcARIgMAAIAAAAgAvcgYIAAAAIAAAAIlFgdgAEqgaIAEAAIALgBIgPABIAAAAgAE5gbIAjgDIAAAAQB4gJB5gNIAAAAIAFAAIgFAAQh5ANh4AJIAAAAgAO9hhIlrAtIFrgtIANgCIgBAAIgMACIAAAAgA0sg2IALABIgKgBIgFgBIAEABgA56hiIEuAoIAEABIAUACIAEAAIgEAAIgUgCIgEgBIkugoIgrgHIArAHgAvhg7IAIAAIgIAAIgGAAIAGAAgA56hiIgygIIAyAIgAPMhjIAQgCIgSACIASgCIgQACIgCAAIACAAgAaBjgIgDAAIADAAgA0tBmIgJgBIAEAAIAUABIgPAAgA1RBkIAGAAIAMABIgSgBgA1RBkIAAAAgA83BNIAAAAgApzgFIAAAAgAp9gFIgBgBIALABIgKAAgAp+gGIAAAAgAACgJIAMAAIgJAAIgDAAgAvcgYIAFAAIAVACIgagCgAvcgYIAAAAgAEqgaIAPgBIgLABIgEAAgAJNg0IAFAAIgFAAgA0sg2IgEgBIAFABIAKABIgLgBgAc2hEIgDgNQgYhNiLhCIgOAAIAKgCQCcBJAPBVIgBAAIAAAAgAc2hEgAc2hEIAAAAgA1IhMIAAAAgA1RhMIgIgBIAKABIAHAAIgJAAgAO9hhIAAAAgAPJhjIABAAIgNACIAMgCgAYsjOIAAAAgAaIjiIADAAIgCAAIgBAAIAAAAg");
	this.shape_15.setTransform(184.9262,17.1755);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("APmhrIC2gdQBxgUBxgWQBWgRBWgSQAMgCAMgDQALgCAMgDQgKACgJADQgOADgOACAaFjoQABAAABAAQABgBABAAQABAAABAAQCdBIAPBWIgBAAQAAABABABQACARgDARIhCBpQgIAGgHAGQhDAFhCAGQrMA2o6AiQiMAJiDAJI16AoQgMgBgLAAQkggHh/gcQgBgBgBAAQAAgBgBAAQhLg0gDg6IAAgBQgHhWCQhgQAaADAZAEIEuAnQACAAACAAQAOACAOABIABAAQAVACAWADID/AVQATACASABQAKABALAAAaFjoQACgBACAAAO/iQQADgBAEAAIAAAAQE0giFDgsQAPgCAQgCIAfgEQADAAADgBQACAAACAAAZZjfQAJgCAKgCQAKgCALgDQAGAAAGAAQCMBBAZBMQADAIABAIAZ7jnQAFgBAFAAAO/iQQAEgBAEAAQEuggE8gsQAVgDAWgDAc3hLQACARgDATAb0BCQgHAGgGAGQrNA7oyAkQjYANjFAJAZlgwQgPABgPACQqHBOpkAoQtmA5sigVQgCgBgBABIgWgBQgDAAgCAAQgEgBgDAAInlgVAZlgwIDRgbAJrhvIDXgUQA9gHA9gGIADAAAPJhmIAAAAQi8Abi7AVQgDAAgCABIAAAAQC+gVC+gcQAOgDAPgCQgNADgNACQgCAAgBAAgAIxhqQAMgBAMgBQABAAACAAQAPgBAQgCAIxhqQAIgBAIAAQAGgBAGAAQAPgCAPgBAEphVIAtgEQADAAAEAAQADgBAEAAIDNgQAD6hSQASgBASgBQAFgBAGAAAD6hSQAWgCAWgBQABAAACAAAFWhZQAEAAAEAAQADgBADAAAE5gbQgGAAgFABQgCAAgCAAIAAAAIkcASAE5gbIAjgDIAAAAQB4gLB5gMAEqgaQAIgBAHAAAACgIQAGAAAGAAQgFAAgEAAQgCAAgBAAgAg3hBQAXAAAXgBQAFgBAFAAIAAAAID5gPAg3hBQAagBAbgBQACAAABAAApzgBIALAAQAeAAAfABQB2ABB3gBIAAAAQABAAACAAQBxgBBwgEQAIAAAIAAQAMgBANAAQAagBAZgBIAAAAAlQg3QADAAAEAAQAHAAAHAAIEEgKAlQg3QAGAAAHAAQAEAAAEAAAvgg1QDAAEDCgBQADAAACAAIAPAAQBrgBBvgDIAggBApzgBQgFAAgFAAQgBAAgBAAQgBAAgBAAQgBgBAAAAIgBAAQgrgBgqgCIjvgMQgJAAgHgBQgDAAgCAAQgTgCgSgBAvog1QADAAADAAQABAAABAAAvog1QAEAAAEAAAqCgCQAIAAAHABA1dhGQAHABAGAAQACAAADAAIFjAQA1dhGQAGABAFAAQADAAAEAAA6thgQAEAAAFAAQgDAAgDAAgA56hZQgVgEgVgDIFHAaA0vBtQNiAZO1hFQIvgoJOhJ");
	this.shape_16.setTransform(184.9456,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5E7C5E").s().p("A1GDqQkggHh/gcIgCgBIgBgBQhLg0gDg7IAAAAQgHhWCQhgIAzAHIgqgHIFHAaIALABIAHAAIFjAQIAGAAIACAAQDAAEDCgBIAFAAIAPAAQBrgBBvgDIAggBIANAAIAIAAIEEgKIAugCIAKAAIAAAAID5gQIAkgBIALgBIAtgEIAIgBIAGAAIDNgQIAQgCIAMgBIAegCIgfADIgDAAIgYACIAYgCIADAAIAfgDIDXgUIB6gNIADAAIAIgBQEuggE8gsIArgGIAfgEIAKgBIgEABIgGAAIAGAAIgVAEIgTAEIATgEIAVgEIAEgBIACAAIACgBIACgBQCdBJAPBVIgBAAIABAAQACASgDATQACgKAAgKIgBgOIgBgDIABADIABAOQAAAKgCAKIhCBpIgPAMIiFAKQrMA3o6AiIkPARI16ApIgXgBgAtaBzQJcAAKBgrIAKgBIAygDIAQgBIAZgCQIvgoJOhJIgeADQqHBOpkAoIgRABIgFAAIgXABQpkAnpCAAIAAAAIgBAAQjcAAjYgFIgDAAIADAAQDYAFDcAAIABAAIAAAAQJCAAJkgnIAXgBIAFAAIARgBQJkgoKHhOIAegDQpOBJovAoIgZACIgQABIgyADIgKABQqBArpcAAIAAAAIAAAAQjdAAjXgGIghAAIgWgBIgFgBIgHAAInlgVIHlAVIAHAAIAFABIAWABIAhAAQDXAGDdAAIAAAAIAAAAgAmZAAIBUAAIAHAAIAAAAIADAAQBxgBBwgEIAQAAIAZgBIAzgCIAAAAIADAAIAJgBIgMABIAAAAIgzACIgZABIgQAAQhwAEhxABIgDAAIAAAAIgHAAIhUAAIAAAAIAAAAIiNAAIgFAAIg9gCIgLAAIgPAAIgBAAIhVgDIjvgMIgQgBIgFgBIglgCIAlACIAFABIAQABIDvAMIBVADIABAAIABAAIACAAIACAAIAKAAIALAAIA9ACIAFAAICNAAIAAAAIAAAAgAAOgJIEcgSIAAAAIAEAAIALgBIAjgDIAAAAQB4gKB5gNQh5ANh4AKIAAAAIgjADIgLABIgEAAIAPgBIgPABIAAAAgA1MgyIAEAAIAcADIABAAIArAFID/AVIAlADIAVABIgVgBIglgDIj/gVIgrgFIgBAAIgcgDIgEAAIkugngAZlgwIDRgcgAJNg2IAAAAQC+gUC+gcIADAAIAagFIgaAFIgDAAIAdgFIC2geQBxgTBxgWICsgjIisAjQhxAWhxATIi2AeIgdAFIAAAAQi8Abi7AUIgFABIAAAAgAcyhcIAEAQIgEgQQgZhMiMhAIgMABIAMgBQCMBAAZBMgAZCjaIgYAFIAcgGIATgEIgXAFgApzgCIAAAAgAp9gCIgCAAIgCAAIgBAAIAPAAIgKAAgAqCgCIAAAAgAACgIIAMgBIgJABIgDAAgAACgIIAAAAgAJNg2IAFgBQC7gUC8gbIAAAAQi+Aci+AUgA1LhFIAAAAgA1ShFIgLgBIANABIAFAAIgHAAgAEmhVIADAAIgLABIgkABIAsgCgAEphVIAAAAgAFdhaIAHAAIgGAAIgIABIAHgBgA6thgIAJAAIAqAHIgzgHgAFkhaIAAAAgA6thgIADAAIAGAAIgJAAgA6thggAPJhmgAPGiRIAAAAQE0giFDgsIAfgEIgrAGQk8AskuAgIgIABIAHgBgAZCjaIAXgFIgTAEIgcAGIAYgFgAZcjjIAAAAgAaJjpIgCABIgCAAIAEgBgAaJjpIAAAAg");
	this.shape_17.setTransform(184.9456,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("A82BgQAEA7BOA1QCEAdE1AEQIpAIRehJQJugpMdhBQBbhRgMhIA6thYQC8ASDGAKQCkAICqAEQC/AEDIgCQCJgCCNgFQCegFCigJQCSgICWgLQAagCAagCQB2gJB5gLQC6gSDAgVQFZgnFsg1QljBQleA3Qi/Adi9AVQh4AOh5AKQgZACgZADQiUAMiUAIQigAHigACQiiACiggDQgBAAgBAAQiugDisgLQiogKingRQjCgUjAgcQiQBiAHBWQEBAOEKAGQMiARNlg9QLVgzMFhoAaKjxQCdBIAPBW");
	this.shape_18.setTransform(184.9287,17.0497);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5E7C5E").s().p("A0rDxQk1gEiEgdQhOg1gEg7QgHhWCQhiQC8ARDGALQCkAICqAEQC/AEDIgCQCJgCCNgFQCegFCigJQCSgICWgLIA0gEQB2gJB5gLQC6gSDAgVQFZgnFsg1QljBQleA3Qi/Adi9AVQh4AOh5AKIgyAFQiUAMiUAIQigAHigACIiTABIAAAAIAAAAIihgCIgOAAIgCAAQiugDisgLQiogKingRQjCgUjAgcQDAAcDCAUQCnARCoAKQCsALCuADIACAAIAOAAIChACIAAAAIAAAAICTgBQCggCCggHQCUgICUgMIAygFQB5gKB4gOQC9gVC/gdQFeg3FjhQQCdBIAPBWQsFBorVAzIhhAGQp0AppQAAIgBAAIAAAAQiyAAivgDQkKgGkBgOQEBAOEKAGQCvADCyAAIAAAAIABAAQJQAAJ0gpIBhgGQLVgzMFhoQAMBIhbBRQsdBBpuApQvzBColAAIhvgBg");
	this.shape_19.setTransform(184.9287,17.0497);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AaIjqQABAAACAAQCdBJAPBVQALBJhbBQQrVA8o3AkQz+BMougRQkagFh6gbQhNg1gEg8QgHhWCQhhQAAAAABAAQABAAABABQgBAAAAgBIgBAAAZ2jnQAJgCALgBQgBAAgBAAQgIACgHACQAJgCAJgCASLinIG1g4QADgBADAAQABAAABAAIAugHQAJgBAJgCAEnhVQABAAAAAAQAmgDAngCQB8gJCAgLQDHgSDOgXQBCgHBDgJAFEgcQAYgCAZgCQB/gLCAgOQDKgXDLggQASgCASgEQgyAIgxAHQi/Adi8AUQh6ANh5ALQgMABgMABgAEnhVQAbgCAbgCQB2gJB3gKQC7gRDBgUQBhgLBkgLAElgaQADAAACAAQABAAAAAAIAZgCAErgaQgDAAgDAAAlJg2QAEgBAFAAQCegECigIQAFAAAEgBAlJg2QADgBADAAQCggEChgIQAFAAAGgBIEegRApYAAIEaAAQCggBCggHIEjgSAvWg0IEdADQAwAAAwAAQACAAABAAIENgFAytgiIDRAQQAGABAGAAQAGABAHAAIEYAOQAUAAAVAAQAVABAVABQgUgBgUAAQgWgBgVAAA3UhNQBBADBCAEQC2AMC+AFQADAAAEABA3UhNQBTAGBWAFQCjAJCoAEQAFAAAFABAytgiQg/gFg/gHQhegKhegNQBLAJBLAIQBSAJBSAJgA6eheQgGgBgGAAIDWASA6thgQAHABAIABA3nhFIi3gZAc3hMQrEBfqYAvQvCBFtqgcQj2gGjvgOAZ5jmIpMBw");
	this.shape_20.setTransform(184.948,17.0638);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E7C5E").s().p("A1RDoQkagFh6gbQhNg1gEg8QgHhWCQhhIABAAIACABIDWASQBTAGBWAFQCjAJCoAEIAKABIEdADIBgAAIADAAIENgFIAGgBQCggEChgIIALgBIEegRIABAAIBNgFQB8gJCAgLQDHgSDOgXICFgQIG1g4IAGgBIACAAIAugHIASgDIgPAEIASgEQCdBJAPBVQrEBfqYAvIgeACIgDAAQqYAvpvAAIAAAAIAAAAQjwAAjqgHIgRAAIgDAAIgWgBQj2gGjvgOQDvAOD2AGIAWABIADAAIARAAQDqAHDwAAIAAAAIAAAAQJvAAKYgvIADAAIAegCQKYgvLEhfQALBJhbBQQrVA8o3AkQwPA+ozAAQiCAAhogDgAk+AAQCggBCggHIEjgSIkjASQigAHigABIkaAAIEaAAgApYAAIgqgCIgpAAIkYgOIgNgBIgMgBIjRgQIikgSIiWgRQBeANBeAKQA/AHA/AFIDRAQIAMABIANABIEYAOIArABIAoABIAAAAgAElgaIAGAAIgGAAgAEqgaIgFAAIAFAAIABAAIAZgCIAxgEQB/gLCAgOQDKgXDLggIAkgGIJMhwIpMBwIhjAPQi/Adi8AUQh6ANh5ALIgYACIgZACIAAAAIgBAAgAAAhDQiiAIieAEIgJABIAJgBQCegECigIIAJgBIgJABgA6eheIC3AZIi3gZIgMgBIAMABgA6eheIgPgCIAPACgAqAgBIgrgBIApAAIAqACIgogBgAqrgCIAAAAgAFEgcIAAAAgAFEgcIAAAAgAFcgeQB5gLB6gNQC8gUC/gdIBjgPIgkAGQjLAgjKAXQiAAOh/ALIgxAEIAYgCgA0rguQhegKhegNICWARICkASQg/gFg/gHgAvWg0IAAAAgAvgg1QiogEijgJQhWgFhTgGICDAHQC2AMC+AFIAHABIgKgBgA6shgIABAAIABABIgCgBgAaIjqIADAAIgSAEIAPgEgAaKjqIgCAAIgSADIAUgDg");
	this.shape_21.setTransform(184.948,17.0638);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AgLhEQAFAAAFAAQCTgICWgJQAbgCAagCQB2gIB4gKQC7gQDAgTQE6ghFHgsQAigEAigFQgBABgCAAQACAAACgBQCcBJAPBWQALBIhcBRQqMA1oAAhQ2fBPoygcQj/gFhwgZQhNg1gEg8QgGhVCRhhIAAAAQACABABAAQgBAAgBgBIgBAAAaIjjQgeAGgeAHQlDBEk/AuQi+Aci9AUQh6AMh4AKQgZACgZACQAxgDAxgEQCGgLCHgPQDXgYDZgjQEfgtEjhBAgLhEQAGAAAFAAQCSgICXgJQAxgDAzgDQCEgJCHgLQDTgTDcgXQEagfEngrApbgEQCBADCCAAQANAAANgBIABAAQBQAABRgCQBPgCBPgDIABAAQCTgHCVgKIAAAAAyGhAQBTAEBUACQABAAABAAQAlACAlAAQCJADCMAAQATAAATAAQABAAABAAQCIgBCMgDQABAAABAAQCZgDCcgIAqYgGQALABALAAQATABAUAAQgSAAgTgBQgMAAgMgBgAyDglQBUAIBUAGQCgAMCjAFA4ShaQByAKB2AHQBRAFBTAEA4ShaQBNAFBOAEQB3AJB6AIAyDglQhTgHhUgJQhugMhugQQBIAIBHAIQB6AQB6AMgA6ZhlQgIgBgIgBQBLAHBMAGA6shoQAJACAKABQADABACAAQBHAKBHAJAc3hFQqCBVpbArQwfBPuygpQjjgGjdgN");
	this.shape_22.setTransform(184.9269,17.155);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E7C5E").s().p("A13DdQj/gFhwgZQhNg1gEg8QgGhVCRhhIAAAAIADABICXANQByAKB2AHQBRAFBTAEICnAGIACAAIBKACQCJADCMAAIAmAAIACAAQCIgBCMgDIACAAQCZgDCcgIIALAAQCSgICXgJIBkgGQCEgJCHgLQDTgTDcgXQEagfEngrQknArkaAfQjcAXjTATQiHALiEAJIhkAGQiXAJiSAIIgLAAIAKAAQCTgICWgJIA1gEQB2gIB4gKQC7gQDAgTQE6ghFHgsIBEgJIgDABIAEgBQkjBBkfAtQjZAjjXAYQiHAPiGALIhiAHIAygEQB4gKB6gMQC9gUC+gcQE/guFDhEIA8gNIg8ANQlDBEk/AuQi+Aci9AUQh6AMh4AKIgyAEIAAAAQiVAKiTAHIgBAAIieAFIihACIgBAAIgaABIgYAAIgYAAIAAAAIgBAAIhpgBIgHAAIhigCIBiACIAHAAIBpABIABAAIAAAAIAYAAIAYAAIAagBIABAAIChgCICegFIABAAQCTgHCVgKIAAAAIBigHQCGgLCHgPQDXgYDZgjQEfgtEjhBQCcBJAPBWQqCBVpbArIgMABQqyAzqFAAIAAAAIAAAAQlNAAlBgOQjjgGjdgNQDdANDjAGQFBAOFNAAIAAAAIAAAAQKFAAKygzIAMgBQJbgrKChVQALBIhcBRQqMA1oAAhQwrA7pJAAQjMAAiRgIgAqAgFIAlABIgngBIgWgBIAWABIAnABIglgBIgYgBIAYABgA0qg1QBUAJBTAHQBUAIBUAGQCgAMCjAFQijgFiggMQhUgGhUgIQh6gMh6gQIiPgQQBuAQBuAMgA6ZhlIAFABICOATIiOgTIgFgBIgTgDIATADgA6ZhlIgQgCIAQACgAErgaIAAAAgA0qg1QhugMhugQICPAQQB6AQB6AMQhTgHhUgJgA6phnIAAAAgA6shoIABAAIACABIgDgBg");
	this.shape_23.setTransform(184.9269,17.155);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AEphVQAagCAbgBQB2gIB3gJQC7gPDBgTQE6gfFHgrQAigEAigFQgBAAAAAAQAAAAABAAQCdBKAOBWQALBHhcBRQpEAvnJAdQ4/BSo3glQjjgFhmgXQhNg2gEg8QgGhVCRhgQAIABAIABQgGgBgGgBQgBAAgBAAIgBAAQABAAACAAAaLjeQggAHgfAHQlCBCk/AuQi/Aai9ATQh6AMh4AKQgZABgZACQA9gDA9gFQCOgLCNgQQDkgaDnglQD/goECg6AEphVQA9gDA/gDQCLgJCOgMQDhgTDpgYQD7gdEIgmAAGhGQB0gFB1gHQAcgBAdgCIABAAApbgIQCAAECAAAQAPAAAOAAIABAAQBQAABRgCQBPgBBPgDIABAAQBVgDBXgFQA+gEA+gEIAAAAAAAhFQAAAAABAAQACAAADgBAAAhFQACAAAEgBAvcg/QBBACBCABQB/ADCDAAQABAAABAAQCIAACMgCQABAAABAAQCbgECfgGQACAAADAAA5khqQCaAQCgALQCjAKCpAGQABAAABAAAyDgrQBUAIBUAHQAFAAAGABQAHAAAHABQCLAKCNAFQAUABAUABQATAAAUABQgTAAgSgBQgVAAgVgCAyDgrQhTgHhTgJQiZgSiYgYQBfANBeAJQCNAUCNAQgA6chuQACAAACAAQAfAFAfAEA6shwQACAAACAAQABAAACAAQAgADAhADQBiAIBlAFQDaAUDnAKAc3g+QpABMoeAmQx7BYv7g0QjPgHjLgM");
	this.shape_24.setTransform(184.9468,17.2752);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5E7C5E").s().p("A2dDTQjjgFhmgXQhNg2gEg8QgGhVCRhgIAEAAIADAAIBBAGQCaAQCgALQCjAKCpAGIACAAICDADQB/ADCDAAIACAAQCIAACMgCIACAAQCbgECfgGIAFAAIABAAIAFgBQB0gFB1gHIA5gDIABAAIB8gGQCLgJCOgMQDhgTDpgYQD7gdEIgmQkIAmj7AdQjpAYjhATQiOAMiLAJIh8AGIA1gDQB2gIB3gJQC7gPDBgTQE6gfFHgrIBEgJIgBAAIABAAQCdBKAOBWQpABMoeAmIgdACQrAA1qPAAIgBAAIAAAAQmIAAl3gTIgKAAQjPgHjLgMQDLAMDPAHIAKAAQF3ATGIAAIAAAAIABAAQKPAALAg1IAdgCQIegmJAhMQALBHhcBRQpEAvnJAdQxOA5pkAAQkUAAiwgMgAk9gEIChgCICegEIABAAICsgIIB8gIIAAAAIAAAAIh8AIIisAIIgBAAIieAEIihACIgBAAIgdAAQiAAAiAgEQCAAECAAAIAdAAIABAAgApbgIIgngBIgogBQiNgGiLgKIgOgBIgLgBQhUgHhUgIQiNgQiNgUQhegJhfgMQCYAXCZASQBTAJBTAHQBUAIBUAHIALABIAOABQCLAKCNAGIAqABIAlABIAAAAgAErgaIB6gIQCOgLCNgQQDkgaDnglQD/goECg6QkCA6j/AoQjnAljkAaQiNAQiOALIh6AIIAygDQB4gKB6gMQC9gTC/gaQE/guFChCIA/gOIg/AOQlCBCk/AuQi/Aai9ATQh6AMh4AKIgyADIAAAAgA6YhtIA+AJIg+gJIgEgBIAEABgA6chuIgMgCIAMACIgQgCIAQACIAAAAgAqAgJIgqgBIAoABIAnABIglgBgAqqgKIAAAAgAErgaIAAAAgA0pg7QiZgSiYgXQBfAMBeAJQCNAUCNAQQhTgHhTgJgAveg/QipgGijgKQiggLiagQQBiAIBlAFQDaAUDnAKIgBAAIgBAAgA6chuIAAAAgA6ohwIAAAAgA6rhwIABAAIACAAIgDAAg");
	this.shape_25.setTransform(184.9468,17.2752);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AE3hWQAUgBATgBQB2gHB4gJQC7gPDAgRQE7geFHgpQAigFAigEQgBAAAAAAQAAAAABAAQCdBKANBWQALBIhcBQQn8ApmTAZQ7eBVo7gvQjJgGhcgUQhNg3gDg7QgGhVCShgQByAKB3AHQDrAYD7ALQBuAEBxACQBSACBUAAQABAAABAAQCIABCMgCQABAAABAAQCdgDCigGQAAAAABAAQCSgGCWgIIAAAAIAOgBQBDgCBDgEQCSgJCWgMQDtgUD3gZQDcgZDnghQggAHgfAGQlDBBk/AsQi/Aai9ASQh6AMh4AJQgJAAgKABQA6gDA5gEQCVgMCVgRQDxgbD0goQDfgjDigyApbgMID7AFQARAAARAAQABAAAAAAQCgAACfgEQABAAAAAAQCUgGCUgJIAAAAIAfgCA6ih4QC4AUDBANQCiAMCpAGQABAAABAAAyCgxICnAPQAGABAGAAQAJABAJABIEeARQAOAAAPABQATABAUAAQgSAAgSgBQgQAAgQgBAyCgxQhTgIhUgJQjBgYi/gfQADABAEAAQBwAQBwAMQCfAYChATgAc3g4Qn+BDniAiQzXBhxChAQi9gHi4gLA6rh5QAEABAFAA");
	this.shape_26.setTransform(184.9234,17.4117);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5E7C5E").s().p("A3CDIQjJgGhcgUQhNg3gDg7QC4ALC9AHIAQABIAJAAIACAAQGlAYG6AAIAAAAIABAAQKpAALeg4IAXgCQHigiH+hDQn+BDniAiIgXACQreA4qpAAIgBAAIAAAAQm6AAmlgYIgCAAIgJAAIgQgBQi9gHi4gLQgGhVCShgIAJABIgJgBQByAKB3AHQDrAYD7ALQBuAEBxACICmACIACAAQCIABCMgCIACAAQCdgDCigGIABAAQCSgGCWgIIAAAAIAOgBICGgGQCSgJCWgMQDtgUD3gZQDcgZDnghQjnAhjcAZQj3AZjtAUQiWAMiSAJIiGAGIAngCQB2gHB4gJQC7gPDAgRQE7geFHgpIBEgJIgBAAIABAAQCdBKANBWQALBIhcBQQn8ApmTAZQxsA3qAAAQliAAjLgRgAlggHIAiAAIABAAQCgAACfgEIABAAQCUgGCUgJIAAAAIAfgCIBzgHQCVgMCVgRQDxgbD0goQDfgjDigyQjiAyjfAjQj0AojxAbQiVARiVAMIhzAHIATgBQB4gJB6gMQC9gSC/gaQE/gsFDhBIA/gNIg/ANQlDBBk/AsQi/Aai9ASQh6AMh4AJIgTABIgfACIAAAAQiUAJiUAGIgBAAQifAEigAAIgBAAIgiAAIj7gFgApbgMIgngBIgdgBIkegRIgSgCIgMgBIingPQihgTifgYQhwgMhwgQQC4AUDBANQCiAMCpAGIABAAIABAAIgBAAIgBAAQipgGiigMQjBgNi4gUIgHgBQC/AfDBAYQBUAJBTAIICnAPIAMABIASACIEeARIAgABIAkABIAAAAgAp/gNIgggBIAdABIAnABIgkgBgAqfgOIAAAAgAFKgcIAAAAgA0phCQjBgYi/gfIAHABQBwAQBwAMQCfAYChATQhTgIhUgJg");
	this.shape_27.setTransform(184.9234,17.4117);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AE+hXQAQgBARgBQB2gGB4gJQC7gNDAgRQE6gdFJgnQAhgFAigEQgBABgBAAQABAAABgBQCcBLAOBWQAKBIhdBQQmzAilcAWQ9/BYo/g5QiugGhSgTQhMg2gDg8QgFhVCShfQAHABAHABQBaANBaAJQCzAdCzAVICnAQQAGABAGAAIE4AUQALAAAKABQATABAUABQgSgBgSgBQgMAAgMgBAaMjSQggAGgfAGQlCBAlAAqQi/AZi9ASQh6ALh4AIQgMABgNABQBJgDBJgGQCbgMCcgRQD+gdEBgrQDAgeDCgrAE+hXQBLgDBNgEQCYgJCdgMQD6gUEGgaQC8gWDFgbAvbhLQBYAEBaACQBoADBrABQAAAAABAAQCIABCNgCQAAAAABAAQCdgBCigGQAAAAABAAQAMAAANgBQBJgCBKgEQA+gCA+gEIABAAIAUgBApbgQIEAAGQAPAAAPAAIAAAAQCgABCggEIAAAAQCTgFCVgJIABAAIAYgBA6kiCQC5AWDCAOQCjAMCpAHQABAAABAAAyCg4QhTgIhTgKQi7gXi5gfQgFgBgGgBA6qiCQABAAACAAQACAAABAAQBcAJBgAFQD9AbEQAOAc4gyQm9A5mlAeQ0zBqyLhMQipgGimgL");
	this.shape_28.setTransform(184.945,17.6112);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5E7C5E").s().p("A3oC9QiugGhSgTQhMg2gDg8QCmALCpAGQHlAgICAAIAAAAIABAAQK2AALug6IAHAAIAKgBIAhgDQGlgeG9g5Qm9A5mlAeIghADIgKABIgHAAQruA6q2AAIgBAAIAAAAQoCAAnlggQipgGimgLQgFhVCShfIAOACQC5AfC7AXQBTAKBTAIICnAQIAMABIE4AUIAVABIAnACIgkgCIgYgBIAYABIAkACIgngCIgVgBIk4gUIgMgBIingQQhTgIhTgKQi7gXi5gfQBaANBaAJQCzAdCzAVQizgVizgdQhagJhagNIgLgCIALACIgOgCIADAAIADAAQBcAJBgAFQD9AbEQAOICyAGQBoADBrABIABAAQCIABCNgCIABAAQCdgBCigGIABAAIAZgBICTgGIB8gGIABAAIAUgBICYgHQCYgJCdgMQD6gUEGgaQC8gWDFgbQjFAbi8AWQkGAaj6AUQidAMiYAJIiYAHIAhgCQB2gGB4gJQC7gNDAgRQE6gdFJgnIBDgJIgCABIACgBQCcBLAOBWQAKBIhdBQQmzAilcAWQyIA2qdAAQm2AAjjgXgAj8gKQB/AACAgDIAAAAQCTgFCVgJIABAAIAYgBICSgJQCbgMCcgRQD+gdEBgrQDAgeDCgrQjCArjAAeQkBArj+AdQicARibAMIiSAJIAZgCQB4gIB6gLQC9gSC/gZQFAgqFChAIA/gMIg/AMQlCBAlAAqQi/AZi9ASQh6ALh4AIIgZACIgYABIgBAAQiVAJiTAFIAAAAQiAADh/AAIgBAAIAAAAIhAAAIAAAAIgeAAIkAgGIEAAGIAeAAIAAAAIBAAAIAAAAIABAAgA0pheQCjAMCpAHIABAAIABAAIgBAAIgBAAQipgHijgMQjCgOi5gWQC5AWDCAOgA6ciAIAAAAg");
	this.shape_29.setTransform(184.945,17.6112);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AEqhWQAbgCAagBQB2gGB4gIQC7gMDAgRQE7gbFJgmQAhgEAigEQgBAAgBAAQABAAABAAQCcBMANBVQAKBIhdBQQlsAckkASUggfABbgJEgBDQiTgGhHgRQhMg3gDg7QgFhVCShfQAGAAAGABQBIAKBIAIQDFAhDIAYICmARQAGABAGAAQAHABAGAAIEsAUQAKABAKAAQAUABAUABQgTgBgSAAQgMgBgLgBAaNjNQggAGgfAGQlDA/k/ApQjAAYi9ARQh6AKh4AIQgMAAgNABQBVgEBVgFQCigNCjgSQEMgeEOgtQCggaCigjAEqhWQBhgEBjgFQCfgJCkgMQEIgUETgcQCdgSCkgXAvbhRQBNAEBOACQB0AEB2ACQABAAABAAQCIABCMgBQABAAABAAQCdgBChgFQABAAABAAQBwgDB0gFQAigCAigBIAAAAApagVIEEAHQAMABANAAIAAAAQCgACCggEIAAAAQCTgECVgIIABAAIAYgCA6kiLQC6AWDCAQQCjAMCpAIQAAAAABAAAyBg/QhTgIhTgKQi8gYi7ghQgEAAgEgBA6qiLQACAAACAAQABAAABAAQBJAHBNAEQEPAfEkAQAc4gsQl8AwlnAaQ2QByzThXQiWgHiTgJ");
	this.shape_30.setTransform(184.9403,17.7873);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E7C5E").s().p("A4OCyQiTgGhHgRQhMg3gDg7QCTAJCWAHIAMAAQISAmI2AAIAAAAIABAAQLhAAMfhAIAOgBQFngaF8gwQl8AwlnAaIgOABQsfBArhAAIgBAAIAAAAQo2AAoSgmIgMAAQiWgHiTgJQgFhVCShfIAMABQC7AhC8AYQBTAKBTAIICmARIAMABIANABIEsAUIAUABIAoACIglgBIgXgCIAXACIAlABIgogCIgUgBIksgUIgNgBIgMgBIimgRQhTgIhTgKQi8gYi7ghQBIAKBIAIQDGAhDHAYQjHgYjGghQhIgIhIgKIgIgBIAIABIgMgBIAEAAIACAAQBJAHBNAEQEPAfEkAQICbAGQB0AEB2ACIACAAQCIABCMgBIACAAQCdgBChgFIACAAIDkgIIBEgDIAAAAIDEgJQCfgJCkgMQEIgUETgcQCdgSCkgXQikAXidASQkTAckIAUQikAMifAJIjEAJIA1gDIDugOQC7gMDAgRQE7gbFJgmIBDgIIgCAAIACAAQCcBMANBVQAKBIhdBQQlsAckkASQyqA0q7AAQoHAAj3gcgAjSgNQBWAABXgBIALgBIADAAIAaAAIAAAAQCTgECVgIIABAAIAYgCQBVgEBVgFQCigNCjgSQEMgeEOgtQCggaCigjQiiAjigAaQkOAtkMAeQijASiiANQhVAFhVAEIAZgBQB4gIB6gKQC9gRDAgYQE/gpFDg/IA/gMIg/AMQlDA/k/ApQjAAYi9ARQh6AKh4AIIgZABIgYACIgBAAQiVAIiTAEIAAAAIgaAAIgDAAIgLABQhXABhWAAIgBAAIAAAAIg1AAIgXAAIgVAAIgJAAIAAAAIgZgBIkEgHIEEAHIAZABIAAAAIAJAAIAVAAIAXAAIA1AAIAAAAIABAAgA0ohlQCjAMCpAIIAAAAIABAAIgBAAIAAAAQipgIijgMQjCgQi6gWQC6AWDCAQgA6eiKIAAAAg");
	this.shape_31.setTransform(184.9403,17.7873);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AFGhYQANgBANgBQB2gFB4gHQC7gMDAgQQE7gaFJgkQAhgEAigEQgBAAAAAAQAAAAABAAQCbBMANBWQAKBIheBQQkjAVjuAPUgi/ABegJHgBOQh5gGg9gPQhMg3gDg7QgEhVCThfQA5AGA9ADQEgAjE4ASQB5AGB8AEQBIACBJABQAAAAABAAQCIACCNAAQAAAAABAAQCdAACigFQAAAAABAAQBwgDBzgEQAigCAjgBIAcgBQBfgDBhgFQCngKCrgMQEUgVEhgdQB+gOCEgSQghAGggAGQlDA9k/AoQjAAXi9AQQh6AKh4AHQgIABgIAAQBdgEBcgGQCpgNCrgTQEYgfEcgwQCAgVCCgcApugaIEDAIQAXABAXAAQAAAAABAAQCfADCggDQAAAAABAAQCTgECUgHIABAAQAGgBAHAAIAUgBA6diTQC2AWC/AQQCjANCpAJQABAAAAAAAqXgcQALAAAKABQAKAAAKABQgIAAgJgBQgMAAgMgBgAyqhKIDQAWIFDAYAyqhKQg+gHg/gIQjBgZi/giQAFAAAFABAc4gmQk6AmkrAWQ3sB80ahkQiEgGiBgJA6piVQAGABAGABQA1AHA1AGQDDAiDGAa");
	this.shape_32.setTransform(184.9166,17.9761);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5E7C5E").s().p("A4zCmQh5gGg9gPQhMg3gDg7QgEhVCThfQA5AGA9ADQEgAjE4ASQB5AGB8AEICRADIABAAQCIACCNAAIABAAQCdAACigFIABAAIDjgHIBFgDIAcgBIAagCIDugMQC7gMDAgQQE7gaFJgkIBDgIIgBAAIABAAQiCAciAAVQkcAwkYAfQirATipANQhcAGhdAEIAQgBQB4gHB6gKQC9gQDAgXQE/goFDg9IBBgMQiEASh+AOQkhAdkUAVQirAMinAKQhhAFhfADQBfgDBhgFQCngKCrgMQEUgVEhgdQB+gOCEgSIhBAMQlDA9k/AoQjAAXi9AQQh6AKh4AHIgQABQBdgEBcgGQCpgNCrgTQEYgfEcgwQCAgVCCgcQCbBMANBWQk6AmkrAWQtIBFsGAAIAAAAIgBAAQpbAAo0gqIgWgBIAAAAIgSgCQiEgGiBgJQCBAJCEAGIASACIAAAAIAWABQI0AqJbAAIABAAIAAAAQMGAANIhFQErgWE6gmQAKBIheBQQkjAVjuAPQzLAzraAAQpaAAkHgjgAirgQICigBIAMAAIABAAQCTgECUgHIABAAIANgBIAUgBIgUABIgNABIgBAAQiUAHiTAEIgBAAIgMAAIiiABIAAAAIAAAAIiDgBIgOAAIgBAAIAAAAIgugBIkDgIIEDAIIAuABIAAAAIABAAIAOAAICDABIAAAAIAAAAgAvag0IFDAYIAYABIARABIgUgBIgVgBIAVABIAUABIgRgBIgYgBIlDgYIjQgWgA0nhZQA/AIA+AHQg+gHg/gIQjBgZi/giIAKABIgKgBQC/AiDBAZgA4ziGQDDAiDGAaQjGgajDgiQg1gGg1gHQC2AWC/AQQCjANCpAJIABAAIAAAAIAAAAIgBAAQipgJijgNQi/gQi2gWIgMgCIAMACQA1AHA1AGgAFNgeIAAAAgA6diTIAAAAg");
	this.shape_33.setTransform(184.9166,17.9761);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AaRjDQgiAGggAGQlDA8lAAmQjAAXi9APQh6AJh4AHQgCAAgCAAAFGhZQANgBANAAQB2gFB4gHQC7gLDAgOQE7gZFKgjQAQgCARgCIAigEQCbBNAMBWQAKBIheBPQjbAQi3AKUglfABhgJMgBXQhegHgzgMQhLg4gDg7QgEhVCTheQAnADApADQEyAnFNAUQCjAJCqAEQAcABAdAAIAAAAQByADB1AAQAXABAYAAIAAAAQA3AAA3gBQBAAABAgBQApgBApgBIAAAAQCTgDCWgGIAbgBQBrgDBugGQCtgJCygNQEhgVEvgeQBPgJBSgLApkgfIEHAKQAQABAQAAQAAAAABAAQCfADCggCQAAAAABAAQCTgDCUgHIABAAQAIAAAIgBIAdgBQBjgEBjgHQCwgNCxgUQElghEpgzQBhgPBigVA5ZiUQCVASCdANQCjAOCpAKQAAAAABAAAzThXID5AdQAoAEApADIDmARQARABARABQAOAAAPABQgNAAgOgBQgSgBgSgBAzThXQgqgEgpgFQjBgbi/gjQADABADAAAc4ggQj4AejuARQ5ICE1jhvQhwgHhvgIA6pieQAEAAAFABQAjAFAkAEQDCAjDEAa");
	this.shape_34.setTransform(184.9371,18.1818);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5E7C5E").s().p("A5ZCbQhegHgzgMQhLg4gDg7QgEhVCTheIBQAGQEyAnFNAUQCjAJCqAEIA5ABIAAAAQByADB1AAIAvABIAAAAIBugBICAgBIBSgCIAAAAQCTgDCWgGIAbgBIAagBIDugMQC7gLDAgOQE7gZFKgjIAhgEIAigEIhCAMQlDA8lAAmQjAAXi9APQh6AJh4AHIgEAAIgdABIgQABIgBAAQiUAHiTADIgBAAIiRABIAAAAIgBAAIifgCIgOAAIgBAAIgggBIkHgKIEHAKIAgABIABAAIAOAAICfACIABAAIAAAAICRgBIABAAQCTgDCUgHIABAAIAQgBIAdgBQBjgEBjgHQCwgNCxgUQElghEpgzQBhgPBigVQCbBNAMBWQj4AejuARIgnADQtVBEsTAAIAAAAIgBAAQqmAAp1gyQhwgHhvgIQBvAIBwAHQJ1AyKmAAIABAAIAAAAQMTAANVhEIAngDQDugRD4geQAKBIheBPQjbAQi3AKQzxAzr5AAQqrAAkWgpgApkgfIgdgBIgigCIjmgRIhRgHIj5gdIhTgJQjBgbi/gjIAGABIgGgBQC/AjDBAbIBTAJID5AdIBRAHIDmARIAkACIAbABIAAAAgAzThXQjEgajCgjQCVASCdANQCjAOCpAKIAAAAIABAAIgBAAIAAAAQipgKijgOQidgNiVgSQgkgEgjgFIgJgBIAJABQAjAFAkAEQDCAjDEAagAXOirQkvAekhAVQiyANitAJQhuAGhrADQBrgDBugGQCtgJCygNQEhgVEvgeQBPgJBSgLQhSALhPAJgAp/ggIgkgCIAiACIAdABIgbgBgAFZgfIAAAAgAFdgfQB4gHB6gJQC9gPDAgXQFAgmFDg8IBCgMQhiAVhhAPQkpAzklAhQixAUiwANQhjAHhjAEIAEAAgAqjgiIAAAAgAaRjDIAAAAg");
	this.shape_35.setTransform(184.9371,18.1818);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("Ac4gbQAKBIheBPQiTAJiAAHUgn/ABkgJRgBhQhDgHgpgKQhLg4gCg8QgEhVCUhdQAUACAVABQCwAYC4ARIE9AYQC/ALDHAFQCJAECNABQCeABCigDQCTgDCWgFIAsgCQAFAAAFAAQB2gFB4gGQC7gKDAgOQE7gXFKgiQAhgEAigDQgiAGghAGQlDA6lAAlQi/AVi+APQgiACghADAc4gbQi2AVixAMQ6lCO2rh7QhdgHhcgIApugkID4ALQAcABAdAAQABAAAAAAQCgAECfgCQABAAAAAAQCUgCCUgGIAtgCQACAAADAAQAWgBAXgBICBgIQAVgBAWgCQC3gNC4gUQEzgiE2g2QBBgLBCgNQCbBNALBWAFXhbQBvgDBxgGQC0gJC6gNQEtgWE9gfQBAgHBDgIAqXgmQALAAALABQAKAAAJABQgIAAgIgBQgMAAgNgBgAz8hjIEiAiIFDAbAz8hjQgVgDgUgDQjBgbjAgjQAYADAYADQCkAVCrAPQAIABAIAAA6oioQAUADAVACQAFABAEABQC8AjC+Ab");
	this.shape_36.setTransform(184.9145,18.4131);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E7C5E").s().p("A5/CPQhDgHgpgKQhLg4gCg8IC5APIAOABQKcA4LSAAIAAAAIAAAAQMuAANzhHIAZgCIAagDQCxgMC2gVQAKBIheBPIkTAQQ0UAzsXAAQsBAAkkgwgAkDBSQrSAAqcg4IgOgBIi5gPQgEhVCUhdIApAFIAJACIgwgGQDAAjDBAbIApAGIEiAiIFDAbIlDgbIkigiIgpgGQjBgbjAgjIAwAGQC8AjC+AbQi+gbi8gjQCkAVCrAPIAQABIE9AYQC/ALDHAFQCJAECNABQCeABCigDQCTgDCWgFIAsgCIAKAAIDugLQC7gKDAgOQE7gXFKgiIBDgHIiDAPQk9AfktAWQi6ANi0AJQhxAGhvADQBvgDBxgGQC0gJC6gNQEtgWE9gfICDgPQCbBNALBWQi2AVixAMIgaADIgZACQtzBHsuAAIAAAAIAAAAgAhcgVIBSgBIANAAIABAAQCUgCCUgGIAtgCIAFAAIAtgCICBgIIArgDQC3gNC4gUQEzgiE2g2QBBgLBCgNIhDAMQlDA6lAAlQi/AVi+APIhDAFIiBAIIgtACIgFAAIgtACQiUAGiUACIgBAAIgNAAIhSABIAAAAIgBAAQhmAAhmgCIgTgBIgBAAIg5gBIj4gLID4ALIA5ABIABAAIATABQBmACBmAAIABAAIAAAAgApugkIgTgBIgWgBIAZABIAQABIAAAAgA84AKIAAAAgAp+glIgZgBIAWABIATABIgQgBgAqXgmIAAAAgAJPgvQC+gPC/gVQFAglFDg6IBDgMQhCANhBALQk2A2kzAiQi4AUi3ANIgrADIBDgFgA0nh9QirgPikgVIgJgCIgpgFIApADQCwAYC4ARIgQgBg");
	this.shape_37.setTransform(184.9145,18.4131);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AaTi5QgiAGghAGQlEA5k/AjQjAAVi+ANQiSAKiRAGQiVAGiUABQigABiggEQiigFiggKQgBAAgBAAQitgLisgSQlogmljhEQFWAvF1AYQC/AMDIAGQCJAECNABQCeACCigCQCSgCCXgFQCQgECTgHQC7gKDBgNQE7gVFKghQAhgEAigDQCaBOAMBWA84AAQACA8BLA4QAeAIAoAIUAJVABrAqggBnQBJgDBKgDQBfhPgJhIA84AAQBJAIBKAGQXzCHcCiVQB0gKB1gLA84AAQgEhVCUhcQACAAABAA");
	this.shape_38.setTransform(184.9351,18.6156);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5E7C5E").s().p("A6lCEQgogIgegIQhLg4gCg8QgEhVCUhcIADAAQFWAvF1AYQC/AMDIAGQCJAECNABQCeACCigCQCSgCCXgFQCQgECTgHQC7gKDBgNQE7gVFKghIBDgHIhDAMQlEA4k/AkQjAAVi+ANQiSAKiRAGQiVAGiUABIgJAAIgxABIAAAAIgBAAQhqAAhpgDIgYAAIgNgBIgNAAQiigFiggKIgCAAQitgLisgSQlogmljhEQFjBEFoAmQCsASCtALIACAAQCgAKCiAFIANAAIANABIAYAAQBpADBqAAIABAAIAAAAIAxgBIAJAAQCUgBCVgGQCRgGCSgKQC+gNDAgVQE/gkFEg4IBDgMQCaBOAMBWIjpAVIgSAAIgGABIgqADIgCAAIgNABIAAAAIgMABQt/BIs6AAIgBAAIAAAAQsNAArRhAIiTgOICTAOQLRBAMNAAIAAAAIABAAQM6AAN/hIIAMgBIAAAAIANgBIACAAIAqgDIAGgBIASAAIDpgVQAJBIhfBPIiTAGQ03Ays2AAQtYAAkwg2g");
	this.shape_39.setTransform(184.9351,18.6156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-8.1,371.9,50.4);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-201,552,402);


(lib.Scene_1_ocean_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ocean_4
	this.instance = new lib.ocean("synched",14);
	this.instance.setTransform(281,348.5,1,1,0,0,0,449.1,65.1);
	var instanceFilter_1 = new cjs.ColorFilter(0.7,0.7,0.7,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,902,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(120));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:120, x:-2, y:-2, w:902, h:134});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ocean_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ocean_3
	this.instance = new lib.ocean("synched",9);
	this.instance.setTransform(281,335.85,1,1,0,0,0,449.1,65.1);
	var instanceFilter_1 = new cjs.ColorFilter(0.8,0.8,0.8,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,902,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(120));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:120, x:-2, y:-2, w:902, h:134});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ocean_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ocean_2
	this.instance = new lib.ocean("synched",4);
	this.instance.setTransform(281,312.8,1,1,0,0,0,449.1,65.1);
	var instanceFilter_1 = new cjs.ColorFilter(0.9,0.9,0.9,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,902,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(120));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:120, x:-2, y:-2, w:902, h:134});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ocean_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ocean_1
	this.instance = new lib.ocean("synched",19);
	this.instance.setTransform(281,293,1,1,0,0,0,449.1,65.1);
	var instanceFilter_1 = new cjs.ColorFilter(0.9,0.9,0.9,1,25.5,25.5,25.5,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,902,134);

	this.instance_1 = new lib.ocean();
	this.instance_1.setTransform(281,299.05,1,1,0,0,0,449.1,65.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(120));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(120));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:120, x:-2, y:-2, w:902, h:134});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_canoe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// canoe
	this.instance = new lib.Canoe();
	this.instance.setTransform(-191.2,262.25,1,1,0,0,0,185,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:753.8},119).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Me = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// upperhand
	this.instance = new lib.upperhand();
	this.instance.setTransform(39.7,14.8,1,1,0,0,0,1.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paddle
	this.instance_1 = new lib.paddle();
	this.instance_1.setTransform(34.8,26.7,1,1,0,0,0,5.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// upperarm
	this.instance_2 = new lib.upperarm();
	this.instance_2.setTransform(33.05,17.05,1,1,0,0,0,6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shoulder
	this.instance_3 = new lib.shoulder();
	this.instance_3.setTransform(23.05,17.35,1,1,0,0,0,4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// lowerhand
	this.instance_4 = new lib.lowerhand();
	this.instance_4.setTransform(26.95,36.45,1,1,0,0,0,2.5,1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AAAABIABgBIgBABg");
	this.shape.setTransform(29.05,34.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4}]}).wait(1));

	// lowerarm
	this.instance_5 = new lib.lowerarm();
	this.instance_5.setTransform(21.35,31.9,1,1,0,0,0,5.7,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// gubbe
	this.ikNode_17 = new lib.staticbody();
	this.ikNode_17.name = "ikNode_17";
	this.ikNode_17.setTransform(19.7,26.6,1,1,0,0,0,19.9,27.1);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_17).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Me, new cjs.Rectangle(-0.7,-1,42.6,55.3), null);


(lib.Scene_1_gubbe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gubbe
	this.instance = new lib.Me();
	this.instance.setTransform(-230.1,220.5,1.4246,1.4246,0,0,0,21.2,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:714.9,y:220.55},119).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.canoe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [119];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_119 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(275,200);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(120));

	// ocean_4_obj_
	this.ocean_4 = new lib.Scene_1_ocean_4();
	this.ocean_4.name = "ocean_4";
	this.ocean_4.setTransform(281,348.7,1,1,0,0,0,281,348.7);
	this.ocean_4.depth = 0;
	this.ocean_4.isAttachedToCamera = 0
	this.ocean_4.isAttachedToMask = 0
	this.ocean_4.layerDepth = 0
	this.ocean_4.layerIndex = 0
	this.ocean_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ocean_4).wait(120));
	this.ocean_4.addEventListener("tick", AdobeAn.handleFilterCache);

	// ocean_3_obj_
	this.ocean_3 = new lib.Scene_1_ocean_3();
	this.ocean_3.name = "ocean_3";
	this.ocean_3.setTransform(281,336,1,1,0,0,0,281,336);
	this.ocean_3.depth = 0;
	this.ocean_3.isAttachedToCamera = 0
	this.ocean_3.isAttachedToMask = 0
	this.ocean_3.layerDepth = 0
	this.ocean_3.layerIndex = 1
	this.ocean_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ocean_3).wait(120));
	this.ocean_3.addEventListener("tick", AdobeAn.handleFilterCache);

	// gubbe_obj_
	this.gubbe = new lib.Scene_1_gubbe();
	this.gubbe.name = "gubbe";
	this.gubbe.setTransform(-231,220.2,1,1,0,0,0,-231,220.2);
	this.gubbe.depth = 0;
	this.gubbe.isAttachedToCamera = 0
	this.gubbe.isAttachedToMask = 0
	this.gubbe.layerDepth = 0
	this.gubbe.layerIndex = 2
	this.gubbe.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.gubbe).wait(120));

	// canoe_obj_
	this.canoe = new lib.Scene_1_canoe();
	this.canoe.name = "canoe";
	this.canoe.setTransform(-191.2,262.2,1,1,0,0,0,-191.2,262.2);
	this.canoe.depth = 0;
	this.canoe.isAttachedToCamera = 0
	this.canoe.isAttachedToMask = 0
	this.canoe.layerDepth = 0
	this.canoe.layerIndex = 3
	this.canoe.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.canoe).wait(120));

	// ocean_2_obj_
	this.ocean_2 = new lib.Scene_1_ocean_2();
	this.ocean_2.name = "ocean_2";
	this.ocean_2.setTransform(281,312.9,1,1,0,0,0,281,312.9);
	this.ocean_2.depth = 0;
	this.ocean_2.isAttachedToCamera = 0
	this.ocean_2.isAttachedToMask = 0
	this.ocean_2.layerDepth = 0
	this.ocean_2.layerIndex = 4
	this.ocean_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ocean_2).wait(120));
	this.ocean_2.addEventListener("tick", AdobeAn.handleFilterCache);

	// ocean_1_obj_
	this.ocean_1 = new lib.Scene_1_ocean_1();
	this.ocean_1.name = "ocean_1";
	this.ocean_1.setTransform(281,296.2,1,1,0,0,0,281,296.2);
	this.ocean_1.depth = 0;
	this.ocean_1.isAttachedToCamera = 0
	this.ocean_1.isAttachedToMask = 0
	this.ocean_1.layerDepth = 0
	this.ocean_1.layerIndex = 5
	this.ocean_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ocean_1).wait(120));
	this.ocean_1.addEventListener("tick", AdobeAn.handleFilterCache);

	// Background_obj_
	this.Background = new lib.Scene_1_Background();
	this.Background.name = "Background";
	this.Background.setTransform(269.1,187.1,1,1,0,0,0,269.1,187.1);
	this.Background.depth = 0;
	this.Background.isAttachedToCamera = 0
	this.Background.isAttachedToMask = 0
	this.Background.layerDepth = 0
	this.Background.layerIndex = 6
	this.Background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Background).wait(120));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.setTransform(23.6,36.6,1,1,0,0,0,23.6,36.6);
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 7
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(120));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.setTransform(271.9,216.5,1,1,0,0,0,271.9,216.5);
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 8
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-101.7,165.1,1040.9,268.9);
// library properties:
lib.properties = {
	id: 'CECAA7233D944F05B26B98F3C086D630',
	width: 550,
	height: 400,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CECAA7233D944F05B26B98F3C086D630'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;