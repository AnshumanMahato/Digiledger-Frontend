import apiRequest from "./apiRequest";

const getTransactions = async (filters) => {
  try {
    let query = "";
    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          query += `${key}=${filters[key]}&`;
        }
      });
    }
    const {
      data: { data },
    } = await apiRequest(`/transaction?${query}`);
    return data;
  } catch (err) {
    if (err.response.status === 404)
      return {
        count: 0,
        totalPages: 0,
        docs: [],
      };
  }
};

const getCurrentMonthStats = async () => {
  const today = new Date();
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1),
    monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const { data } = await apiRequest(
    `/transaction/stats?startDate=${monthStart.getTime()}&endDate=${monthEnd.getTime()}`
  );
  return data;
};

const addTransaction = async ({
  amount,
  type,
  party,
  category,
  timestamp,
  description,
}) => {
  const transaction = {
    amount,
    type,
    party,
    category,
    description,
    timestamp: timestamp.getTime(),
  };

  try {
    const { data } = await apiRequest.post("/transaction", transaction);
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

const updateTransaction = async (transactionId, updatedData) => {
  const updates = { ...updatedData };
  if (updates.timestamp) {
    updates.timestamp = updates.timestamp.getTime();
  }
  try {
    const { data } = await apiRequest.patch(
      `/transaction/${transactionId}`,
      updates
    );
    return data;
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

const deleteTransaction = async (transactionId) => {
  try {
    const res = await apiRequest.delete(`/transaction/${transactionId}`);
    console.log(res);
    return {
      data: "success",
    };
  } catch (err) {
    return {
      err: err.response?.data.message || err.message,
    };
  }
};

export {
  getTransactions,
  getCurrentMonthStats,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
