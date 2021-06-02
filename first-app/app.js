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
        // this keyword always bind to the vm data
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
        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },

    computed: {
        // for better performance put methods that only computes a single value in computed property
        // it only updates if needed, use it when we want to cache data
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
    },

    watch: {
        // watchers are great to use when we want to do asynchronous tasks
        age(newValue, previousValue) {
            setTimeout(() => {
                this.age = 25;
            }, 2000);
            console.log(newValue, previousValue);
        },
    },
}).mount('#app');
