import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button, IconButton }  from '@material-ui/core';
import "./Sidebar.css";
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from "./SidebarOption";
import StarIcon from '@material-ui/icons/Star';
import SnoozeIcon from '@material-ui/icons/Snooze';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch }  from 'react-redux';
import { openSendMessage } from "./features/mailSlice";


function Sidebar() {


    return (
        <div className = "sidebar">
            <Button startIcon = { <AddIcon fontSize = "large" />}
                                          className = "sidebar_compose"
                                           >
                                              Compose</Button>

                                              <SidebarOption Icon = { InboxIcon}
                                                title = "inbox"
                                                number = {34}
                                                selected  = {true}/>
                                                
                                              <SidebarOption Icon = {  StarIcon}
                                                title = "Starred"
                                                number = {13}/>

                                                <SidebarOption Icon = { SnoozeIcon }
                                                title = "Snooze"
                                                number = {13}/>

                                                <SidebarOption Icon = { SendIcon }
                                                title = "Sent"
                                                number = {13}/>

                                                <SidebarOption Icon = { DraftsIcon  }
                                                title = "Drafts"
                                                number = {13}/>

                                                <SidebarOption Icon = { ExpandMoreIcon }
                                                title = "more"
                                                number = {13}/>
               
               <div className= "sidebar_footer">
                   <div className = "sidebar_footerIcons">
                     <IconButton>
                    <PersonIcon/>
                     </IconButton>
                     <IconButton>
                    <DuoIcon />
                     </IconButton>
                     <IconButton>
                    <PhoneIcon/>
                     </IconButton>
                       </div>
                   </div>
            
        </div>
    )
}

export default Sidebar;
