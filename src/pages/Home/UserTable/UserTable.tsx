import { useState, useEffect, FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AddUserDialog from "../AddUserDialog/AddUserDialog";

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UserTable: FC = () => {
  const defaultUsers: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "User" },
    { id: 4, name: "Lisa Brown", email: "lisa@example.com", role: "Moderator" },
  ];

  const [users, setUsers] = useState<User[]>([]);

  // Load users from localStorage or set default users
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
      try {
        const parsedUsers: User[] = JSON.parse(storedUsers);
        if (Array.isArray(parsedUsers) && parsedUsers.length > 0) {
          setUsers(parsedUsers);
        } else {
          setUsers(defaultUsers);
          localStorage.setItem("users", JSON.stringify(defaultUsers));
        }
      } catch (e) {
        console.log(e);
        setUsers(defaultUsers);
        localStorage.setItem("users", JSON.stringify(defaultUsers));
      }
    } else {
      setUsers(defaultUsers);
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);

  // Save users to localStorage whenever the users array changes
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  // Function to add a new user
  const addUser = (newUser: Omit<User, "id">) => {
    setUsers((prevUsers) => {
      const maxId =
        prevUsers.length > 0 ? Math.max(...prevUsers.map((u) => u.id)) : 0;
      return [
        ...prevUsers,
        { id: maxId + 1, ...newUser }, // Ensure unique id by adding 1 to maxId
      ];
    });
  };

  // Function to delete a user
  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      {/* Add New User Dialog */}
      <div className="flex justify-center items-center my-2">
        <AddUserDialog addUser={addUser} />
      </div>

      {/* Table for displaying users */}
      <div className="overflow-x-auto w-full md:mt-4">
        <Table className="min-w-[600px] lg:w-1/3 mx-auto">
          <TableCaption>A list of registered users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-left">ID</TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-left">Email</TableHead>
              <TableHead className="text-left">Role</TableHead>
              <TableHead className="text-left">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTable;
