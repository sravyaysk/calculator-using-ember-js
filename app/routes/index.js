import Ember from 'ember';
var current='0';
export default Ember.Route.extend({
	actions:{
		pushOpcode(value)
		{
			if(current=='0')
			{
				current=value;
			}
			else{
			current=current+value;
			}
			var display_area = $("#textfield");
			display_area.val(current);
		},
		clearAll()
		{
			current='0';
			var display_area = $("#textfield");
			display_area.val(current);
		},
		performCalculation()
		{
			current=eval(current);
			var display_area = $("#textfield");
			display_area.val(current);
		}
	}
});