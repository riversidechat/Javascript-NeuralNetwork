class Perceptron {
    constructor(connections) {
        this.weights = new Array(connections + 1);
        for(let i = 0; i < this.weights.length; ++i) {
            this.weights[i] = math.random(-1, 1);
        }
        this.learnRate = 0.0001;
    }
    guess(inputs) {
        let sum = 0;
        for(let i = 0; i < inputs.length; ++i) {
            sum += inputs[i] * this.weights[i];
        }
        sum += 1 * this.weights[inputs.length];

        if(sum > 0) {
            return 1;
        }
        return -1;
    }
    train(inputs, target) {
        let guess = this.guess(inputs);

        let error = target - guess;

        for(let i = 0; i < this.weights.length - 1; ++i) {
            this.weights[i] += inputs[i] * error * this.learnRate;
        }
        this.weights[this.weights.length - 1] += 1 * error * this.learnRate;
    }
}