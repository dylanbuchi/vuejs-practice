const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Dylan',
            middleName: 'François',
            lastName: 'Buchi',
            googleURL: 'https://google.com',
            bingRawURL: '<a href="https://bing.com" target="_blank">Bing</a>',
            age: 25,
        };
    },
    methods: {
        incrementAge() {
            this.age++;
        },
        decrementAge() {
            this.age--;
        },
        updateLastName(event, message) {
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },
    computed: {
        fullName() {
            console.log('Running computed full name');
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
    },
}).mount('#app');
