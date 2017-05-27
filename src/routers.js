const Home = resolve => {
  require.ensure(['./views/index.vue'], () => {
    resolve(require('./views/index.vue'));
  });
};

const Login = resolve => {
  require.ensure(['./views/login.vue'], () => {
    resolve(require('./views/login.vue'));
  });
};

const NotFound = {template: '<p>NotFound</p>'};

const routers = [{
  path: '/',
  name: 'home',
  component: Home
},  {
  path: '/search/:search_words',
  name: 'search',
  component (resolve) {
    require.ensure(["./views/search.vue"], () => {
      resolve(require('./views/search.vue'));
    });
  }
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/updatepass',
  name: 'updatepass',
  component (resolve) {
    require.ensure(['./views/updatepass.vue'], () => {
      resolve(require('./views/updatepass.vue'));
    });
  }
}, {
  path: '/resetpass',
  name: 'resetpass',
  component (resolve) {
    require.ensure(['./views/reset.vue'], () => {
      resolve(require('./views/reset.vue'));
    });
  }
}, {
  path: '/signup',
  name: 'signup',
  component (resolve) {
    require.ensure(['./views/signup.vue'], () => {
      resolve(require('./views/signup.vue'));
    });
  }
}, {
  path: '/items',
  name: 'items',
  component (resolve) {
    require.ensure(['./views/list.vue'], () => {
      resolve(require('./views/list.vue'));
    });
  }
}, {
  path: '/items/:id/detail',
  name: 'detail',
  component (resolve) {
    require.ensure(['./views/detail.vue'], () => {
      resolve(require('./views/detail.vue'));
    });
  }
}, {
  path: '/user',
  name: 'user',
  component (resolve) {
    require.ensure(['./views/user.vue'], () => {
      resolve(require('./views/user.vue'));
    });
  },
  meta: { requiresAuth: true }
}, {
  path: '/user/order',
  name: 'order',
  component (resolve) {
    require.ensure(['./views/order.vue'], () => {
      resolve(require('./views/order.vue'));
    });
  }
}, {
  path: '/user/comment',
  name: 'comment',
  component (resolve) {
    require.ensure(['./views/user_comment.vue'], () => {
      resolve(require('./views/user_comment.vue'));
    });
  },
  meta: { requiresAuth: true }
}, {
  path: '/admin',
  name: 'admin',
  component (resolve) {
    require.ensure(["./views/admin.vue"], () => {
      resolve(require('./views/admin.vue'));
    });
  },
  children: [{
    path: 'user',
    component (resolve) {
      require.ensure(["./components/user_table.vue"], () => {
        resolve(require('./components/user_table.vue'));
      });
    }
  }, {
    path: 'comment',
    component (resolve) {
      require.ensure(["./components/comment_table.vue"], () => {
        resolve(require('./components/comment_table.vue'));
      });
    }
  }, {
    path: 'order',
    component (resolve) {
      require.ensure(["./components/order_table.vue"], () => {
        resolve(require('./components/order_table.vue'));
      });
    }
  }]
}, {
  path: '*',
  component: NotFound
}];

export default routers;
