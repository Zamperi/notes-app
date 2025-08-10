import UserProvider from "./UserProvider";
import { ErrorProvider } from "./ErrorProvider";

function AppProvider({children}){
    return (
        <ErrorProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </ErrorProvider>

    );
}

export default AppProvider;