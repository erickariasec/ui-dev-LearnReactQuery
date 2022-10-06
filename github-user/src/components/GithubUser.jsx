import { useQuery } from 'react-query';

function fetchUser(username) {
    return fetch(`http://api.github.com/users/${username}`)
        .then(res => res.json())
}

export default function GithubUser({username}) {
    const userQuery = useQuery (
        [username],
        () => fetchUser(username)
    )

    const data = userQuery.data;

    if (userQuery.isLoading) return <p>Loading...</p>;

    if (userQuery.isError) return <p>Error: {userQuery.error.message}</p>

    return (
        <pre>{JSON.stringify(data, null, 4)}</pre>
    )
}