import { Button, Col, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography

export default function Login() {
	return (
		<div>
			<Row justify='center' style={{ height: 800 }}>
				<Col span={8}>
					<Title style={{ textAlign: 'center'}} level={3}>Login</Title>
					<Button style={{ width: '100%', marginTop: 5}}>
						Sign in with Google
					</Button>
					<Button style={{ width: '100%'}}>
						Sign in with Facebook
					</Button>
				</Col>
			</Row>
		</div>
	)
}