enyo.kind({
	name: "Spin",
	kind: onyx.Popup,
	centered: true,
	floating: true,
	scrim: true,
	autoDismiss: true,
	classes: "loader",
	published: {
		label: "Loading...",
		showLabel: true
	},
	components: [
		{kind: "onyx.Spinner", classes: "spin-spinner spin"},
		{name: "label"}
	],
	create: function () {
		this.inherited(arguments);
		this.labelChanged();
		this.showLabelChanged();
	},
	show: function (label) {
		if (typeof label !== 'undefined') {
			this.setLabel(label);
		}
		this.inherited(arguments);
	},
	labelChanged: function () {
		this.$.label.setContent(this.label);
	},
	showLabelChanged: function () {
		this.$.label.setShowing(this.showLabel);
	}
});