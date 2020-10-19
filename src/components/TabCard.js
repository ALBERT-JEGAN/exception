import React, { Component } from 'react';
import { Card, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { tabList } from './../applicationConstants';

export class TabCard extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {		
		return(
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
		);
	}
}

TabCard.propTy
