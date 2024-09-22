import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

interface DemoUseContextProps { }


export interface User {
    isSubscribed: boolean;
    name: string
}
const DemoUseContext = ({ }: DemoUseContextProps) => {
    const [user] = useState<User>({
        isSubscribed: true,
        name: "Shakil"
    });
    return (
        <div>
            <h1>Hello iam Use Context </h1>
            <DashboardContext.Provider value={user} >
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
};

export default DemoUseContext;