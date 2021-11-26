import UserCard from "../../molecules/cards/UserCard";

const UserCards = (props) => {
  const usersList = props.usersList;

  if (usersList.length === 0) {
    return (
      <div className="grid-container">
        <p>Add users to the list</p>
      </div>
    )
  }

  return (
    <div className="grid-container">
      <ul>
        <li>
          {usersList.map((user, index) => <UserCard key={`${user.name}-${index}`} name={user.name} age={user.age} />)}
        </li>
      </ul>  
    </div>
  )
}

export default UserCards;