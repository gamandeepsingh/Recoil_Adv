import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { messageatom, notificationatom, totalatom, viewatom } from './recoil'

function App() {

  return (
   <RecoilRoot>
      <ButtonComponent/>
   </RecoilRoot>
  )
}

function ButtonComponent() {
  const view = useRecoilValue(viewatom);
  const notification = useRecoilValue(notificationatom);
  const message = useRecoilValue(messageatom);
  const total = useRecoilValue(totalatom);
  // console.log(total);
  return (
    <div>
      <button>View{view>=100 ? "99+" : view }</button>
      <button>Notification{notification>=100 ? "99+":notification}</button>
      <button>Messages{message} </button>
      <button>Total{total}</button>
    </div>
  )
}

export default App
