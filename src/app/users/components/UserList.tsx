"use client";

import { User } from "@prisma/client";

interface UserListProps {
  items: User[]
}

const UserList = () => {
  return (
    <div>
      User List
    </div>
  );
}

export default UserList;3:04:05