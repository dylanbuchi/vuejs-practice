const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Dylan',
            lastName: 'Buchi',
            googleURL: 'https://google.com',
        };
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
}).mount('#app');
