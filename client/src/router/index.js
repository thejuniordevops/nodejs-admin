import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
/*Redux异步Action测试*/
import reduxThunkAction from '../containers/examples/reduxThunkAction';
import reduxPromiseAction1 from '../containers/examples/reduxPromiseAction1';
import reduxPromiseAction2 from '../containers/examples/reduxPromiseAction2';
/*前端页面组件*/
import Layout from '../component/layout/layout';
import Home from '../containers/home/home';
import NotFound from '../containers/404/404';
import Login from '../containers/login/login';


const RouterConfig = () => (
	<HashRouter>
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/404" component={NotFound} />
			<Layout>
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/reduxThunkAction" component={reduxThunkAction} />
					<Route exact path="/reduxPromiseAction1" component={reduxPromiseAction1} />
					<Route exact path="/reduxPromiseAction2" component={reduxPromiseAction2} />
					<Redirect from='*' to='/404' />
				</Switch>
			</Layout>
			<Redirect from='*' to='/404' />
		</Switch>
	</HashRouter>
);
export default RouterConfig;
