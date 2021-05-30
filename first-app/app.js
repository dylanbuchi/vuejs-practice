const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Dylan',
            lastName: 'Buchi',
            googleURL: 'https://google.com',
            bingRawURL: '<a href="https://bing.com" target="_blank">Bing</a>',
        };
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
}).mount('#app');
