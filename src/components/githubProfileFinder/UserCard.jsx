/* eslint-disable react/prop-types */
export default function UserCard({ user }) {
  const { login, avatar_url, following, followers, public_repos, html_url } =
    user;
  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar_url} />
      </div>
      <div className="name">
        <a href={html_url}>{login}</a>
      </div>
      <div className="profile">
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
  );
}
