import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.baseInfo}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsListItem}>
          <span className={css.statName}>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statName}>Views</span>
          <span className={css.statValue}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statName}>Likes</span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
