import { AppLayout, AppSidebar, UserList } from "./components";
import { useUsers } from "@/api/users";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { usersState } from "@/stores/filters-store";

function App() {
  const [, setUsers] = useRecoilState(usersState);
  const { data } = useUsers();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return (
    <AppLayout>
      <AppSidebar />
      <UserList />
    </AppLayout>
  );
}

export default App;
