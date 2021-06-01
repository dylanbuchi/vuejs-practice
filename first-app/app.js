const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Dylan',
            lastName: 'Buchi',
            googleURL: 'https://google.com',
            bingRawURL: '<a href="https://bing.com" target="_blank">Bing</a>',
            age: 25,
        };
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        incrementAge() {
            this.age++;
        },
        decrementAge() {
            this.age--;
        },
        updateLastName(event, message) {
            console.log(message);
            this.lastName = event.target.value;
        },
    },
}).mount('#app');
