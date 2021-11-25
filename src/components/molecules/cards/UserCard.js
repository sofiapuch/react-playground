import Card from "../../../layout/card/Card";

const UserCard = (props) => {
  const { name, age } = props;

  return (
    <Card className="user-card">
      <p className="user-card__name">{name}</p>
      <p className="user-card__age">{age}</p>
    </Card>
  )
}

export default UserCard;