import WidgetBase from '@dojo/framework/core/WidgetBase';
import ChildRoutedWidget from './ChildRoutedWidget';
import Outlet from '@dojo/framework/routing/Outlet';
import { w } from '@dojo/framework/core/vdom';

export default class RoutedWidget extends WidgetBase {
	protected render() {
		return w(Outlet, {
			id: 'bar',
			renderer() {
				return w(ChildRoutedWidget, {});
			}
		});
	}
}
