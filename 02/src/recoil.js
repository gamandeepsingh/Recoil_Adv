import { atom, selector } from 'recoil'
export const notificationState = atom({
    key: 'notificationState',
    default:{
        network:5,
        jobs:7,
        messaging:4,
        notifications:4
    }
})

export const totalNotificationState = selector({
    key: 'totalNotificationState',
    get:({get})=>{
        const notify = get(notificationState);
        const total = notify.network + notify.jobs + notify.messaging + notify.notifications
        return total
    }
})