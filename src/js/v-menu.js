const vMenu = new Vue({
  el: 'header.site-header',
  data: {
    menu: [],
    current: 1,
    activeSubMenu: [],
    isSubMenuActive: false,
  },
  methods: {
    currentElement(idx) {
      this.current = idx;
    },
    changeActiveSubMenu(index) {
      const bool = this.activeSubMenu.includes(index);
      this.activeSubMenu.splice(0, 1);
      !bool ? this.activeSubMenu.push(index) : '';
    },
    openClass(item) {
      return item.children.length ? 'menu-item-has-children' : '';
    },
  },
  computed: {
    isActive() {
      return this.isSubMenuActive ? 'active' : '';
    }
  },
  created() {
    // /wp-json/myroutes/menu
    const newMenu = [];

    function createNewElement(el) {
      return {
        id: el.ID,
        title: el.title,
        classes: el.classes,
        link: el.url,
        children: []
      }
    }

    fetch(`${location.origin}/wp-json/myroutes/menu`)
    .then(res => res.json())
    .then(menu => {
      const firstLevel = menu.filter(el => el.menu_item_parent === '0');
      firstLevel.forEach(el => {
        const newEl = createNewElement(el);
        console.log(newEl);
        menu.forEach(elem => {
          if(elem.menu_item_parent == el.ID) {
            const subElem = createNewElement(elem);
            menu.forEach(element => {
              if(element.menu_item_parent == elem.ID) {
                subElem.children.push(createNewElement(element));
              }
            });
            newEl.children.push(subElem);
          }
        });
        this.menu.push(newEl);
      });
    })
    .catch(err => console.log(err));
  }
});