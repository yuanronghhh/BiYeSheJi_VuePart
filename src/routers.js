// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
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
}, {
  path: '/login',
  name: 'login',
  component: Login
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
  path: '/user',
  name: 'user',
  component (resolve) {
    require.ensure(['./views/user.vue'], () => {
      resolve(require('./views/user.vue'));
    });
  },
  meta: { requiresAuth: true }
}, {
  path: '/user/:info',
  name: 'user_info',
  component (resolve) {
    require.ensure(['./views/user.vue'], () => {
      resolve(require('./views/user.vue'));
    });
  },
  meta: { requiresAuth: true }
}, {
  path: '/item/:id/detail',
  name: 'detail',
  component (resolve) {
    require.ensure(['./views/detail.vue'], () => {
      resolve(require('./views/detail.vue'));
    });
  },
  meta: { requiresAuth: true }
}, {
  path: '*',
  component: NotFound
}];

export default routers;
