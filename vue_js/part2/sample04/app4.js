var MyButton = {
    props: ['href', 'tag'],
    render: function (createElement) {
        var tag = this.tag || (this.href? 'a' : 'button')

        return createElement(tag, {
            attrs: {
                href : this.href || '#'
            }
        }, this.$slots.default)
    }
}

var vm = new Vue({
    el: '#app4',
    components: {
        'my-button': MyButton
    }
})