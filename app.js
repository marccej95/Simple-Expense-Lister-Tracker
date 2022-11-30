Vue.createApp({
	data() {
		return {
			listed: [],
			total: [],
			enteredValue: "",
			totalamount: 0,
		};
	},
	methods: {
		addExpense() {
			if (this.enteredValue != "") {
				num = parseInt(this.enteredValue);
				if (Number.isNaN(num) != true) {
					this.listed.push("Money Out => " + num);
					this.total.push(num);
					this.totalamount -= num;
					this.enteredValue = "";
				} else {
					window.alert("Please key in a NUMBER!");
					this.enteredValue = "";
				}
			} else {
				window.alert("Please key in a NUMBER!");
			}
		},
		addMoneyIn() {
			if (this.enteredValue != "") {
				num = parseInt(this.enteredValue);
				if (Number.isNaN(num) != true) {
					this.listed.push("Money In => " + num);
					this.total.push(num);
					this.totalamount += num;
					this.enteredValue = "";
				} else {
					window.alert("Please key in a NUMBER!");
					this.enteredValue = "";
				}
			} else {
				window.alert("Please key in a NUMBER!");
			}
		},
		deleteEntry() {
			this.totalamount -= this.total[this.total.length - 1];
			this.total.pop();
			this.listed.pop();
			this.enteredValue = "";
		},
	},
}).mount("#app");
