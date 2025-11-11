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
        <h1 className="text-2xl font-bold text-dark-brown">Customers</h1>
        <p className="text-dark-gray mt-1">Manage your customer database and view customer information.</p>
      </div>

      {/* Customers Table */}
      <div className="bg-beige rounded-lg shadow-md border border-light-brown/20">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-dark-gray">
            <thead className="text-xs text-dark-brown uppercase bg-light-brown/10">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-brown bg-beige border-light-brown rounded-sm focus:ring-brown focus:ring-2"
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
