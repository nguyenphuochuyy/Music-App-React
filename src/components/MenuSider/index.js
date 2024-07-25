import { Menu } from "antd"
import { RiAlbumFill } from "react-icons/ri";
import { FaHome , FaMusic } from "react-icons/fa";
import { IoMic } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GrAnalytics } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import {HistoryOutlined} from "@ant-design/icons"
import { BsCalendar2EventFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
function MenuSider(props){
    const {collapse} = props;
    console.log(collapse);
    const items = [
        {
            label : "Home",
            key : "home",
            icon: <FaHome />
        },
        {
            label : "Genres",
            key : "genres",
            icon : <RiAlbumFill />

        },
        {
            label : "Music",
            key : "music",
            icon : <FaMusic />
    
        }
        ,
        {
            label : "Albums",
            key : "albums",
            icon : <RiAlbumFill />

        },
        {
            label : "Artists",
            key : "artists",
            icon : <IoMic />

        },
      
        {
            label : "Stations",
            key : "stations",
            icon : <HiOutlineDocumentReport />

        },
        {
            label :<>
                         { (collapse? (<>...</>) : (<>Events</>)) }
                     </>
        },
        {
            label : "Analytics",
            key : "analytics",
            icon: <GrAnalytics />
        },
        {
            label : "Favorites",
            key : "favorites",
            icon : <MdFavoriteBorder />

        },
        {
            label : "Histoty",
            key : "history",
            icon : <HistoryOutlined />

        },
        {
            label :<>
                         { (collapse? (<>...</>) : (<>Events</>)) }
                     </>
        },
        {
            label : "Events",
            key : "events",
            icon : <BsCalendar2EventFill />
        },
        {
            label: "Add Event",
            key : "addEvent",
            icon :<IoMdAddCircle />
        }
    ]
    return(
        <>
            <Menu
                mode="inline"
                items={items}
            />
        
        </>
    )
}
export default MenuSider