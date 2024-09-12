"use client";

import React from "react";
import { User } from "@prisma/client";

interface UserBoxProps {
  data: User
}

const UserBox: React.FC<UserBoxProps> = ({
   data
}) => {

  return (
    <div>User</div>
  );
}

export default UserBox;8:49:13