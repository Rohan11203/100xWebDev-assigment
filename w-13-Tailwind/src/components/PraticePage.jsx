import { DateCom } from "./DateCom"
import { Profile } from "./Profile"
import { Random } from "./Random"
import { SideBar } from "./Sidebar"

export const PraticePage = () => {
  return (
    <div className="grid">
      <SideBar />
      <Profile />
      <Random />
      <DateCom />
    </div>
  )
}