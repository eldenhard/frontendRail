export default{
    methods:{
        newTab(tabname) {
            this.tabs.push({'id': this.tabCounter++,
                            'name': tabname})
          }
    }
}