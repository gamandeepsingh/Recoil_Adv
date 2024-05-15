import { atom, selector } from "recoil";


export const viewatom = atom({
    key:"viewatom",
    default:104
})
export const messageatom = atom({
    key:"messageatom",
    default:90
})
export const notificationatom = atom({
    key:"notificationatom",
    default:20
})

export const totalatom = selector({
    key:"totalatom",
    get: ({get})=>{
        const noti = get(notificationatom);
        const msg = get(messageatom);
        const view = get(viewatom);
        return noti+msg+view;
    }
})