var MyPage = {
    template: `
    <div>
        <header>
          <!-- headerのスロット -->
          <slot name="header"></slot>
        </header>

        <main>
          <!-- 単一スロット -->
          <slot></slot>
        </main>

        <footer>
          <!-- footerのスロット -->
          <slot name="footer"></slot>
        </footer>
    </div>`
}

var vm = new Vue({
    el: '#app2',
    components: {
        MyPage
    }
})