/* eslint-disable react/prop-types */
export default function UserCard({ user }) {
  const { login, avatar_url, following, followers, public_repos, html_url } =
    user;
  return (
    <div className="user p-4 border rounded">
      <div className="flex items-center gap-4">
        <div className="avatar h-12 w-12 rounded-full">
          <img src={avatar_url} />
        </div>
        <div className="name flex gap-4 justify-center  align-center mt-5">
          <a className="text-2xl font-bold" href={html_url}>
            {login}
          </a>
        </div>
      </div>

      <div className="profile  flex justify-center mt-5">
        <div className="flex gap-4">
          <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
