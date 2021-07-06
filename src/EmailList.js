import React from 'react';
import "./EmailList.css";
import { Checkbox, IconButton }  from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import Section from "./Section";
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';


function EmailList() {
    return (
        <div className = "emailList">
            <div className = "emailList_setting">
                <div className = "emailList_settingLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDownwardIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    </div>
                    <div className = "emailList_settingRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                        </div>
                        </div>

                        <div className = "emailList_section">
                            <Section Icon = {InboxIcon}
                                    title = 'Primary'
                                     color = 'red' selected/>

                                 <Section Icon = {PeopleIcon}
                                    title = 'Social'
                                     color = 'blue' />

                                  <Section Icon = {LocalOfferIcon}
                                    title = 'Promotions'
                                     color = 'green' />
                            
                </div>
                <div className = "emailList_list">
                    <EmailRow
                        title = "Manas"
                        subject = "hey hello"
                        description = "this test boom hats off what a ork u do som amazing go booom"
                        time = "10pm"/>
                    </div>
            
        </div>
    )
}

export default EmailList;
