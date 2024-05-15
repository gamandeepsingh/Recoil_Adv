import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import './App.css'
import { notificationState, totalNotificationState } from './recoil'
import { useEffect } from 'react'

function App() {

  return (
    <RecoilRoot>
      <ButtonGrp/>
    </RecoilRoot>
  )
}

function ButtonGrp(){
  const [notify,setNotify] = useRecoilState(notificationState)
  const setTodo = useSetRecoilState(totalNotificationState)

  async function fetchData(){
    const res =await fetch("https://sum-server.100xdevs.com/notifications")
  const response =await res.json();
    setNotify(response)
    console.log(notify);
  }
  useEffect(()=>{
    fetchData()
  },[])

  return(
    <div>
      <button>Networks{notify.network}</button>
      <button>Jobs{notify.jobs}</button>
      <button>Message{notify.messaging}</button>
      <button>Notification{notify.notifications}</button>
      <button>Total{setTodo}</button>
      <br />
      <button onClick={fetchData}>Fetch</button>
    </div>
  )
}
export default App
