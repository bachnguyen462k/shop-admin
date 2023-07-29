interface NavBarMenu {
  url: string;
  title: string;
  icon?: string;

}

export const NON_AUTH_MENU: NavBarMenu[] = [
  {
    url: '',
    title: 'Home',
  },
  {
    url: 'login',
    title: 'Sign in',
  },
  {
    url: 'register',
    title: 'Sign up',
  },
];

export const AUTH_MENU: NavBarMenu[] = [
  {
    url: 'san-pham',
    title: 'Sản phẩm',
    icon: 'bi bi-cart',
  },
  {
    url: 'danh-muc',
    title: 'Danh mục',
    icon: 'bi bi-list-task',
  },
  {
    url: 'don-hang',
    title: 'Đơn hàng',
    icon: 'bi bi-bag',
  },
];


export const AUTH_MENU_CUSTOMERS: NavBarMenu[] = [
  {
    url: 'nguoi-dung',
    title: 'Người dùng',
    icon: 'bi bi-people',
  },
  {
    url: 'danh-gia',
    title: 'Đánh giá',
    icon: 'bi bi-star',
  },
  
];
