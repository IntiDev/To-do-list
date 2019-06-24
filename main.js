new Vue({
    el: 'main',
    data: {
        txtItem: 'Lorem ipsum',
        itemsList: []
    },

    methods:{
        addItem() {
            let item = this.txtItem.trim();
            if(item) {
                this.itemsList.push({
                        text: item,
                        checked: false
                });
            }
            this.txtItem = '';
            console.log(this.itemsList);
            
        }
    }
});