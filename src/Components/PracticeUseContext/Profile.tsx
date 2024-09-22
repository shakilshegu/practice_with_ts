
import { useUserContext } from "./context";

interface ProfileProps {
}

const Profile = ({}: ProfileProps) => {
    const user = useUserContext()
    return (
        <div>{user.name}</div>
    )

};

export default Profile;