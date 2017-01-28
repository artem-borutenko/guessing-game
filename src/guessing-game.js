class GuessingGame {
    constructor() {
		this.min=0;
		this.max=0
	    this.current=0;
	
	
	
	}
    setRange(min, max) {
		this.min=min;
		this.max=max;

    }

    guess() {
		
			this.current=Math.ceil((this.min+this.max)/2);
			return this.current;
	}
			

    lower() {
		this.max = this.current ;
		return this.max;
			
			}
    greater() {
		this.min = this.current;
		return this.min;
		
    }
}

module.exports = GuessingGame;
