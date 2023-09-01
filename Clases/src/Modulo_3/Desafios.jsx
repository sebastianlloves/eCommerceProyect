import { useUsers } from "./UsersContext";

export function UsersList() {
  const users = useUsers();
  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <ItemList key={user.id} user={user} />
      ))}
    </div>
  );
}

function ItemList({ user }) {
  return (
    <div className="bg-slate-50 w-1/4 m-2 p-4 text-left border-2 rounded-md shadow-md shadow-stone-500 border-stone-600 border-opacity-30 hover:scale-105 duration-150 hover:cursor-pointer self-center">
      <p>
        <b className="underline">Nombre:</b> {user.name}
      </p>
      <p>
        <b className="underline">Correo: </b> {user.email}
      </p>
    </div>
  );
}