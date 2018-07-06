// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Reg from './pages/Reg';
import BlankLayout from './layouts/BlankLayout';
import Signin from './pages/Signin';

import HeaderFooterLayout from './layouts/HeaderFooterLayout';
import Realhome from './pages/Realhome';
import NotFound from './pages/NotFound';
import CourseDetail from './pages/CourseDetail/CourseDetail';

const routerConfig = [
  {
    path: '/reg',
    layout: BlankLayout,
    component: Reg,
  },
  {
    path: '/signin',
    layout: BlankLayout,
    component: Signin,
  },
  {
    path: '/',
    layout: HeaderFooterLayout,
    component: Realhome,
  },{
    path: '/course/:courseId',
    layout: HeaderFooterLayout, 
    component: CourseDetail
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  }
];

export default routerConfig;
