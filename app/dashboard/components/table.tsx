type TableProps = {
    name: string;
}

export default function Table(props: TableProps){
    return(
            <tr className="bg-beige border-b border-light-brown/20 hover:bg-light-brown/10">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-brown bg-beige border-light-brown rounded-sm focus:ring-brown focus:ring-2"/>
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-dark-brown whitespace-nowrap">
                    {props.name}
                </th>
                <td className="px-6 py-4 text-dark-gray">
                    Silver
                </td>
                <td className="px-6 py-4 text-dark-gray">
                    Laptop
                </td>
                <td className="px-6 py-4 text-dark-brown font-semibold">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-brown hover:text-light-brown hover:underline">Edit</a>
                </td>
            </tr>
    )
}
