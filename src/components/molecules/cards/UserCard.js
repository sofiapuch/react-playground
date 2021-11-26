import Card from "../../../layout/card/Card";

const UserCard = (props) => {
  const { name, age } = props;

  return (
    <li className="user-card">
      <Card className="user-card__card">
        <p className="user-card__name">{name}</p>
        <p className="user-card__age">{age}</p>
      </Card>
    </li>
  )
}

export default UserCard;