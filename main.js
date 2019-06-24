new Vue({
    el: 'main',
    data: {
        txtItem: '',
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
            //console.log(this.itemsList);
        },
        deleteItem(item) {
            let index = this.itemsList.indexOf(item);
            this.itemsList.splice(index,1);
        }
    }
});