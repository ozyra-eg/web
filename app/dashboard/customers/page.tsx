import Table from "../components/table";

export default function Page() {
  const customerInfo = [
    { name: "joe" },
    { name: "joe" },
    { name: "joe" },
    { name: "joe" },
  ];

  const customerElement = customerInfo.map(function (item, index) {
    return <Table key={index} name={item.name} />;
  });

  return (
    <>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Customers</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your customer database and view customer information.</p>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{customerElement}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
