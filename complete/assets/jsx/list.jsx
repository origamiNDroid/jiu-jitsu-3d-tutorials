const Table = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Tags</th>
                </tr>
                {DataTransfer.map((item)=> (
                    <tr key = {item.id}>
                        <td>{item.name}</td>
                        <td>{item.tags}</td>
                    </tr>
                ))}
                <tr>

                </tr>
            </tbody>
        </table>
    )
}