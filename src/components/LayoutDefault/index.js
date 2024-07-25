import { Button, Layout } from "antd";
import  "./Layout.scss"
import logo from '../../assets/images/logo.svg'
import MenuSider from "../MenuSider";
import { useState } from "react";
import {MenuFoldOutlined}  from '@ant-design/icons'
import { IoIosMusicalNote } from "react-icons/io";

const {Sider , Footer , Header ,Content} = Layout;
function LayoutDefault(){
    const [collapse , setCollapsed] = useState(false);
    return (
        <>
            <Layout className="layout">
                    <Sider theme="light" className="sider" width= "20%" collapsed = {collapse}>
                            <header className= " sider__head">
                                { (collapse?(""):(<div className="sider__head--logo" >
                                    <img src={logo} alt="logo"></img>
                                </div>)) }
                                
                                <div className="sider__head--icon">
                                   <MenuFoldOutlined className="icon" onClick= {()=> { setCollapsed(!collapse) } } />
                                </div>

                            </header>
                 
                            <MenuSider collapse = {collapse} />

                            <div className="sider__foot">
                                <Button className="sider__foot-btn"> <IoIosMusicalNote className="icon" />Add Music</Button>
                            </div>

                    </Sider>


                    <Layout >
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