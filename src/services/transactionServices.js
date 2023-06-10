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
    `transaction/stats?startDate=${monthStart.getTime()}&endDate=${monthEnd.getTime()}`
  );
  return data;
};

export { getTransactions, getCurrentMonthStats };
