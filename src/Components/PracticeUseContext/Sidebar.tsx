
import { useUserContext } from "./context";

interface SidebarProps {
}

const Sidebar = ({}: SidebarProps) => {
    const user = useUserContext()
  return (
    <div>
        <div>{user.name}</div>
        <div>Subscription Status : {user.isSubscribed}</div>
    </div>
  )
};

export default Sidebar;