import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator, DrawerActions } from "react-navigation";
import ArchiveNotes from './archive';
import ReminderNotes from './reminderNotes';
import TrashNotes from './trash';

import Dashboard from './dashboard';



const drawer = createDrawerNavigator({
    notes: {
        screen:Dashboard,
        navigationOpation: {
            header: null
        }
    },
    reminder: {
        screen: ReminderNotes,
        navigationOpation: {
            header: null

        }
    },
   
    archive: {
        screen: ArchiveNotes,
        navigationOpation: {
            header: null
        }

    },
    trash: {
        screen: TrashNotes,
        navigationOpation: {
            header: null
        }
    }

})
export default drawerContainer = createAppContainer(drawer);