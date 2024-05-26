"use client";
interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`User Id: ${userId}`);
  return (
    <>
      <button onClick={handleClick}>Lihat User</button>
    </>
  );
};

export default ViewUserButton;
