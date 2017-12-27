/**
 * 第一个参数是初始state值【state不能为undefined，所以默认为null】
 * 第二个参数是dispatch传入的参数
 * 所以dispatch相当于执行reducer函数
 */
export default (state = null, action) => {
	console.log(state, action);
	switch (action.type) {
		case 'selectUsers':
			return state;
		default: 
			return state;
	}
};