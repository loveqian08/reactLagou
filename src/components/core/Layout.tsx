import { PageHeader } from "antd";
import React, { FC }  from "react";
import Navigation from "./Navigation";
import './common.scss'
interface Props {
    // children: React.ReactNode | void,
    children: any,
    title: string,
    subTitle: string
}
const Layout: FC<Props> = ({children, title, subTitle}) => {
    return (
        <div>
            <Navigation />
            <PageHeader title={title} subTitle={subTitle} />
            <div className="main">
                {children}
            </div>
        </div>
    )
}
export default Layout;