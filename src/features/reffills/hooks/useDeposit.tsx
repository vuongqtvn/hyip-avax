import { userApi } from "@/apis";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

export const useDeposit = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    setLoading(true);
    try {
      const data = await userApi.getUsers();
      setData(data);
      setLoading(false);
    } catch (error) {
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    loading,
    data,
  };
};
