import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Card, Layout, Menu, Breadcrumb, Image, Dropdown, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';
import { ExceptionContainer } from './../pages/Exception/ExceptionContainer';
import { tabList } from './../applicationConstants';
import logo from './../images/logo.png';
import './BaseApp.scss';
import './../components/antd.css'

export class BaseApp extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const { Header, Sider, Content } = Layout,
		 { SubMenu } = Menu;
		
		return(
			<Layout className="layout">
				<Header>
					<Image src={logo} width={120}/>
					 <Menu mode="horizontal">
						<Menu.Item key="mail" icon={<MailOutlined />}>
						  Dashboard
						</Menu.Item>
						<Menu.Item key="app" icon={<AppstoreOutlined />}>
						  Floor view
						</Menu.Item>
						<Menu.Item key="mail" icon={<MailOutlined />}>
						  Data base
						</Menu.Item>
						<Menu.Item key="app" icon={<AppstoreOutlined />}>
						  PD portal
						</Menu.Item>
						<Menu.Item key="mail" icon={<MailOutlined />}>
						  Admin
						</Menu.Item>
						<Menu.Item key="app" icon={<AppstoreOutlined />}>
						  Settings
						</Menu.Item>
					 </Menu>
				</Header>
				<Content style={{ padding: '0 50px' }}>
				  <Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Breadcrumb Link</Breadcrumb.Item>
					<Breadcrumb.Item>Breadcrumb Link</Breadcrumb.Item>
					<Breadcrumb.Item>Comp Review</Breadcrumb.Item>
				  </Breadcrumb>
				  <div className="site-layout-content">
					<Card
					  style={{ width: '100%' }}
					  tabList={tabList}
					  activeTabKey={'tab2'}
					>
					Department: 
					{
						<>
							<Dropdown disabled={true} className="drop-down">
							  <Button>
								Button <DownOutlined />
							  </Button>
							</Dropdown>
							<Button className="report-btn">Run Report</Button>
						 </>
					}
					</Card>
					<ExceptionContainer/>
				  </div>
				</Content>
			</Layout>
		);
	}
}

