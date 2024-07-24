import { Layout } from "antd";
import  "./Layout.scss"
import logo from '../../assets/images/logo.svg'
import MenuSider from "../MenuSider";
import { useState } from "react";
import {MenuFoldOutlined}  from '@ant-design/icons'
const {Sider , Footer , Header ,Content} = Layout;
function LayoutDefault(){
    const [collapsed , setCollapsed] = useState(false);
    const handleClick = ()=>{
        setCollapsed(!collapsed)
    }
    return (
        <>
            <Layout className="layout">
                    <Sider className="layout__sider" theme="light" collapsed = {collapsed}   >
                    <div className="sider-head">
                     <img src={logo} alt= "logo" className="sider-head__image" ></img>

                     <div className="sider-head__icon" onClick={handleClick}>
                    <MenuFoldOutlined />
                      </div>
                    </div>
                        <div className="layout__menu-main">
                            <MenuSider/>
                        </div>
                       
                    </Sider>
                    <Layout>
                            <header style={{ backgroundColor: '#4096ff'}}>
                                Header
                            </header>
                            <Content style={{ backgroundColor: "orange"}} >
                                Content
                            </Content>

                            <Footer style={{ backgroundColor: "green"}}>    
                                Footer
                            </Footer>
                    </Layout>

            </Layout>
        </>
    )
}
export default LayoutDefault