new Vue({
    el: 'main',
    data: {
        txtItem: 'Lorem ipsum',
        itemList: []
    },

    methods:{
        addItem() {
            let item = this.txtItem.trim();
            if(item) {
                this.itemList.push({
                        text: item,
                        checked: false
                });
            }
            this.txtItem = '';
            console.log(this.itemList);
            
        }
    }
});